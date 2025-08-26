import React from 'react'
import vector from '../../assets/Vector 196 (Stroke).png'
import vector2 from '../../assets/Vector 214 (Stroke).png'
import bg3 from '../../assets/Clip path group.png'
import numPhoto from '../../assets/Group (2).png'
import numPhoto1 from '../../assets/group (2) 7.png'
import numPhoto2 from '../../assets/group (2) 9.png'
import numPhoto3 from '../../assets/group (2) 8.png'
import numPhoto4 from '../../assets/group (2) 10.png'
import numPhoto5 from '../../assets/group (2) 6.png'
import numPhoto6 from '../../assets/group (2) 5.png'
import aboutImg from '../../assets/about car.png'
import icon1 from '../../assets/note.png'
import icon2 from '../../assets/clipboard-tick.png'
import icon3 from '../../assets/heart-tick.png'
import switchIcon from '../../assets/switch.png'
function About() {
  return (
    <>
      {/* من نحن  */}
      <section>
        <div className="about w-10/12 mx-auto my-10 py-10 ">
          <div className="title text-center relative">
            <h3 className="text-3xl my-5">من نحن </h3>
            <h2 className='text-5xl font-extrabold'>كار سيرفس</h2>
            <img className='absolute right-1/2 translate-x-1/2  ' src={vector} alt="" />
          </div>
          <div className="content mt-20 px-11">
            <p className='text-lg md:text-4xl leading-relaxed font-semibold'>
              في كار سيرفس، رؤيتنا واضحة: توفير خدمة مبتكرة وموثوقة لتحليل أداء السيارات والكشف عن العيوب بشكل دقيق وشامل. نعمل بشغف لإحداث تغيير حقيقي في تجربة امتلاك السيارة من خلال تقديم حلول متقدمة تعتمد على أحدث التقنيات وأفضل الممارسات.
            </p>
          </div>
        </div>
      </section>

      {/* رســالــتــنا */}
      <section>
        <div className="w-10/12 mx-auto my-10 py-10 ">
          <div className="title relative py-2">
            <h3 className="text-3xl my-5 font-bold">رســالــتــنا</h3>
            <img className='absolute top-2 right-32  w-16' src={vector2} alt="" />
          </div>
          <div className="content mt-5 px-14 py-10 border border-[#575757] rounded-3xl">
            <p className='text-lg md:text-2xl leading-10 font-semibold '>
              نهدف إلى تمكين أصحاب السيارات والشركات من فهم كل تفاصيل سياراتهم بوضوح، من خلال تقارير شاملة وسهلة القراءة تكشف عن حالة السيارة، سواء من الداخل أو الخارج. نساعدك تتجنب المفاجآت غير السارة من خلال اكتشاف المشاكل قبل حدوثها
            </p>
          </div>
        </div>
      </section>

      {/* ارقــامــنــا */}
      <section className=' my-10  py-10 relative '>
        <img className='absolute top-0 end-0   hidden md:block' src={bg3} alt="" />
        <div className="w-10/12 mx-auto ">
          <div className="header text-center my-8 py-8 relative">
            <h2 className="font-extrabold text-5xl   relative inline-block">
              ارقــامــنــا
              <img
                className="absolute -top-14 left-[-6%] transform -translate-x-1/2  "
                src={numPhoto}
                alt="Logo Icon"
              />
            </h2>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
            <div className="secondBg flex flex-col items-center text-center border mainBorder rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto6} alt="" />
              <h2 className='font-bold text-2xl'>10,000+</h2>
              <p className='my-3'>عميل راضٍ عن خدمتنا</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto5} alt="" />
              <h2 className='font-bold text-2xl'>+5,000</h2>
              <p className='my-3'>تقرير تحليل دقيق </p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto4} alt="" />
              <h2 className='font-bold text-2xl'>+500</h2>
              <p className='my-3'>تقييم إيجابي من عملائنا</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto3} alt="" />
              <h2 className='font-bold text-2xl'>24/7</h2>
              <p className='my-3'>دعم متواصل</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto2} alt="" />
              <h2 className='font-bold text-2xl'>95%</h2>
              <p className='my-3'>نسبة رضا العملاء</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto1} alt="" />
              <h2 className='font-bold text-2xl'>+1,000</h2>
              <p className='my-3'>سيارة تم فحصها</p>
            </div>


          </div>
        </div>

      </section>


      {/* ماذا نقدم؟ */}
      <section className="w-11/12 mx-auto px-14 my-16  items-center">
        <div className="header text-center my-8 py-8 ">
          <h2 className="font-extrabold text-5xl  ">
            ماذا نقدم؟
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
            <div className="flex items-center gap-4  bg-black text-white border border-white rounded-3xl px-4 py-8 shadow-lg">
              <div className="bg-[#252525] w-16 h-12 flex items-center justify-center rounded-xl mr-2">
                <img src={icon1} alt="icon note" />
              </div>
              <div className='text-[#D9D9D9]'>
                <h3 className="text-lg md:text-2xl leading-10 font-bold">تحليل شامل ودقيق</h3>
                <p className="text-base md:text-lg">
                  فحوصات تعتمد على بيانات موثوقة تغطي كل جزء في السيارة.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4  bg-black text-white border border-white rounded-3xl px-4 py-8 shadow-lg">
              <div className="bg-[#252525] w-16 h-12 flex items-center justify-center rounded-xl mr-2">
                <img src={icon2} alt="icon note" />
              </div>
              <div className='text-[#D9D9D9]'>
                <h3 className="text-lg md:text-2xl leading-10 font-bold">تقارير مفصلة</h3>
                <p className="text-base md:text-lg">
                  معلومات سهلة الفهم ومصممة لتناسب احتياجاتك
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4  bg-black text-white border border-white rounded-3xl px-4 py-8 shadow-lg">
              <div className="bg-[#252525] w-16 h-12 flex items-center justify-center rounded-xl mr-2">
                <img src={icon3} alt="icon note" />
              </div>
              <div className='text-[#D9D9D9]'>
                <h3 className="text-lg md:text-2xl leading-10 font-bold">خدمة موثوقة</h3>
                <p className="text-base md:text-lg">
                  دعم متواصل وخبرة ممتدة في هذا المجال
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="about car" className="w-full h-full object-contain" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 mainBorder"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <div className="bg-orange-500 text-white w-11 h-11 flex items-center justify-center rounded-full shadow-lg">
                <img src={switchIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default About