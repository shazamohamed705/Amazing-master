import React, { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Disclosure, Label } from "@headlessui/react";
import { FaCarSide, FaCogs,FaUser, FaSnowflake, FaShieldAlt, FaBook, FaRuler, FaPlug, FaExclamationTriangle, FaCamera,FaChevronDown,FaInfoCircle,FaCheckCircle,FaCarBattery,FaOilCan} from "react-icons/fa";
import image55 from '../../assets/image55.png'
import fallbackImage  from '../../assets/imagge2.png'
import rallbackImage from '../../assets/imagee22.png'
import hallbackImage from '../../assets/immage3.png'
import iallbackImage from '../../assets/img20.png'
import pallbackImage  from  '../../assets/img23.png'
import  FullScreenGallery from "../FullScreenGallery/FullScreenGallery";
import ScreenGallery from "../ScreenGallery/ScreenGallery";
import ReportData from  "./ReportData";
import HistoryData from "./HistoryData";
import Exoskeleton from "./Exoskeleton";
import ChassisData from "./ChassisaData";
export default function ReportResult() {



const [openInfoIndex, setOpenInfoIndex] = useState(null);
useEffect(() => {
  const handleClickOutside = () => {
    setOpenInfoIndex(null);
  };

  // نضيف Listener على كل النقرات
  document.addEventListener("click", handleClickOutside);

  // نظف الـ Listener لما الكمبوننت يتفكك
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

const [openGallery, setOpenGallery] = useState(false);

  const { reportNumber } = useParams(); // بيجيب الرقم من URL /report/:reportNumber



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

  <ReportData/>


      {/*التاريخ والسجلات */}
<HistoryData/>
      {/* الهيكل الخارجي */}
        return <Exoskeleton reportNumber={reportNumber} />;



{/*الشاصي والهيكل */}
<ChassisData/>
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
