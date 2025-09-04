import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import fallbackImage  from '../../assets/imagge2.png'
import rallbackImage from '../../assets/imagee22.png'


const Report = () => {

  const [activeFilter, setActiveFilter] = useState("details"); // يبدأ مفتوح على "جميع نقاط الفحص"


  const historyData = {
   itemes: [
     {
       title: " التاريخ والسجلات ",
       type: "details",
       carInfoo: {
         image: fallbackImage,
       },
        descriptionPoints: [
         "نقوم في كار سيرفر بمراجعة وتجميع جميع سجلات وبيانات السيارة من عدة أماكن ابتداءً من الأردن مثل الوكالات وشركات التأمين والدول المصدرة للسيارات مثل الولايات المتحدة الأمريكية، دول الخليج، الصين، أوروبا وكوريا.",
         "يتم التواصل أيضًا بشكل إلكتروني مع شركات متخصصة في جمع بيانات وسجلات السيارة والربط معها لتحصل على تقرير أوتوسكور الشامل على الفحص التقني والهندسي وأيضًا على سجلات الحوادث والصيانة وعدد المالكين وصفة الاستخدام."
       ],
       check: {
         historyDataImage: "https://via.placeholder.com/300x150",
         details: [
     { label: "تايتل السيارة" , value: "❌ "},
     { label:"المسافة المقطوعة", value: "❌ " },
     { label: "تاريخ الرعاية بالمركبة", value: "❌" },
     {label:"تاريخ السيارة داخل الأردن"},
     { Label:"عدد الحوادث المحلية",value:"1"},
     { label: "نوع الاستخدام",  value: "إستخدام شخصي" },
     { label: "تغيير المحرك ", value: "المحرك لم يتغير" },
     { label: "", value: "مسجل", status: "✅" },
     { label: "تاريخ الرعاية بالمركبة", value: "2025-06-01", status: "❌" },
     {Label: "معلومات السيارة التقنية"},
     {label:"الهيكل",value:"suv"},
     {label:"تغيير المحرك",value:"المحرك لم يتغير"},
     {Label:"عدد المالكين", value:"1"},
     {label:"نوع التسجيل",value:"خصوصي"},
     {label:"تاريخ السيارة خارج الأردن"},
     {label:"الحوادث",value:"لا يوجد مشاكل"},
     {label:"الايرباج",value:"N/A"},
   ],
       registration: [
     { label: "تايتل السيارة" , value: "❌ "},
     { label:"المسافة المقطوعة", value: "❌ " },
     { label: "تاريخ الرعاية بالمركبة", value: "❌" },
     {label:"تاريخ السيارة داخل مصر"},
     { Label:"عدد الحوادث المحلية",value:"1"},
     { label: "نوع الاستخدام",  value: "إستخدام شخصي" },
     { label: "تغيير المحرك ", value: "المحرك لم يتغير" },
     { label: "", value: "مسجل", status: "✅" },
     { label: "تاريخ الرعاية بالمركبة", value: "2025-06-01", status: "❌" },
     {Label: "معلومات السيارة التقنية"},
     {label:"الهيكل",value:"suv"},
     {label:"تغيير المحرك",value:"المحرك لم يتغير"},
     {Label:"عدد المالكين", value:"1"},
     {label:"نوع التسجيل",value:"خصوصي"},
     {label:"تاريخ السيارة خارج الأردن"},
     {label:"الحوادث",value:"لا يوجد مشاكل"},
     {label:"الايرباج",value:"N/A"},
  
   ],
      maintenance: [ 
     { label: "تاريخ الرعاية بالمركبة", value: "❌" },
     {label:"تاريخ السيارة داخل مصر"},
     { Label:"عدد الحوادث المحلية",value:"1"},
     { label: "نوع الاستخدام",  value: "إستخدام شخصي" },
     { label: "تغيير المحرك ", value: "المحرك لم يتغير" },
     { label: "", value: "مسجل", status: "✅" },
     { label: "تاريخ الرعاية بالمركبة", value: "2025-06-01", status: "❌" },
     {label: "معلومات السيارة التقنية"},
     {label:"الهيكل",value:"suv"},
     {label:"تغيير المحرك",value:"المحرك لم يتغير"},
     {Label:"عدد المالكين", value:"1"},
     {label:"نوع التسجيل",value:"خصوصي"},
     {label:"تاريخ السيارة خارج الأردن"},
     {label:"الحوادث",value:"لا يوجد مشاكل"},
     {label:"الايرباج",value:"N/A"},
   ],
   mileage: [ 
     { label: "تاريخ الرعاية بالمركبة", value: "❌" }, 
     {label:"تاريخ السيارة داخل مصر"},
     { Label:"عدد الحوادث المحلية",value:"1"},
     { label: "نوع الاستخدام",  value: "إستخدام شخصي" },
     { label: "تغيير المحرك ", value: "المحرك لم يتغير" },
     { label: "", value: "مسجل", status: "✅" },
     { label: "تاريخ الرعاية بالمركبة", value: "2025-06-01", status: "❌" },
     {Label: "معلومات السيارة التقنية"},
     {label:"الهيكل",value:"suv"},
     {label:"تغيير المحرك",value:"المحرك لم يتغير"},
     {Label:"عدد المالكين", value:"1"},
     {label:"نوع التسجيل",value:"خصوصي"},
     {label:"تاريخ السيارة خارج الأردن"},
     {label:"الحوادث",value:"لا يوجد مشاكل"},
     {label:"الايرباج",value:"N/A"},
   ],
    carIamge:rallbackImage
 
    
 
       },
     },
    
   ],
 };

  // 🔹 دالة لتجهيز الأقسام من البيانات (عشان نستخدمها مع كل الفلاتر)
  const renderSections = (rows) => {
    const sections = [];
    let currentSection = { title: "", items: [] };

    rows.forEach((row) => {
      const label = row.label || "";
      const value = row.value || "";
      const status = row.status || "";

      if (!value && !status) {
        if (currentSection.items.length > 0) sections.push(currentSection);
        currentSection = { title: label, items: [] };
      } else {
        currentSection.items.push({ label, value, status });
      }
    });

    if (currentSection.items.length > 0) sections.push(currentSection);

    return (
      <div className="grid grid-cols-2 gap-4">
        {sections.map((section, idx) => (
          <div key={idx} className="border p-2">
            <div className="font-bold text-gray-700 dark:text-gray-200 mb-2">
              {section.title}
            </div>
            <div className="space-y-1">
              {section.items.map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b py-2 px-2 text-sm items-center"
                >
                  <span className="w-32">{row.label}</span>
                  <span className="w-32">{row.value}</span>
                  <span
                    className={`w-10 font-semibold ${
                      row.status === "✅"
                        ? "text-green-500"
                        : row.status === "❌"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {row.status || ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="التاريخ-والسجلات">
      <div className="space-y-4 mt-6">
        {historyData.itemes.map((itemes, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow
                    hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <span className="font-medium">{itemes.title}</span>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-b-md border border-t-0 border-gray-200 dark:border-gray-700"
                >
                  {itemes.type === "details" ? (
                    <div className="space-y-10">
                      {/* صور + النصوص */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
                          <img
                            src={itemes.carInfoo.image}
                            alt="Car"
                            className="w-100 h-100 object-contain mx-auto rounded-lg"
                          />
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 shadow rounded text-center">
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                            {itemes.descriptionPoints.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* الفلاتر */}
                      <div className="flex gap-2 mb-4">
                        <button
                          onClick={() => setActiveFilter("details")}
                          className={`px-4 py-2 rounded transition-colors duration-200 ${
                            activeFilter === "details"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          }`}
                        >
                          جميع نقاط الفحص
                        </button>
                        <button
                          onClick={() => setActiveFilter("registration")}
                          className={`px-4 py-2 rounded transition-colors duration-200 ${
                            activeFilter === "registration"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          }`}
                        >
                          حالة التسجيل قبل الأستيراد
                        </button>
                        <button
                          onClick={() => setActiveFilter("maintenance")}
                          className={`px-4 py-2 rounded transition-colors duration-200 ${
                            activeFilter === "maintenance"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          }`}
                        >
                          تاريخ الرعاية بالمركبة
                        </button>
                        <button
                          onClick={() => setActiveFilter("mileage")}
                          className={`px-4 py-2 rounded transition-colors duration-200 ${
                            activeFilter === "mileage"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          }`}
                        >
                          المسافة المقطوعة
                        </button>
                      </div>

                      {/* عرض الجدول حسب الفلتر */}
                      {activeFilter === "details" &&
                        renderSections(itemes.check.details)}
                      {activeFilter === "registration" &&
                        renderSections(itemes.check.registration)}
                      {activeFilter === "maintenance" &&
                        renderSections(itemes.check.maintenance)}
                      {activeFilter === "mileage" &&
                        renderSections(itemes.check.mileage)}

                      {/* صورة الضرر */}
                      <div className="mb-4">
                        <div className="text-center p-2 rounded dark:bg-gray-800 font-bold text-lg mb-2">
                          أماكن الضرر حسب تقرير الكروكا
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-700 shadow rounded-lg max-w-md mx-auto">
                          <img
                            src={itemes.check.carIamge}
                            alt="Car"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>

                      {/* الملاحظات */}
                      <div className="p-2 dark:bg-gray-800 font-bold text-base rounded">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          الملاحظات:
                          <li>
                            لم يتم التأكد من قراءة العداد الحالية لعدم توفر
                            مصادر موثوقة لدى اوتوسكور وقت الفحص
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <p>{itemes.content}</p>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Report;
