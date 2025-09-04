import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Router } from 'react-router-dom'
import { FaCalendarAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import numPhoto from '../../assets/Group (2).png'
import numPhoto1 from '../../assets/group (2) 7.png'
import numPhoto2 from '../../assets/group (2) 9.png'
import numPhoto3 from '../../assets/group (2) 8.png'
import numPhoto4 from '../../assets/group (2) 10.png'
import numPhoto5 from '../../assets/group (2) 6.png'
import numPhoto6 from '../../assets/group (2) 5.png'
import rectangle from '../../assets/Rectangle 113.png'
import building from '../../assets/building.png'

import bg3 from '../../assets/Clip path group.png'
import article from '../../assets/Group 46.png'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import say from '../../assets/say.png'
import say2 from '../../assets/say2.png'
import car from '../../assets/car.png'
import vector from '../../assets/Vector 196 (Stroke).png'
import { GoArrowUpRight } from 'react-icons/go'
import Slider from 'react-slick/lib/slider'
import { TbMessageHeart } from 'react-icons/tb'
function Home() {
 

  

  const [active, setActive] = useState(0);

  // عملائنا قالو عننا ايه ؟
  var settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
    const navigate = useNavigate(); // ⚡ مهم: هنا بتعرف المتغير


  return (
    <>

      {/* home */}
{/* سكشن Home */}
<section className="home flex flex-col md:flex-row justify-between items-start pt-4 md:pt-8 px-6 bg-gray-50 dark:bg-gray-900 relative">
  {/* الكلام والزر */}
  <div className="text-center max-w-xl z-10">
    <h1 className="text-3xl md:text-3xl font-extrabold dark:text-white leading-snug">
      <span className="text-red-600">أول</span> نظام فحص
      <span className="block mt-2">مركبات شامل عالمي</span>
    </h1>

    <button
      onClick={() => navigate('/appointment')}
      className="mt-8 px-12 py-4 rounded-full text-white font-semibold shadow-lg transition duration-300 transform 
                 bg-red-600 border border-black dark:border-white
                 hover:bg-red-700 hover:scale-105 hover:shadow-2xl text-lg"
    >
      احجز الآن
    </button>
  </div>

 <div className="absolute bottom-0 left-20 w-1/3 md:w-1/4">
  <img src="./sc2.png" alt="car" className="w-full h-auto" />
</div>
</section>


<div className="h-16 md:h-24"></div>

<section className="w-full py-16 bg-black dark:bg-gray-900">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      تواصل معنا
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* الكارت الأول */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-row items-center text-right gap-4">
        <div className="bg-black dark:bg-gray-700 text-white w-16 h-16 flex items-center justify-center rounded-full">
          <FaCalendarAlt size={28} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">تريد فحص سيارتك؟</h3>
          <p className="text-gray-600 dark:text-gray-300">احجز الآن</p>
        </div>
      </div>

      {/* الكارت الثاني */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-row items-center text-right gap-4 hover:shadow-xl transition duration-300"
      >
        <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full">
          <FaWhatsapp size={28} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">راسلنا على واتساب</h3>
        </div>
      </a>

      {/* الكارت الثالث */}
      <a 
        href="tel:+96265802228" 
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-row items-center text-right gap-4 hover:shadow-xl transition duration-300"
      >
        <div className="bg-red-500 text-white w-16 h-16 flex items-center justify-center rounded-full">
          <FaPhoneAlt size={28} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">اتصل بنا</h3>
        </div>
      </a>

    </div>
  </div>
</section>


{/* كار سيرفيس */}
<section className="flex justify-center py-10 px-6 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-4xl w-full flex flex-col items-center text-center">
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
   
    </h3>
 


    {/* النص */}
   <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
  كـــــار <span className="text-red-600">سيرفيس</span>
</h1>

<p className="leading-8 text-gray-700 dark:text-gray-300">
  أوتوسكور هو الفحص الأول في الأردن و الشرق الأوسط الذي يعتمد على أسس علمية وهندسية 
  في قياس كفاءة السيارة الداخلية والخارجية عن طريق فحص أكثر من 200 نقطة تشمل جميع أجزاء السيارة 
  من النمرة للنمرة بنظام العلامة المئوية (السكور) بأحدث وسائل الفحص من شركة بوش الألمانية. 
  يفحص نظام اوتوسكور جميع مكونات السيارة من الشاصي والهيكل، الأنظمة الميكانيكية والكهربائية جميعها، 
  من النمرة للنمرة لجميع أنواع السيارات (البنزين، الهايبرد والكهربائية).
  <br /><br />
  لدينا في اوتوسكور شراكات محلية وعالمية للحصول على معلومات وتاريخ السيارة، بالإضافة الى الربط مع 
  إدارة الترخيص للحصول على جميع المعلومات داخل الأردن وارفاقها في تقرير اوتوسكور.
  <br /><br />
  قطاع السيارات يتطور بشكل سريع، ودخول التكنولوجيا الحديثة في مجال صناعة السيارات يسبب عبء على المشتري 
  لاتخاذ قرار شراء سيارة مستعملة، وجود اوتوسكور يساعد المشتري على اتخاذ هذا القرار وحماية استثماره.
</p>
  </div>
</section>

<section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">
    {/* العنوان */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
      لماذا <span className="text-red-600"> كار سيرفيس؟</span>
    </h2>

    {/* الكروت */}
    <div className="grid md:grid-cols-4 gap-8">
      
      {/* الكرت الأول */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
       
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          جود تقرير مفصل عن حالة السيارة مدعمة بصور وفيديوهات وعلامة مئوية نهائية تبين حالة السيارة العامة
        </p>
      </div>

      {/* الكرت الثاني */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
     
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          متخصصين في فحص السيارات الكهربائية والهايبرد بوجود فريق من المهندسين والفنيين المدربين
        </p>
      </div>

      {/* الكرت الثالث */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
     
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          وجود اجدد اجهزة الفحص من شركة بوش BOSCH العالمية وشركات عالمية أخرى لجميع انواع السيارات
        </p>
      </div>

      {/* الكرت الرابع */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
      
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          اول مركز فحص يعتمد على اسس علمية وتقنية لفحص وتقييم المركبات لاكثر من 200 نقطة فحص
        </p>
      </div>

    </div>
  </div>
</section>






      {/* ارقــامــنــا */}

      <section className=' my-5  py-5 relative '>
        <img className='absolute top-0 end-0   hidden md:block' src={bg3} alt="" />
        <div className="w-10/12 mx-auto">
          <div className="header text-center my-4 py-4 md:my-8 md:py-8 relative">
            <h2 className="font-extrabold text-xl md:text-5xl   relative inline-block">
              ارقــامــنــا
              <img
                className="absolute -top-14 left-[-6%] transform -translate-x-1/2 hidden md:block "
                src={numPhoto}
                alt="Logo Icon"
              />
            </h2>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto6} alt="" />
              <h2 className='font-bold text-2xl'>10,000+</h2>
              <p className='my-3'>عميل راضٍ عن خدمتنا</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto5} alt="" />
              <h2 className='font-bold text-2xl'>+5,000</h2>
              <p className='my-3'>تقرير تحليل دقيق </p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto4} alt="" />
              <h2 className='font-bold text-2xl'>+500</h2>
              <p className='my-3'>تقييم إيجابي من عملائنا</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto3} alt="" />
              <h2 className='font-bold text-2xl'>24/7</h2>
              <p className='my-3'>دعم متواصل</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto2} alt="" />
              <h2 className='font-bold text-2xl'>95%</h2>
              <p className='my-3'>نسبة رضا العملاء</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto1} alt="" />
              <h2 className='font-bold text-2xl'>+1,000</h2>
              <p className='my-3'>سيارة تم فحصها</p>
            </div>


          </div>
        </div>

      </section>

      {/* فروع كار سيرفيس */}

      <section className='w-10/12 mx-auto my-5  py-5'>
        <div className="header text-center my-4 py-4 md:my-8 md:py-8   relative">
          <h2 className="font-extrabold text-xl md:text-5xl  inline-block">
            فروع كار سيرفيس
          </h2>
          <img className='absolute right-1/2 translate-x-1/2 hidden md:block ' src={vector} alt="" />
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-9 gap-3  md:gap-4">
          <div className="col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-11 md:gap-6  justify-center">
            <div className="flex justify-center items-center gap-2">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                المقطم
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                المعادي
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                نزله السمان
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                نزله السمان
              </button>
            </div>
          </div>

          <div className="col-span-4 ">
            <img className='w-full h-full' src={rectangle} alt="" />
          </div>
          <div className="col-span-3">
            <p className='leading-8'>
              الموقع الاستراتيجي في منطقة البايدر الصناعية في عمان - الأردن ، بالقرب من طريق المطار الذي يربط الشمال والجنوب من المملكة. مع مساحة تزيد عن 2000 متر مربع ، وهو منشأة مزودة بأحدث التقنيات الحديثة لفحص المركبات ، و 10 رافعات لضمان الخدمة المثلى ، بسعة 25 مركبة. تم تصميم المرفق خصيصًا للتعامل مع جميع أنواع المركبات في نفس الوقت ، حيث يقوم الموظفون بإجراء عملية تفتيش يتم خلالها اتخاذ جميع تدابير مراقبة الجودة للحفاظ على أعلى مستوى من الدقة والدقة.
            </p>
            <div className=" flex justify-center  mt-10">
              <button className="mainBg text-white py-4 px-8 rounded-lg font-bold text-lg">
                احجز خدمه للفحص الان
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* المقالات */}

      <section className="w-10/12 mx-auto my-2 py-2 md:py-10">
        <div >
          <div className="header my-8 py-8 flex justify-between px-4">
            <h2 className="font-bold text-xl md:text-5xl inline-block relative">
              المقالات
              <img
                className="absolute -top-4 left-[-13%] transform -translate-x-1/2 hidden md:block  "
                src={article}
                alt="Logo Icon"
              />
            </h2>
            <button className='secondColor text-lg'>عرض الكل ...</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col">
              <div>
                <img className='w-full' src={article3} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article2} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article1} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* عملائنا قالو عننا ايه ؟ */}

      <section className='say w-10/12 mx-auto mb-11  pb-8 relative'>
        <div className="header my-3 py-6 flex justify-between px-4">
          <h2 className="font-bold text-xl md:text-5xl inline-block relative">
            عملائنا قالو عننا ايه ؟
            <img
              className="absolute -top-7 left-[-3%] transform -translate-x-1/2  hidden md:block"
              src={say}
              alt="Logo Icon"
            />
          </h2>
        </div>

        <Slider {...settings2}>
          <div className=" w-4/5 text-end m-auto py-7 px-10 text-[#A4A4A4] border mainBorder rounded-3xl ">
            <p className='text-lg md:text-3xl font-semibold md:leading-relaxed '>ما شاء الله تبارك الله، خدمة الفحص عندكم أكثر من رائعة. السيارة تم فحصها بشكل دقيق جداً وكل صغيرة وكبيرة تم شرحها لي بالتفصيل. الصراحة ارتحت مرة بعد التقرير اللي استلمته، وحسيت إني فاهم حالة السيارة بالكامل قبل ما أشتريها. الله يبارك فيكم ويزيدكم من فضله</p>
            <div className=" flex items-center justify-end gap-4 mt-8 text-end">
              <img src={say2} alt="profile image" />
              <h2 className='text-base font-bold'>مصطفي الحسيني</h2>
            </div>
          </div>
          <div className=" w-4/5 text-end m-auto py-7 px-10 text-[#A4A4A4] border mainBorder rounded-3xl ">
            <p className='text-lg md:text-3xl font-semibold md:leading-relaxed '>ما شاء الله تبارك الله، خدمة الفحص عندكم أكثر من رائعة. السيارة تم فحصها بشكل دقيق جداً وكل صغيرة وكبيرة تم شرحها لي بالتفصيل. الصراحة ارتحت مرة بعد التقرير اللي استلمته، وحسيت إني فاهم حالة السيارة بالكامل قبل ما أشتريها. الله يبارك فيكم ويزيدكم من فضله</p>
            <div className=" flex items-center justify-end gap-4 mt-8 text-end">
              <img src={say2} alt="profile image" />
              <h2 className='text-base font-bold'>مصطفي الحسيني</h2>
            </div>
          </div>
          <div className=" w-4/5 text-end m-auto py-7 px-10 text-[#A4A4A4] border mainBorder rounded-3xl ">
            <p className='text-lg md:text-3xl font-semibold md:leading-relaxed '>ما شاء الله تبارك الله، خدمة الفحص عندكم أكثر من رائعة. السيارة تم فحصها بشكل دقيق جداً وكل صغيرة وكبيرة تم شرحها لي بالتفصيل. الصراحة ارتحت مرة بعد التقرير اللي استلمته، وحسيت إني فاهم حالة السيارة بالكامل قبل ما أشتريها. الله يبارك فيكم ويزيدكم من فضله</p>
            <div className=" flex items-center justify-end gap-4 mt-8 text-end">
              <img src={say2} alt="profile image" />
              <h2 className='text-base font-bold'>مصطفي الحسيني</h2>
            </div>
          </div>


        </Slider>

      </section>


      {/* اشترك الان  */}
      <section className='w-10/12 mx-auto mb-10  py-10'>
        <div className="container  ">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8  border mainBorder rounded-3xl p-4">
            <div className="col-6 mb-8 mx-4">
              <h2 className='my-8 text-md md:text-5xl font-semibold max-w-sm leading-10'>اشترك الان في  القائمه البريديه</h2>

              <div className=" flex  justify-between px-2 py-1 border mainBorder rounded-xl">
                <input className='px-1 w-1/3 text-white bg-transparent outline-none' type="text" placeholder="بريدك" />
                <span className='flex items-center gap-2 mainBg rounded-xl py-2 px-4 cursor-pointer text-sm  '>  <TbMessageHeart className='fs-3xl' />  اشترك الان </span>
              </div>
            </div>
            <div className="col-6 flex justify-center">
              <img src={car} alt="" className='w-full object-contain md:-mt-16' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home