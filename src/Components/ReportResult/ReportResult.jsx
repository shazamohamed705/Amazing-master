import React, { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { apiClient } from "../../services/apiClient";
import { Disclosure, Label } from "@headlessui/react";
import GaugeChart from "react-gauge-chart";
import { FaCarSide, FaCogs,FaUser, FaSnowflake, FaShieldAlt, FaBook, FaRuler, FaPlug, FaExclamationTriangle, FaCamera,FaChevronDown,FaInfoCircle,FaCheckCircle,FaCarBattery,FaOilCan} from "react-icons/fa";
import image55 from '../../assets/image55.png'
import fallbackImage  from '../../assets/imagge2.png'
import rallbackImage from '../../assets/imagee22.png'
import hallbackImage from '../../assets/immage3.png'
import iallbackImage from '../../assets/img20.png'
import pallbackImage  from  '../../assets/img23.png'
import  FullScreenGallery from "../FullScreenGallery/FullScreenGallery";
import ScreenGallery from "../ScreenGallery/ScreenGallery";

const inspections = [
  { name: "الهيكل الخارجي", status: "success", icon: <FaCarSide /> },
  { name: "المحرك وناقل الحركة", status: "error", icon: <FaCogs /> },
  { name: "الشاصي والهيكل", status: "error", icon: <FaCogs /> },
  { name: "فحص الطريق", status: "error" },
  { name: "نظام التكييف", status: "success", icon: <FaSnowflake /> },
  { name: "السلامة Bosch فحص", status: "error", icon: <FaShieldAlt /> },
  { name: "التاريخ والسجلات", status: "neutral", icon: <FaBook /> },
  { name: "نظام التوجيه", status: "error" },
  { name: "المكابح والسلامة", status: "error", icon: <FaExclamationTriangle /> },
  { name: "صور الفحص", status: "neutral", icon: <FaCamera /> },
];


const getStatusColor = (status) => {
  switch (status) {
    case "success":
      return "border-green-500";
    case "error":
      return "border-red-500";
    default:
      return "border-gray-400";
  }
};
export default function ReportResult() {
    const [score, setScore] = useState(30); // النسبة المئوية
    const [searchParams] = useSearchParams();
    const vin = searchParams.get('vin');
    const reportId = searchParams.get('report');

const [showInfo, setShowInfo] = useState(false);
  const [showReasons, setShowReasons] = useState(false);
const grades = [
    { label: "F", range: [0, 40], color: "bg-red-500" },
    { label: "D", range: [40, 50], color: "bg-purple-500" },
    { label: "C", range: [50, 60], color: "bg-orange-500" },
    { label: "B", range: [60, 70], color: "bg-gray-600" },
    { label: "B+", range: [70, 80], color: "bg-yellow-400" },
    { label: "A", range: [80, 90], color: "bg-green-500" },
    { label: "A+", range: [90, 100], color: "bg-blue-600" },
  ];

  // حساب اللون بناءً على الـ score
  const currentGrade = grades.find(
    (g) => score >= g.range[0] && score <= g.range[1]
  ); 

 const reportData = {
  sections: [
    {
      title: "بيانات الفحص",
      type: "details",
      carInfo: {
        image: "/car1.png",
        chassisNumber: "1111111111AAAAAA",
        brand: "تويوتا",
      },
      inspection: {
        reportImage: "https://via.placeholder.com/300x150",
        status: "fail",
        result: "السيارة بحالة جيدة جداً",
        details: [],
         reasons: [
          "تايتل السيارة ❌",
          "المسافة المقطوعة ❌",
          "تاريخ الرعاية بالمركبة ❌",
        ],
       
      },
    },
   
   
  ],
};

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
  const [activeFilter, setActiveFilter] = useState("details"); // يبدأ مفتوح على "جميع نقاط الفحص"
    
  
 const exoskeleton = {
  itemis: [
    {
      title: " الهيكل الخارجي ",
      type: "details",
      carInformation: { image: hallbackImage },
      descriptionPoints1: [
        "يقدّم كارسيرفس تقييم وفحص شامل ودقيق لهيكل السيارة الخارجي للتأكد من سلامته و مطابقته لمعايير كار سيرفيس.",
        "يتم إجراء الفحص باستخدام عدة طرق، مثل.",
        "الفحص النظري المتخصص",
        "قياس سماكة الدهان والمعجون باستخدام الأجهزة الخاصة",
        "الذكاء الصناعي",
        "سجلات تاريخ السيارة والإصلاحات السابقة",
        "يغطي هذا القسم النقاط التالية:",
        "أجزاء السيارة الخارجية",
        "حالة المقصورة الداخلية",
        "الزجاج الأمامي والخلفي",
        "السقف",
        "الشبابيك",
        "الشبر"
      ],

      control: {
        specifics: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️" },
          { label: "باب خلفي شمال", Stats: "✔️" },
          { label: "الكبوت", Stats: "⚠️" },
          { label: "الشنطة", Stats: "✔️" },
          { label: "السقف", Stats: "✔️" },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],

        carImage: hallbackImage,

        continue: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, // ← كان لازم القوس ده يتقفل قبل العناصر التالية
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
        ],

        outline: [
          { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: ".نقرات الزجاج الامامي" },
        ],

        onabort: [
          { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        allpoint: [
          { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        parent: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

        review: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

        sheet: [{ label: "مفتاح الربط", Stats: "❌" }],

        tablet: [
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

  const [Filter, setFilter] = useState("specifics"); // يبدأ مفتوح على "جميع نقاط الفحص"
const [openInfoIndex, setOpenInfoIndex] = useState(null);
useEffect(() => {
  const handleClickOutside = () => {
    setOpenInfoIndex(null);
  };
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

useEffect(() => {
  let ignore = false;
  async function fetchReport() {
    if (!vin && !reportId) return;
    try {
      const data = await apiClient.get("/reports", { query: { vin, reportId } });
      if (!ignore) {
        if (typeof data.score === 'number') setScore(data.score);
        // يمكن ربط بقية الحقول لاحقاً حسب استجابة ال API
      }
    } catch (_) {
      // تجاهل الأخطاء حالياً
    }
  }
  fetchReport();
  return () => { ignore = true; };
}, [vin, reportId]);

const [openGallery, setOpenGallery] = useState(false);



 const Chassisa = {
  itimis: [
    {
      title: "الشاصي والهيكل ",
      type: "details",
   carInformation1: {
        images: [iallbackImage, pallbackImage] // أو مسارات من public زي "/img1.png"
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
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
               {label: " ضربيه قويه ف الشاصي الامامي ."},
          { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
    {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: "الهيكل الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
             {label: "ضربه في مقدمه المركبه ."},
          { label: "الهيكل الخلفي ", Stats: "⚠️" },
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        carImagee: hallbackImage,

        continue1: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, // ← كان لازم القوس ده يتقفل قبل العناصر التالية
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
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
  const [Filterr, setFilterr] = useState("specifics1"); // يبدأ مفتوح على "جميع نقاط الفحص"

 const Move = {
  itimis1: [
    {
      title: " المحرك وناقل الحركه ",
      type: "details",
   carInformation1: {
        images: [iallbackImage, pallbackImage] // أو مسارات من public زي "/img1.png"
      },
  
     descriptionPoints3: [
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
        specifics2: [
          {
            label: " فياسات الشاصي الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
               {label: " ضربيه قويه ف الشاصي الامامي ."},
          { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
    {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: "الهيكل الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
             {label: "ضربه في مقدمه المركبه ."},
          { label: "الهيكل الخلفي ", Stats: "⚠️" },
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        carImagee: hallbackImage,

        continue1: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, // ← كان لازم القوس ده يتقفل قبل العناصر التالية
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
        ],

        outline2: [
          { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: ".نقرات الزجاج الامامي" },
        ],

        onabort2: [
          { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        allpoint2: [
          { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        parent: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

        review: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

        sheet: [{ label: "مفتاح الربط", Stats: "❌" }],

        tablet4: [
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
  const [Filterr1, setFilterr1] = useState("specifics2"); // يبدأ مفتوح على "جميع نقاط الفحص"

   const Portrait = {
  itimis3: [
    {
      
      title: " نطام التوجيه  ",
      type: "details",
   carInformation1: {
        images: [iallbackImage, pallbackImage] // أو مسارات من public زي "/img1.png"
      },
  
     descriptionPoints4: [
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
        specifics3: [
          {
            label: " فياسات الشاصي الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
               {label: " ضربيه قويه ف الشاصي الامامي ."},
          { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
    {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: "الهيكل الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
             {label: "ضربه في مقدمه المركبه ."},
          { label: "الهيكل الخلفي ", Stats: "⚠️" },
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        carImagee: hallbackImage,

        continue3: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, 
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
        ],

        outline3: [
          { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: ".نقرات الزجاج الامامي" },
        ],

        onabort3: [
          { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        allpoint3: [
          { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        parent3: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

        review3: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

        sheet3: [{ label: "مفتاح الربط", Stats: "❌" }],

        tablet3: [
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
  const [Filterr2, setFilterr2] = useState("specifics3"); 
  const Fixed = {
  itimis4: [
    {
      
      title: "فحص الطريق ",
      type: "details",
   carInformation1: {
        images: [iallbackImage, pallbackImage] 
      },
  
     descriptionPoints5: [
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
        specifics4: [
          {
            label: " فياسات الشاصي الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
               {label: " ضربيه قويه ف الشاصي الامامي ."},
          { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
    {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: "الهيكل الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
             {label: "ضربه في مقدمه المركبه ."},
          { label: "الهيكل الخلفي ", Stats: "⚠️" },
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        carImagee: hallbackImage,

        continue4: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, // ← كان لازم القوس ده يتقفل قبل العناصر التالية
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
        ],

        outline4: [
          { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: ".نقرات الزجاج الامامي" },
        ],

        onabort4: [
          { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        allpoint4: [
          { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        parent4: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

        review4: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

        sheet4: [{ label: "مفتاح الربط", Stats: "❌" }],

        tablet4: [
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
  const [Filterr3, setFilterr3] = useState("specifics4"); 

const Aircondetion = {
  itimis6: [
    {
      
      title: "  نظام التكيف ",
      type: "details",
   carInformation1: {
        images: [iallbackImage, pallbackImage] 
      },
  
     descriptionPoints00: [
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
        specifics6: [
          {
            label: " فياسات الشاصي الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
               {label: " ضربيه قويه ف الشاصي الامامي ."},
          { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
    {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: "الهيكل الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
             {label: "ضربه في مقدمه المركبه ."},
          { label: "الهيكل الخلفي ", Stats: "⚠️" },
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        carImagee: hallbackImage,

        continue5: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          },
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
        ],

        outline6: [
          { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: ".نقرات الزجاج الامامي" },
        ],

        onabort6: [
          { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        allpoint6: [
          { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        parent6: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

        review6: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

        sheet6: [{ label: "مفتاح الربط", Stats: "❌" }],

        tablet6: [
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

  const [Filterr5, setFilterr5] = useState("specifics6"); 




  const seftiy = {
  itimis7: [
    {
      
      title: "  المكابح والسلامه",
      type: "details",
   carInformation1: {
        images: [iallbackImage, pallbackImage] 
      },
  
     descriptionPoints8: [
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
        specifics7: [
          {
            label: " فياسات الشاصي الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
               {label: " ضربيه قويه ف الشاصي الامامي ."},
          { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
    {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: "الهيكل الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
             {label: "ضربه في مقدمه المركبه ."},
          { label: "الهيكل الخلفي ", Stats: "⚠️" },
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        carImagee: hallbackImage,

        continue7: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, 
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
        ],

        outline7: [
          { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: ".نقرات الزجاج الامامي" },
        ],

        onabort7: [
          { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        allpoint7: [
          { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        parent7: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

        review7: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

        sheet7: [{ label: "مفتاح الربط", Stats: "❌" }],

        tablet7: [
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
  const [Filterr6, setFilterr6] = useState("specifics7"); 
   const Bosch = {
  itimis8: [
    {
      
      title: "   للسلامه Boush فحص ",
      type: "details",
   carInformation1: {
        images: [iallbackImage, pallbackImage] 
      },
  
     descriptionPoints9: [
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
        specifics8: [
          {
            label: " فياسات الشاصي الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
               {label: " ضربيه قويه ف الشاصي الامامي ."},
          { label: " قياسات الشاصي الخلفي اليمين", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "قياسات الشاصي الخلفي اليسار ", Stats: "✔️" },
    {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: "الهيكل الامامي ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
             {label: "ضربه في مقدمه المركبه ."},
          { label: "الهيكل الخلفي ", Stats: "⚠️" },
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        carImagee: hallbackImage,

        continue8: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                diagram: "/iamg10.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                diagram: "/iamg9.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
                diagram: "/iiamge8.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, // ← كان لازم القوس ده يتقفل قبل العناصر التالية
          { label: "جناح امامي يمين", Stats: "✔️", info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "كشاف شمال", Stats: "⚠️", info: "الكشاف الشمال يحتاج تغيير." },
          { label: "باب خلفي يمين", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "باب خلفي شمال", Stats: "✔️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الكبوت", Stats: "⚠️" ,info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات." },
          { label: "الشنطة", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "السقف", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الأمامي", Stats: "⚠️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
          { label: "الزجاج الخلفي", Stats: "✔️",info: "الجناح الأمامي الأيمن بحالة جيدة بدون ملاحظات."  },
        ],

        outline8: [
          { label: "الزجاج الامامي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " الزجاج الخلفي", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: ".نقرات الزجاج الامامي" },
        ],

        onabort8: [
          { label: "المرآة اليمين", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " المرآة اليسار", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        allpoint8: [
          { label: "شبر  الزجاج", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
          { label: " شبر الابواب   ", Stats: "✔️", info: "وجود نقرات أو شعر بسيط في الزجاج ليس بالأمر المقلق، مالم يكن كسر كبير وواضح" },
        ],

        parent8: [{ label: " الأطار الأحتياطي ", Stats: "❌" }],

        review8: [{ label: "جاك الاطارات وأدوات", Stats: "❌" }],

        sheet8: [{ label: "مفتاح الربط", Stats: "❌" }],

        tablet8: [
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



  const photo = {
  itimis9: [
    {
      
      title: " صور الفحص ",
      type: "details",
  
  
   

      Power: {
        specifics9: [
          {
            label: "  صور السيارت ",
          
            gallery: [
              {
                src: "/img4.png",
             
             
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
               
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
               
                
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          {label: " ضربيه قويه ف الشاصي الامامي ."},
          {
            label: " فياسات الشاصي الامامي الايسر",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
               
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
             
            ],
          },
            
   
{
            label: "الهيكل العلولي  ",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                 src: "/img1.png",
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
                
              },
            ],
          },
          { label: "الزجاج الأمامي", Stats: "⚠️" },
          { label: "الزجاج الخلفي", Stats: "✔️" },
        ],



        
        continue8: [
          {
            label: "صدام امامي",
            Stats: "⚠️",
            info: "تمت ملاحظة خدوش بسيطة في الصدام الأمامي.",
            gallery: [
              {
                src: "/img4.png",
                title: "صدام امامي",
                subtitle: "خدوش بسيطة",
              },
              {
                src: "/img6.png",
              
                title: "صدام امامي",
                subtitle: "تفاصيل إضافية",
              },
              {
                src: "/img1.png",
              
                title: "صدام امامي",
                subtitle: "زاوية مختلفة",
              },
            ],
          }, 
          
        ],
        
      },
    },
  ],
};
  return (
    <div className="min-h-[70vh] max-w-6xl mx-auto bg-white dark:bg-black p-6 rounded-xl shadow">



  <div className="flex-grow">

      <h1 className="text-black dark:text-white text-base -2xl font-bold mb-6">تقرير فحص السيارة</h1>

      <div className="space-y-4">
        {reportData.sections.map((section, idx) => (
          <Disclosure key={idx} defaultOpen>
            {({ open }) => (
              <>
                <Disclosure.Button className=" w-full flex justify-between items-center px-4 py-2
    bg-white dark:bg-gray-800
    rounded-md shadow
    hover:bg-gray-100 dark:hover:bg-gray-700
    text-gray-800 dark:text-gray-200
  ">
                  <span className="text-black dark:text-white font-medium">{section.title}</span>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-2  bg-white dark:bg-black rounded-b-md border border-t-0 border-gray-200">
                
                  {section.type === "details" ? (
                    <div className="space-y-6">
  {/* مربعات المعلومات */}
  <div className="grid grid-cols-3 gap-6">
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-black border border-gray-100 dark:border-white shadow rounded-lg h-60">

  {/* اسم الماركة */}
 

  {/* الموديل */}
  <span className="text-black dark:text-white text-lg font-semibold text-gray-700 mt-1">
    {section.carInfo.model || "Song Plus 605KM Flagship"}
  </span>

  
</div>

{/* البوكس العنوان */}
<div className="p-6 bg-white dark:bg-black border border-white dark:border-white shadow rounded text-center">
  {/* اسم العربية */}
  <h2 className="text-black dark:text-white text-xl font-semibold text-gray-900 mb-4">
    {section.carInfo.title || "BYD Song Plus 605KM Flagship 2023"}
  </h2>

  {/* السطر اللي فيه رقم التقرير يمين ورقم الشاسيه شمال */}
  <div className="flex justify-between mt-4  text-black dark:text-white text-base ">
    <div className="text-right">
      <span className="block text-sm text-gray-600 text-black dark:text-white">رقم التقرير</span>
      <h3 className=" text-black dark:text-white font-semibold text-gray-800">
        {section.carInfo.reportNumber || "RPT-2025-001"}
      </h3>
    </div>
    <div className="text-left">
      <h3 className="font-semibold text-gray-800 text-black dark:text-white ">
        {section.carInfo.chassisNumber || "BYDSONGPLUS2023BY"}
      </h3>
    </div>
  </div>
</div>

     {/* اسم الماركة */}

<div className="flex flex-col items-center p-6bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg h-60">
      <img
        src={section.carInfo.image}
        alt="Car"
        className="w-28 h-28 object-cover rounded mb-3"
      />
      <span className="text-black dark:text-white text-base font-semibold">صورة السيارة</span>
    </div>
</div>


                      <div className="grid grid-cols-3 gap-4">
                    <div className="p-6 flex flex-col items-start bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg">
  {/* زر المعلومات */}
  <button
    className="mb-4 w-10 h-10 flex items-center justify-center bg-white dark:bg-black border border-black dark:border-white  rounded-full border border-gray-300 shadow hover:bg-gray-100"
    onClick={() => setShowInfo(!showInfo)}
  >
    <FaInfoCircle className="text-blue-500 text-xl" />
  </button>

  {/* جدول المعلومات */}
  {showInfo && (
    <div className="mb-4 bg-white shadow-lg border rounded-lg p-4 w-full">
      <table className="table-auto border-collapse border border-gray-300 w-full text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-1">Grade</th>
            <th className="border border-gray-300 px-3 py-1">Range</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g) => (
            <tr key={g.label}>
              <td
                className={`border border-gray-300 px-3 py-1 font-bold ${g.color.replace(
                  "bg",
                  "text"
                )}`}
              >
                {g.label}
              </td>
              <td className="border border-gray-300 px-3 py-1">
                {g.range[0]}% - {g.range[1]}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}

  {/* الجوج */}
  <GaugeChart
    id="gauge-chart"
    nrOfLevels={20}
    colors={["#ef4444", "#f97316", "#eab308", "#22c55e"]}
    arcWidth={0.3}
    percent={score / 100}
    textColor="#000000"
  />

  {/* القيمة */}
  <div className="text-2xl font-bold mt-2">
    <span
      className={currentGrade ? currentGrade.color.replace("bg", "text") : ""}
    >
      {score}%
    </span>
  </div>
</div>
                        {/* النتيجة مع الأيقونة */}
                       <div className="flex flex-col items-center justify-center p-2 bg-white shadow rounded  bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg">
  {section.inspection.status === "success" ? (
    <>
      <FaCheckCircle className="text-green-500 text-3xl" />
      <span className="font-bold text-green-600">ناجحة</span>
    </>
  ) : section.inspection.status === "fail" ? (
    <>
<div className="w-24 h-24 flex items-center justify-center rounded-full bg-white border-4 border-black text-red-600 font-seimbold text-7xl shadow-md">
  
        F
      </div>
      <span className="mt-2 text-red-600 font-semibold">غير ناجحة</span>
      <button
        onClick={() => setShowReasons(true)}
        className="mt-1 text-sm text-gray-600 underline"
      >
        عرض الأسباب
      </button>
    </>
  ) : section.inspection.status === "pass" ? (
    <div className="flex items-center space-x-2 text-green-600">
      <FaCheckCircle className="text-3xl" />
      <span>ناجحة</span>
    </div>
  ) : (
    <span>-</span>
  )}
</div>

<div className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg">
  {/* الصورة */}
  <img
    src={image55}
    alt="car"
    className="w-20 h-20 rounded-full object-cover"
  />

  <span className="mt-3 text-lg font-bold">القيمة التسويقية</span>
</div>


                      </div>
      {/* تقرير الفحص */}
<div className="bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg p-6 space-y-6">

  {/* عنوان القسم */}
  <h2 className="text-xl font-bold text-gray-900 border-b pb-2 dark:text-white">
    معلومات التقرير
  </h2>

  {/* جدول معلومات التقرير */}
  <div className="grid grid-cols-2 gap-x-8  text-base dark:text-white">
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">التاريخ</span>
      <span className="font-semibold dark:text-white">Dec 31, 2024</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">رقم التقرير</span>
      <span className="font-semibold dark:text-white">10311224033</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">نوع الفحص</span>
      <span className="font-semibold dark:text-white">الفحص الشامل</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">فرع الفحص</span>
      <span className="font-semibold dark:text-white ">البيادر</span>
    </div>
  </div>

  {/* عنوان القسم */}
  <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mt-6 dark:text-white">
    معلومات المركبة
  </h2>

  {/* جدول معلومات المركبة */}
  <div className="grid grid-cols-2 gap-x-8 text-base dark:text-white">
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">النوع</span>
      <span className="font-semibold">BYD</span>
    </div>
    <div className="flex justify-between border-b py-2 dark:text-white">
      <span className="text-gray-600 font-semibold">الموديل</span>
      <span className="font-semibold dark:text-white">Song Plus</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600font-semibold dark:text-white">الفئة</span>
      <span className="font-semibold dark:text-white">605KM Flagship</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">سنة الصنع</span>
      <span className="font-semibold dark:text-white">2023</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">سعة المحرك</span>
      <span className="font-semibold dark:text-white">-</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">العداد الحالي</span>
      <span className="font-semibold">5007 KM</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">رقم اللوحة</span>
      <span className="font-semibold dark:text-white">FREEZONE</span>
    </div>
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-600 font-semibold dark:text-white">لون السيارة</span>
      <span className="font-semibold dark:text-white">فيراني</span>
    </div>
   <div className="grid grid-cols-2 border-b py-2 col-span-2">
  {/* العنوان */}
  <span className="text-gray-600 font-semibold dark:text-white">نوع المحرك</span>

  {/* القيمة */}
  <span className="font-semibold text-gray-900 dark:text-white">Electric</span>
</div>


    
  </div>
</div>
{/* قسم الإضافات */}
<div className="bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg">
  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white ">الإضافات</h3>

  <div className="flex flex-wrap gap-2">
    {[
      "شحن لاسلكي",
      "كراسي مبردة",
      "كراسي مدفئة",
      "كراسي جلد",
      "شاشة أمامية",
      "عدادات ديجيتال",
      "الدخول بدون مفتاح (بصمة)",
      "تتبع المسار",
      "النقطة العمياء",
      "أضوية LED",
      "كاميرا خلفية",
      "كاميرا 360 درجة",
      "سقف بانوراما",
      "نظام صوتي",
      "تحكم ستيرنج",
      "مثبت سرعة",
      "حساسات أمامية",
      "حساسات خلفية",
      "بصمة تشغيل",
      "نظام الرادار",
      "تنبيه التصادم",
      "كراسي كهربائي",
    ].map((item, index) => {
      return (
        <div
          key={index}
          className="flex items-center border border-red-500 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-white"
        >
          <span className="text-gray-700 dark:text-white text-xs mr-1">✓</span>
          {item}
        </div>
      );
    })}
  </div>
</div>
{/* */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  {inspections.map((item, idx) => (
    <div 
      key={idx} 
      onClick={() => {
        const sectionId = item.name.replace(/\s+/g, "-"); // يحول الاسم لـ id
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      className="flex items-center justify-between p-3 bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg"
    >
      {/* الأيقون + الاسم */}
      <div className="flex items-center gap-2 text-gray-800">
        <span className="text-xl text-blue-600   ">{item.icon || <FaCarSide />}</span>
        <span className="text-base font-medium dark:text-white ">{item.name}</span>
      </div>

      {/* المثلث الملون */}
      <span
        className={`w-0 h-0 border-l-[10px] border-y-[6px] border-y-transparent ${getStatusColor(item.status)}`}
      ></span>
    </div>
  ))}
</div>


                      {/* تفاصيل التقرير */}
                      <div className=" bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg divide-y">
                        {section.inspection.details.map((item, i) => (
                          <div key={i} className="p-2 flex justify-between">
                            <span className="font-medium">{item.label}</span>
                            <span>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      
   
      </div>
      

      {/* نافذة الأسباب */}
      {showReasons && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-black dark:text-white text-base-xl font-bold mb-4 text-red-600">
              أسباب الفشل في الفحص
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {reportData.sections[0].inspection.reasons.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
            <button
              onClick={() => setShowReasons(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              إغلاق
            </button>
          </div>
        </div>
        
      )}


      {/*التاريخ والسجلات */}
<div id="التاريخ-والسجلات">
 <div className="space-y-4 mt-6">
        {historyData.itemes.map((itemes, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button className=" w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow

                   hover:bg-gray-100 dark:hover:bg-gray-700
            text-gray-800 dark:text-gray-200">

  
                  <span className="font-medium dark:text-whit">{itemes.title}</span>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
<Disclosure.Panel className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-b-md border border-t-0 border-gray-200 dark:border-gray-700" >

                  {/* لو القسم تفاصيل */}
                  {itemes.type === "details" ? (
                    <div className="space-y-10">
  {/* مربعات المعلومات */}
  <div className="grid grid-cols-2 gap-6">
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow rounded-lg" >

  {/* صورة السيارة */}
  <img
    src={itemes.carInfoo.image}
    alt="Car"
    className="w-100 h-100 object-contain mx-auto rounded-lg"
  />
</div>
{/* البوكس العنوان */}
<div className="p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow rounded text-center" >

  {/*النصوص*/}
  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2" >
    {itemes.descriptionPoints.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>   
</div>
</div>         
      

<div className="flex gap-2 mb-4">
  <button 
    onClick={() => setActiveFilter("details")}
    className={`px-4 py-2 rounded transition-colors duration-200 ${
      activeFilter === "details" 
        ? "bg-blue-500 text-white dark:bg-blue-600" 
        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }`}
  >
    جميع نقاط الفحص
  </button>

  <button 
    onClick={() => setActiveFilter("registration")}
    className={`px-4 py-2 rounded transition-colors duration-200 ${
      activeFilter === "registration" 
        ? "bg-blue-500 text-white dark:bg-blue-600" 
        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }`}
  >
    حالة التسجيل قبل الأستيراد
  </button>

  <button 
    onClick={() => setActiveFilter("maintenance")}
    className={`px-4 py-2 rounded transition-colors duration-200 ${
      activeFilter === "maintenance" 
        ? "bg-blue-500 text-white dark:bg-blue-600" 
        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }`}
  >
    تاريخ الرعاية بالمركبة
  </button>

  <button 
    onClick={() => setActiveFilter("mileage")}
    className={`px-4 py-2 rounded transition-colors duration-200 ${
      activeFilter === "mileage" 
        ? "bg-blue-500 text-white dark:bg-blue-600" 
        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }`}
  >
    المسافة المقطوعة
  </button>
</div>

{/* الجدول */}

{activeFilter === "details" && 
  <div className="grid grid-cols-2 gap-4">
    {(() => {
      let sections = [];
      let currentSection = { title: "", items: [] };

      historyData.itemes[0].check.details.forEach((row) => {
        const label = row.label || row.Label || "";
        const value = row.value || "";
        const status = row.status || "";

        if (!value && !status) {
          // عنصر عنوان جديد
          if (currentSection.items.length > 0) sections.push(currentSection);
          currentSection = { title: label, items: [] };
        } else {
          currentSection.items.push({ label, value, status });
        }
      });

      if (currentSection.items.length > 0) sections.push(currentSection);

      return sections.map((section, idx) => (
        <div key={idx} className="border p-2">
<div className="font-bold text-gray-700 dark:text-gray-200 mb-2">{section.title}</div>
          <div className="space-y-1">
            {section.items.map((row, i) => (
              <div key={i} className="flex justify-between border-b py-2 px-2 text-sm items-center">
                <span className="w-32">{row.label}</span>
                <span className="w-32">{row.value}</span>
                <span className={`w-10 font-semibold ${row.status === "✅" ? "text-green-500" : "text-red-500"}`}>
                  {row.status || ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      ));
    })()}
  </div>
}
{/*جدول حاله التسجيل  */}
{activeFilter === "registration" && (() => {
  const sections = [];
  let currentSection = { title: "", items: [] };

  historyData.itemes[0].check.registration.forEach((row) => {
    const label = row.label || row.Label || "";
    const value = row.value || "";
    const status = row.status || "";

    if (!value && !status) {
      // عنصر عنوان جديد
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
<div className="font-bold text-gray-700 dark:text-gray-200 mb-2">{section.title}</div>
          <div className="space-y-1">
            {section.items.map((row, i) => (
              <div key={i} className="flex justify-between border-b py-2 px-2 text-sm items-center">
                <span className="w-32">{row.label}</span>
                <span className="w-32">{row.value}</span>
                <span className={`w-10 font-semibold ${row.status === "✅" ? "text-green-500" : "text-red-500"}`}>
                  {row.status || ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
})()}
{/*جدول تارخ الرعايه */}
{activeFilter === "maintenance" && (() => {
  const sections = [];
  let currentSection = { title: "", items: [] };

  historyData.itemes[0].check.maintenance.forEach((row) => {
    const label = row.label || row.Label || "";
    const value = row.value || "";
    const status = row.status || "";

    if (!value && !status) {
      // عنصر عنوان جديد
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
<div className="font-bold text-gray-700 dark:text-gray-200 mb-2">{section.title}</div>
          <div className="space-y-1">
            {section.items.map((row, i) => (
              <div key={i} className="flex justify-between border-b py-2 px-2 text-sm items-center">
                <span className="w-32">{row.label}</span>
                <span className="w-32">{row.value}</span>
                <span className={`w-10 font-semibold ${row.status === "✅" ? "text-green-500" : "text-red-500"}`}>
                  {row.status || ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
})()}

{/*جدول المسافات*/}
{activeFilter === "mileage" && (() => {
  const sections = [];
  let currentSection = { title: "", items: [] };

  historyData.itemes[0].check.mileage.forEach((row) => {
    const label = row.label || row.Label || "";
    const value = row.value || "";
    const status = row.status || "";

    if (!value && !status) {
      // عنصر عنوان جديد
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
<div className="font-bold text-gray-700 dark:text-gray-200 mb-2">{section.title}</div>
          <div className="space-y-1">
            {section.items.map((row, i) => (
              <div key={i} className="flex justify-between border-b py-2 px-2 text-sm items-center">
                <span className="w-32">{row.label}</span>
                <span className="w-32">{row.value}</span>
                <span className={`w-10 font-semibold ${row.status === "✅" ? "text-green-500" : "text-red-500"}`}>
                  {row.status || ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
})()}

<div className=" mb-4">
  {/* العنوان */}
  <div className="text-center p-2 rounded  dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold text-lg mb-2">
    أماكن الضرر حسب تقرير الكروكا
  </div>

  {/* بوكس الصورة */}
  <div className="p-4 bg-white dark:bg-gray-700 shadow rounded-lg max-w-md mx-auto">
    <img
      src={itemes.check.carIamge} 
      alt="Car"
      className="w-full h-auto object-contain rounded-lg"
    />
  </div>
</div>

<div className="p-2 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold text-base rounded">
  {/* النصوص */}
  <ul className="list-disc list-inside text-gray-700  dark:text-gray-100 space-y-1 text-sm">
    الملاحظات:
    <li>لم يتم التأكد من قراءة العداد الحالية لعدم توفر مصادر موثوقة لدى اوتوسكور وقت الفحص</li>
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
      {/* الهيكل الخارجي */}
      <div id="الهيكل-الخارجي">

    <div className="space-y-5 mt-6">
  {exoskeleton.itemis.map((item, idx) => (
    <Disclosure key={idx} >
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


{["specifics","continue","outline","onabort","allpoint","parent","review","sheet","tablet"].includes(Filter) && (() => {
  const src = exoskeleton.itemis[0]?.control[Filter] ?? [];
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
                          setOpenInfoIndex(openInfoIndex === `${colIdx}-${i}` ? null : `${colIdx}-${i}`);
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
                    <span className="text-black dark:text-white text-base font-medium">{row.label}</span>
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
                      onClick={() => setOpenGallery({ images: row.gallery, start: 0 })}
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

{/*الشاصي والهيكل */}
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
    { key: "continue1", label: "حالة البودي الخارجي" },
    { key: "outline1", label: "الزجاج" },
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
  <ScreenGallery
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
{/* المحرك وناقل الحركه */}
<div id="المحرك-ناقل-الحركه" >

  <div className="space-y-5 mt-6">
  {Move.itimis1.map((item, idx) => (
    <Disclosure key={idx} >
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
                {Move.itimis1[0].carInformation1.images.map((img, i) => (
  <img key={i} src={img} alt={`car ${i}`} />
))}

              </div>

              {/* نصوص الوصف */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                  {item.descriptionPoints3.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* أزرار الفلاتر */}
          <div className="flex flex-wrap gap-3 mt-6">
  {[
    { key: "specifics2", label: "جميع نقاط الفحص" },
    { key: "continue2", label: "حالة البودي الخارجي" },
    { key: "outline2", label: "الزجاج" },
    { key: "onabort2", label: "المرايه الجانبية" },
    { key: "allpoint2", label: "الشبر" },
    { key: "parent2", label: "الاطار الاحتياطي" },
    { key: "review2", label: "الجك والعده الأضافيه" },
    { key: "sheet2", label: "مفتاح الاطارات" },
    { key: "tablet2", label: "الحالة الداخلية1" },
  ].map((btn) => (
    <button
      key={btn.key}
      onClick={() => setFilterr1(btn.key)}
      className={`px-4 py-2 rounded transition-colors duration-200 ${
        Filterr1 === btn.key
          ? "bg-blue-500 text-white dark:bg-blue-600"
          : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      }`}
    >
      {btn.label}
    </button>
  ))}
</div>

            {/* محتوى الفلاتر */}
{["specifics2", "continue2","outline2","onabort2","allpoint2","parent2","review2","sheet2","tablet2"].includes(Filterr1) && (
  (() => {
    const src = Move.itimis1[0]?.Power[Filterr1] ?? [];
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
    <div id="نظام-التوجيه">
  <div className="space-y-5 mt-6">
  {Portrait.itimis3.map((item, idx) => (
    <Disclosure key={idx} defaultOpen>
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
                {Portrait.itimis3[0].carInformation1.images.map((img, i) => (
  <img key={i} src={img} alt={`car ${i}`} />
))}

              </div>

              {/* نصوص الوصف */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                  {item.descriptionPoints4.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* أزرار الفلاتر */}
            <div className="flex flex-wrap gap-3 mt-6">
  {[
    { key: "specifics3", label: "جميع نقاط الفحص" },
    { key: "continue3", label: "حالة البودي الخارجي" },
    { key: "outline3", label: "الزجاج" },
    { key: "onabort3", label: "المرايه الجانبية" },
    { key: "allpoint3", label: "الشبر" },
    { key: "parent3", label: "الاطار الاحتياطي" },
    { key: "review3", label: "الجك والعده الأضافيه" },
    { key: "sheet3", label: "مفتاح الاطارات" },
    { key: "tablet3", label: "الحالة الداخلية1" },
  ].map((btn) => (
    <button
      key={btn.key}
      onClick={() => setFilterr2(btn.key)}
      className={`px-4 py-2 rounded transition-colors duration-200 ${
        Filterr2 === btn.key
          ? "bg-blue-500 text-white dark:bg-blue-600"
          : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      }`}
    >
      {btn.label}
    </button>
  ))}
</div>

            {/* محتوى الفلاتر */}
{["specifics3", "continue3","outline3","onabort3","allpoint3","parent3","review3","sheet3","tablet3"].includes(Filterr2) && (
  (() => {
    const src = Portrait.itimis3[0]?.Power[Filterr2] ?? [];
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
  <ScreenGallery
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
    </div>

<div id="فحص-الطريق">
  <div className="space-y-5 mt-6">
  {Fixed.itimis4.map((item, idx) => (
    <Disclosure key={idx} >
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
                {Fixed.itimis4[0].carInformation1.images.map((img, i) => (
  <img key={i} src={img} alt={`car ${i}`} />
))}

              </div>

              {/* نصوص الوصف */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                  {item.descriptionPoints5.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* أزرار الفلاتر */}
            <div className="flex flex-wrap gap-3 mt-6 ">
             
             {[
  { key: "specifics4", label: "جميع نقاط الفحص" },
  { key: "continue4", label: "حالةالبودي الخارجي" },
  { key: "outline4", label: "الزجاج" },
  { key: "onabort4", label: "المرايه الجانبية" },
  { key: "allpoint4", label: "الشبر" },
  { key: "parent4", label: "الاطار الاحتياطي" },
  { key: "review4", label: "الجك والعده الأضافيه" },
  { key: "sheet4", label: "مفتاح الاطارات" },
  { key: "tablet4", label: "الحالة الداخلية1" },
].map((btn) => (
  <button
    key={btn.key}
    onClick={() => setFilterr3(btn.key)}
    className={`px-4 py-2 rounded ${
      Filterr3 === btn.key ? "bg-blue-300 text-black dark:text-white text-base font-medium" : "bg-gray-200"
    }`}
  >
    {btn.label}
  </button>
))}

            </div>

            {/* محتوى الفلاتر */}
{["specifics4", "continue4","outline4","onabort4","allpoint4","parent4","review4","sheet4","tablet4"].includes(Filterr3) && (
  (() => {
    const src = Fixed.itimis4[0]?.Power[Filterr3] ?? [];
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



{openGallery && (
  <ScreenGallery
    images={openGallery.images}
    startIndex={openGallery.start}
    onClose={() => setOpenGallery(null)}
  />
)}



<div className="p-2 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold text-base rounded">
  {/* النصوص */}
  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
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

<div id="نظام -التكيف">
  <div className="space-y-5 mt-6">
  {Aircondetion.itimis6.map((item, idx) => (
    <Disclosure key={idx} >
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
                {Aircondetion.itimis6[0].carInformation1.images.map((img, i) => (
  <img key={i} src={img} alt={`car ${i}`} />
))}

              </div>

              {/* نصوص الوصف */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                  {item.descriptionPoints00.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* أزرار الفلاتر */}
            <div className="flex flex-wrap gap-3 mt-6 ">
             
             {[
  { key: "specifics6", label: "جميع نقاط الفحص" },
  { key: "continue6", label: "حالةالبودي الخارجي" },
  { key: "outline6", label: "الزجاج" },
  { key: "onabort6", label: "المرايه الجانبية" },
  { key: "allpoint6", label: "الشبر" },
  { key: "parent6", label: "الاطار الاحتياطي" },
  { key: "review6", label: "الجك والعده الأضافيه" },
  { key: "sheet6", label: "مفتاح الاطارات" },
  { key: "tablet6", label: "الحالة الداخلية1" },
].map((btn) => (
  <button
    key={btn.key}
    onClick={() => setFilterr5(btn.key)}
    className={`px-4 py-2 rounded ${
      Filterr5=== btn.key ? "bg-blue-300 text-black dark:text-white text-base font-medium" : "bg-gray-200"
    }`}
  >
    {btn.label}
  </button>
))}

            </div>

            {/* محتوى الفلاتر */}
{["specifics6", "continue6","outline6","onabort5","allpoint6","parent6","review6","sheet6","tablet6"].includes(Filterr5) && (
  (() => {
const src = Aircondetion.itimis6[0]?.Power[Filterr5] ?? [];
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


{openGallery && (
  <ScreenGallery
    images={openGallery.images}
    startIndex={openGallery.start}
    onClose={() => setOpenGallery(null)}
  />
)}



<div className="p-2 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold text-base rounded">
  {/* النصوص */}
  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
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

<div id="االمكابح-السلامه">
  <div className="space-y-5 mt-6">
  {seftiy.itimis7.map((item, idx) => (
    <Disclosure key={idx} >
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
                {seftiy.itimis7[0].carInformation1.images.map((img, i) => (
  <img key={i} src={img} alt={`car ${i}`} />
))}

              </div>

              {/* نصوص الوصف */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                  {item.descriptionPoints8.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* أزرار الفلاتر */}
            <div className="flex flex-wrap gap-3 mt-6 ">
             
             {[
  { key: "specifics7", label: "جميع نقاط الفحص" },
  { key: "continue7", label: "حالةالبودي الخارجي" },
  { key: "outline7", label: "الزجاج" },
  { key: "onabort7", label: "المرايه الجانبية" },
  { key: "allpoint7", label: "الشبر" },
  { key: "parent7", label: "الاطار الاحتياطي" },
  { key: "review7", label: "الجك والعده الأضافيه" },
  { key: "sheet7", label: "مفتاح الاطارات" },
  { key: "tablet7", label: "الحالة الداخلية1" },
].map((btn) => (
  <button
    key={btn.key}
    onClick={() => setFilterr6(btn.key)}
    className={`px-4 py-2 rounded ${
      Filterr6 === btn.key ? "bg-blue-300 text-black dark:text-white text-base font-medium" : "bg-gray-200"
    }`}
  >
    {btn.label}
  </button>
))}

            </div>

            {/* محتوى الفلاتر */}
{["specifics7", "continue7","outline7","onabort7","allpoint7","parent7","review7","sheet7","tablet7"].includes(Filterr6) && (
  (() => {
    const src =seftiy.itimis7[0]?.Power[Filterr6] ?? [];
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
  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
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
<div id="للسلامهBosch-فحص ">
  <div className="space-y-5 mt-6">
  {Bosch.itimis8.map((item, idx) => (
    <Disclosure key={idx} >
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
                {Bosch.itimis8[0].carInformation1.images.map((img, i) => (
  <img key={i} src={img} alt={`car ${i}`} />
))}

              </div>

              {/* نصوص الوصف */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                  {item.descriptionPoints9.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
                          <div className="flex flex-col items-center justify-center p-6 shadow rounded-lg">

 <div className=" w-full max-w-6xl mx-auto">
      {/* صورة العربية */}
      <img
        src="/car.img5.jpg" // غير اسم الصورة حسب اللي عندك
        alt="Car system"
        className="w-full object-contain"
      />
<div className="overflow-x-auto">
  <table className="w-full table-auto border border-gray-300 dark:border-gray-700 text-sm text-center">
    <thead className="bg-gray-100 dark:bg-gray-800">
      <tr>
        <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
          Measured
        </th>
        <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
          Limit
        </th>
        <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="bg-white dark:bg-gray-900">
      <tr>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          Brake force diff. service brake
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          20%
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-bold text-green-600 dark:text-green-400">
          OK
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          Brake force diff. parking brake
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          25%
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-bold text-red-600 dark:text-red-400">
          Fail
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          Total braking efficiency service brake
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          50%
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-bold text-green-600 dark:text-green-400">
          OK
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          Total braking efficiency parking
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300">
          30%
        </td>
        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-bold text-green-600 dark:text-green-400">
          OK
        </td>
      </tr>
    </tbody>
  </table>
</div>

      
    </div>
    
<div className="p-2 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold text-base rounded">
  {/* النصوص */}
  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm dar">
    الملاحظات:
    <li>لم يتم التأكد من قراءة العداد الحالية لعدم توفر مصادر موثوقة لدى كارسيرفس وقت الفحص</li>
  </ul>
</div>
</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ))}
</div>
</div>
 <div id="صور-الفحص ">
      <div className="space-y-5 mt-6">
        {photo.itimis9.map((item, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                {/* زر الفتح والغلق */}
<Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <span className="font-medium">{item.title}</span>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                {/* المحتوى */}
<Disclosure.Panel className="px-4 py-2 rounded-b-md border border-t-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                  <div className="space-y-6">
                    {item.Power.specifics9.map((row, i) =>
                      row.gallery ? (
                        <div key={i}>
                          <h2 className="text-lg font-bold mb-3 dark:text-white">
                            {row.label}
                          </h2>

                          {/* الصور جنب بعض */}
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {row.gallery.map((img, j) => (
                              <div
  key={j}
  className="cursor-pointer"
  onClick={() =>
    setOpenGallery({ images: row.gallery, start: j }) // ✅ هنا التعديل
  }
>
  <img
    src={img.src}
    alt={img.title}
    className="w-full h-40 object-cover rounded-lg shadow"
/>
  <p className="text-sm text-center mt-1 dark:text-white">
    {img.title}
  </p>
</div>

                            ))}
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      {/* المعرض */}
  {/* المعرض */} 

{openGallery && (
  <ScreenGallery
    images={openGallery.images}
    onClose={() => setOpenGallery (null)}
  />
)}


    </div>
  

    </div>
    
  );
}
