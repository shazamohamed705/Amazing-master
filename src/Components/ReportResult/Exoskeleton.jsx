import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FaChevronDown, FaInfoCircle } from "react-icons/fa";
import FullScreenGallery from "../FullScreenGallery/FullScreenGallery";
import hallbackImage from "../../assets/immage3.png";

function Exoskeleton() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationData = location.state;

  const [Filter, setFilter] = useState("specifics");
  const [openInfoIndex, setOpenInfoIndex] = useState(null);
  const [openGallery, setOpenGallery] = useState(null);
  const [exoskeletonData, setExoskeletonData] = useState(null);

  const storedToken = localStorage.getItem("token");

useEffect(() => {
  if (!navigationData?.report && !navigationData?.searchResults) {
    console.error("لا توجد بيانات للتقرير، يرجى البحث أولاً.");
    navigate("/report-search");
    return;
  }

  const navData = navigationData.searchResults || navigationData.report;
  let targetReport = Array.isArray(navData) ? navData[0] : navData;

  if (navigationData.reportNum && Array.isArray(navData)) {
    const foundReport = navData.find(
      (r) => r.report_number === navigationData.reportNum
    );
    if (foundReport) targetReport = foundReport;
  }

  if (targetReport) {
    const mapPoints = (points) =>
      (points || []).map((p) => ({
        label: p.name_ar,
        Stats: p.score === 1 ? "✔️" : p.score === 2 ? "⚠️" : "❌",
        info: p.infoexplanation_ar,
        gallery: p.point_images
          ? JSON.parse(p.point_images).map((img) => ({
              src: `https://demo.syarahplus.sa/backend/${img}`,
              title: p.name_ar,
              subtitle: p.infoexplanation_ar,
            }))
          : [],
      }));

    const itemis = (targetReport.items || []).map((i) => ({
      title: i.name_ar,
      type: "details",
      carInformation: { image: hallbackImage },
      descriptionPoints1: [
        "يقدّم كارسيرفس تقييم وفحص شامل ودقيق لهيكل السيارة الخارجي...",
        "يتم إجراء الفحص باستخدام عدة طرق، مثل...",
      ],
      control: {
        specifics: mapPoints(i.points_specifics),
        continue: mapPoints(i.points_continue),
        outline: mapPoints(i.points_outline),
        onabort: mapPoints(i.points_onabort),
        allpoint: mapPoints(i.points_allpoint),
        parent: mapPoints(i.points_parent),
        review: mapPoints(i.points_review),
        sheet: mapPoints(i.points_sheet),
        tablet: mapPoints(i.points_tablet),
        carImage: i.car_image
          ? `https://demo.syarahplus.sa/backend/${i.car_image}`
          : "",
      },
    }));

    setExoskeletonData({ itemis });
  }
}, [navigationData, navigate]);

if (!exoskeletonData) return <div>Loading...</div>;

  return (
    <div id="الهيكل-الخارجي">
      <div className="space-y-5 mt-6">
        {exoskeletonData.itemis.map((item, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <span className="font-medium">{item.title}</span>
                  <FaChevronDown
                    className={`transform transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-2 rounded-b-md border border-t-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                  <div className="grid grid-cols-2 gap-6">
                    {/* صورة السيارة */}
                    <div className="flex flex-col items-center justify-center p-6 shadow rounded-lg">
                      <img
                        src={item.carInformation.image}
                        alt="Car"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    {/* نصوص الوصف */}
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                        {item.descriptionPoints1.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* أزرار الفلاتر */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {[
                      { key: "specifics", label: "جميع نقاط الفحص" },
                      { key: "continue", label: "حالة البودي الخارجي" },
                      { key: "outline", label: "الزجاج" },
                      { key: "onabort", label: "المرايه الجانبية" },
                      { key: "allpoint", label: "الشبر" },
                      { key: "parent", label: "الاطار الاحتياطي" },
                      { key: "review", label: "الجك والعده الأضافيه" },
                      { key: "sheet", label: "مفتاح الاطارات" },
                      { key: "tablet", label: "الحالة الداخلية1" },
                    ].map((btn) => (
                      <button
                        key={btn.key}
                        onClick={() => setFilter(btn.key)}
                        className={`px-4 py-2 rounded transition-colors duration-200 ${
                          Filter === btn.key
                            ? "bg-blue-500 text-white dark:bg-blue-600"
                            : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* النقاط حسب الفلتر */}
                  {[
                    "specifics",
                    "continue",
                    "outline",
                    "onabort",
                    "allpoint",
                    "parent",
                    "review",
                    "sheet",
                    "tablet",
                  ].includes(Filter) &&
                    (() => {
                      const src = exoskeletonData.itemis[0]?.control[Filter] ?? [];
                      const mid = Math.ceil(src.length / 2);
                      const cols = [src.slice(0, mid), src.slice(mid)];

                      return (
                        <div className="mt-10 grid grid-cols-2 gap-x-16 gap-y-10">
                          {cols.map((col, colIdx) => (
                            <div key={colIdx} className="space-y-6">
                              {col.map((row, i) => {
                                const stat = row.stats ?? row.Stats ?? "";

                                return (
                                  <div key={`${colIdx}-${i}`} className="pb-3">
                                    {/* السطر الأساسي */}
                                    <div className="flex justify-between items-center">
                                      <div className="flex items-center gap-3 relative">
                                        {row.info && (
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setOpenInfoIndex(
                                                openInfoIndex === `${colIdx}-${i}`
                                                  ? null
                                                  : `${colIdx}-${i}`
                                              );
                                            }}
                                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-base relative transition-colors"
                                          >
                                            <FaInfoCircle size={20} />
                                            {openInfoIndex === `${colIdx}-${i}` && (
                                              <div className="absolute -top-10 right-0 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg w-64 z-10">
                                                {row.info}
                                              </div>
                                            )}
                                          </button>
                                        )}
                                        <span className="text-black dark:text-white text-base font-medium">
                                          {row.label}
                                        </span>
                                      </div>

                                      <span
                                        className={`font-bold text-base ${
                                          stat === "✅" || stat === "✔️"
                                            ? "text-green-500"
                                            : stat === "⚠️"
                                            ? "text-yellow-500"
                                            : "text-red-500"
                                        }`}
                                      >
                                        {stat}
                                      </span>
                                    </div>

                                    {/* الصور المصغرة */}
                                    {row.gallery && row.gallery.length > 0 && (
                                      <div className="mt-3">
                                        <img
                                          src={row.gallery[0].src}
                                          alt={row.label}
                                          className="w-32 h-24 object-cover rounded-lg shadow cursor-pointer hover:opacity-80 transition-opacity"
                                          onClick={() =>
                                            setOpenGallery({ images: row.gallery, start: 0 })
                                          }
                                        />
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      );
                    })()}

                  {openGallery && (
                    <FullScreenGallery
                      images={openGallery.images}
                      startIndex={openGallery.start}
                      onClose={() => setOpenGallery(null)}
                    />
                  )}

                  <div className="p-2 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold text-base rounded">
                    {/* النصوص */}
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                      الملاحظات:
                      <li>
                        لم يتم التأكد من قراءة العداد الحالية لعدم توفر مصادر موثوقة لدى كارسيرفس وقت الفحص
                      </li>
                    </ul>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default Exoskeleton;
