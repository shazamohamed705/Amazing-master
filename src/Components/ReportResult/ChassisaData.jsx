import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronDown, FaInfoCircle } from "react-icons/fa";
import iallbackImage from '../../assets/img20.png';
import pallbackImage  from  '../../assets/img23.png';
import FullScreenGallery from "../FullScreenGallery/FullScreenGallery";

function ChassisData() {
  const [openInfoIndex, setOpenInfoIndex] = useState(null);
  const [openGallery, setOpenGallery] = useState(null);
  const [Filterr, setFilterr] = useState("specifics1"); 
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenInfoIndex(null);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const Chassisa = {
    itimis: [
      {
        title: "الشاصي والهيكل ",
        type: "details",
        carInformation1: {
          images: [iallbackImage, pallbackImage]
        },
        descriptionPoints2: [
          "في كارسيرفيس نقوم بتقييم و فحص الشاصي و الهيكل الداخلي للسيارة اعتمادا على القياسات و الأبعاد الأصلية و التأكد من عدم وجود نقاط لحام على المفاصل الرئيسية أو وجود أي انحراف او تأثير على أداء السيارة حسب نظام CCM العالمي.",
          "يتم اجراء الفحص عن طريق :",
          "نظام قياس الانحرافات بالليزر",
          "الفحص النظري المختص",
          "يغطي هذا القسم النقاط التالية :",
          "الشاصيات الأربعة",
          "الهيكل الأمامي",
          "هيكل السقف",
          "الهيكل الخلفي",
          "الواجهة الأمامية",
          "الواجهة الخلفية",
          "جوانب السيارة",
          "ملاحظة هامة : يتم الفحص دون أي ذكر أو مقارنة مع مصطلحات الفحص التقليدية ( مثل جيد ، مضروب ، ضربة بنكيت ، قصعة ، دقة.. الخ )"
        ],
        Power: {
          specifics1: [
            {
              label: " فياسات الشاصي الامامي ",
              Stats: "⚠️",
              info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
              gallery: [
                { src: "/img4.png", diagram: "/iamg10.png", title: "صدام امامي", subtitle: "خدوش بسيطة" },
                { src: "/img6.png", diagram: "/iamg9.png", title: "صدام امامي", subtitle: "تفاصيل إضافية" },
                { src: "/img1.png", diagram: "/iiamge8.png", title: "صدام امامي", subtitle: "زاوية مختلفة" },
              ],
            },
            { label: " ضربيه قويه ف الشاصي الامامي ." },
            {
              label: " فياسات الشاصي الامامي الايسر",
              Stats: "⚠️",
              info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
              gallery: [
                { src: "/img4.png", diagram: "/iamg10.png", title: "صدام امامي", subtitle: "خدوش بسيطة" },
                { src: "/img6.png", diagram: "/iamg9.png", title: "صدام امامي", subtitle: "تفاصيل إضافية" },
                { src: "/img1.png", diagram: "/iiamge8.png", title: "صدام امامي", subtitle: "زاوية مختلفة" },
              ],
            },
            { label: " ضربيه قويه ف الشاصي الامامي ." },
            { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
            { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
            { label: " ضربيه قويه ف الشاصي الامامي ." },
            {
              label: "الهيكل الامامي ",
              Stats: "⚠️",
              info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
              gallery: [
                { src: "/img4.png", diagram: "/iamg10.png", title: "صدام امامي", subtitle: "خدوش بسيطة" },
                { src: "/img6.png", diagram: "/iamg9.png", title: "صدام امامي", subtitle: "تفاصيل إضافية" },
                { src: "/img1.png", diagram: "/iiamge8.png", title: "صدام امامي", subtitle: "زاوية مختلفة" },
              ],
            },
            { label: "ضربه في مقدمه المركبه ." },
            { label: "الهيكل الخلفي ", Stats: "⚠️" },
            {
              label: "الهيكل العلولي  ",
              Stats: "⚠️",
              info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
              gallery: [
                { src: "/img4.png", diagram: "/iamg10.png", title: "صدام امامي", subtitle: "خدوش بسيطة" },
                { src: "/img6.png", diagram: "/iamg9.png", title: "صدام امامي", subtitle: "تفاصيل إضافية" },
                { src: "/img1.png", diagram: "/iiamge8.png", title: "صدام امامي", subtitle: "زاوية مختلفة" },
              ],
            },
            { label: "الزجاج الأمامي", Stats: "⚠️" },
            { label: "الزجاج الخلفي", Stats: "✔️" },
          ],

          carImagee: iallbackImage,

          continue1: [
            {
              label: "صدام امامي",
              Stats: "⚠️",
              info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
              gallery: [
                { src: "/img4.png", diagram: "/iamg10.png", title: "صدام امامي", subtitle: "خدوش بسيطة" },
                { src: "/img6.png", diagram: "/iamg9.png", title: "صدام امامي", subtitle: "تفاصيل إضافية" },
                { src: "/img1.png", diagram: "/iiamge8.png", title: "صدام امامي", subtitle: "زاوية مختلفة" },
              ],
            },
            { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
            { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
            { label: "باب خلفي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
            { label: "باب خلفي شمال", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
            { label: "الكبوت", Stats: "⚠️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
            { label: "الشنطة", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
            { label: "السقف", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
            { label: "الزجاج الأمامي", Stats: "⚠️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
            { label: "الزجاج الخلفي", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          ],

          outline1: [
            { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
            { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
            { label: ".نقرات الزجاج الامامي" },
          ],

          onabort1: [
            { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
            { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          ],

          allpoint1: [
            { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
            { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          ],

          parent: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

          review: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

          sheet: [{ label: "مفتاح الربط", Stats: "❌" }],

          tablet1: [
            {
              label: "الحالة الداخلية",
              Stats: "⚠️",
              info:
                "وجود بعض التشققات في الأجزاء الداخلية ليس بالأمر المقلق ، ما لم يكن كسر أو مزع مؤثر على شكل أو أداء الأجزاء الداخلية",
            },
          ],
        },
      },
    ],
  };

  return (
    <div id="الشاصي-والهيكل">
      <div className="space-y-5 mt-6">
      {Chassisa.itimis.map((item, idx) => (
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
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow rounded-lg" >
                    {Chassisa.itimis[0].carInformation1.images.map((img, i) => (
      <img key={i} src={img} alt={`car ${i}`} />
    ))}
    
                  </div>
    
                  {/* نصوص الوصف */}
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                      {item.descriptionPoints2.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
    
                {/* أزرار الفلاتر */}
               <div className="flex flex-wrap gap-3 mt-6">
      {[
        { key: "specifics1", label: "جميع نقاط الفحص" },
        { key: "continue1", label: "قياسات الشاصي الامامي اليمين1" },
        { key: "outline1", label: "" },
        { key: "onabort1", label: "المرايه الجانبية" },
        { key: "allpoint1", label: "الشبر" },
        { key: "parent", label: "الاطار الاحتياطي" },
        { key: "review", label: "الجك والعده الأضافيه" },
        { key: "sheet", label: "مفتاح الاطارات" },
        { key: "tablet1", label: "الحالة الداخلية1" },
      ].map((btn) => (
        <button
          key={btn.key}
          onClick={() => setFilterr(btn.key)}
          className={`px-4 py-2 rounded transition-colors duration-200 ${
            Filterr === btn.key
              ? "bg-blue-500 text-white dark:bg-blue-600"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
    
    
                {/* محتوى الفلاتر */}
    {["specifics1", "continue1","outline1","onabort1","allpoint1","parent","review","sheet","tablet1"].includes(Filterr) && (
      (() => {
        const src = Chassisa.itimis[0]?.Power[Filterr] ?? [];
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
                                  openInfoIndex === `${colIdx}-${i}` ? null : `${colIdx}-${i}`
                                );
                              }}
                              className="text-blue-600 hover:text-blue-800 dark:text-white text-base relative"
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
    
                      {/* thumbnails الصور */}
                     {row.gallery && row.gallery.length > 0 && (
      <div className="mt-3">
        <img
          src={row.gallery[0].src}
    
          alt={row.label}
          className="w-32 h-24 object-cover rounded-lg shadow cursor-pointer hover:opacity-80"
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
      })()
    )}
    
    
    {/* عرض FullScreenGallery لو متفتح */}
    {openGallery && (
      <FullScreenGallery
        images={openGallery.images}
        startIndex={openGallery.start}
        onClose={() => setOpenGallery(null)}
      />
    )}
    
    
    
    <div className="p-2 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold text-base rounded">
      {/* النصوص */}
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1 text-sm" >
        الملاحظات:
        <li>لم يتم التأكد من قراءة العداد الحالية لعدم توفر مصادر موثوقة لدى كارسيرفس وقت الفحص</li>
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

export default ChassisData;
