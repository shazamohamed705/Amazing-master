import React from 'react'
import infoImg from '../../assets/inofimg.png'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import { GoArrowUpRight } from 'react-icons/go'
function Info() {
  return (
    <>
      {/* hero section */}
      <section>
        <div className="container w-10/12 mx-auto my-2  py-10 ">
          <img src={infoImg} alt="" className='w-full' />
          <h2 className='font-bold text-3xl my-10'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
          <div className="flex  items-center gap-6">
            <h4 className='font-bold text-lg text-[#A4A4A4]'>الكاتب : مصطفي الحسيني</h4>
            <h5 className='text-gray-500 text-lg'>الاثنين 16 ديسمبر</h5>
          </div>
          <hr className='my-5' />
        </div>
      </section>


      {/* info section */}

      <section>
        <div className="container w-10/12 mx-auto my-2 py-2">
          <div className="text-xl   dark:text-[#E0E0E0] leading-10 px-5">
            {/* article one */}
            <p>السيارات أصبحت جزءًا لا يتجزأ من حياتنا اليومية، فهي ليست مجرد وسيلة نقل بل تعكس التكنولوجيا الحديثة وتقدم الصناعة. تطورت السيارات بشكل هائل منذ اختراعها في أواخر القرن التاسع عشر وحتى يومنا هذا، حيث أصبحت تجمع بين الراحة، الأمان، والكفاءة.
            </p>
            {/* article two */}
            <h3 className='font-semibold text-2xl my-10'> تطور السيارات عبر الزمن </h3>
            <p>
              بدأت قصة السيارات بمحركات تعمل بالبخار، ثم جاء محرك الاحتراق الداخلي ليغير كل شيء. في القرن العشرين، أصبحت السيارات أكثر شيوعًا بفضل خطوط الإنتاج السريعة التي قدمها هنري فورد. أما اليوم، فالعالم يشهد ثورة السيارات الكهربائية والسيارات ذاتية القيادة، التي تمثل مستقبل النقل المستدام.
            </p>
            {/* article three */}
            <h3 className='font-semibold text-2xl my-10'> أنواع السيارات </h3>
            <label >تختلف السيارات حسب احتياجات المستخدمين وأذواقهم : </label>
            <ol className='list-decimal px-6 space-y-1 mb-8'>
              <li>السيارات الصغيرة: مناسبة للتنقل داخل المدن، تمتاز بالاقتصادية في استهلاك الوقود.</li>
              <li>السيارات الرياضية: لمن يبحث عن السرعة والأداء العالي.</li>
              <li>السيارات العائلية: توفر مساحات واسعة ومزايا أمان متقدمة.</li>
              <li>السيارات الكهربائية والهجينة: صديقة للبيئة وتعمل بالكهرباء أو مزيج من الوقود والكهرباء.</li>
            </ol>
            {/* article four */}
            <h3 className='font-semibold text-2xl my-10'> أهمية الصيانة الدورية </h3>
            <p>
            للحفاظ على أداء السيارة، من الضروري القيام بصيانة دورية تشمل تغيير الزيوت، فحص الإطارات، وتحديث أنظمة الأمان. إهمال الصيانة يمكن أن يؤدي إلى مشاكل خطيرة قد تكلف أموالًا طائلة.
            </p>
            {/* article five */}
            <h3 className='font-semibold text-2xl my-10'> مستقبل السيارات </h3>
            <p>
            التوجه نحو السيارات الكهربائية يعكس رغبة العالم في تقليل الانبعاثات الكربونية. كذلك، فإن السيارات ذاتية القيادة تقدم وعودًا بتجربة نقل آمنة ومريحة.
            </p>
            <p>السيارات ليست مجرد مركبات، بل هي انعكاس للتقدم البشري وتطوره. مع استمرار الابتكار، من المتوقع أن تشهد السنوات القادمة تغييرات جذرية تجعل القيادة أكثر أمانًا وراحة واستدام

            </p>
          </div>
        </div>
      </section>

      {/* article section */}

      <section className="w-10/12 mx-auto my-10  py-10">
        <div >
          <div className="header my-8 py-8 flex justify-between px-4">
            <h2 className="font-semibold text-3xl   inline-block relative">
            مقالات متشابهه
            </h2>
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
    </>
  )
}

export default Info