import React, { useState } from "react";
import { 
  FaUser, FaPhoneAlt, FaCar, FaCalendarAlt, 
  FaFileUpload, FaMapMarkerAlt, FaClipboardList 
} from "react-icons/fa";

const Appointment = () => {
  const [carImages, setCarImages] = useState([null, null, null]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleImageChange = (index, file) => {
    const newImages = [...carImages];
    newImages[index] = file ? URL.createObjectURL(file) : null;
    setCarImages(newImages);
  };

  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const carFeaturesData = {
    General: ["Standard ستاندرد","Bought from dealership وارد الشركة","Single Motor محرك واحد","Dual Motor محرك مزدوج","Standard Plus ستاندرد بلس","Mid Range متوسط المدى","Long Range بعيد المدى"],
    Interior: ["Heated steering wheel تدفئة ستيرنج","Head-up display عرض المعلومات","Front massage seats مقاعد مساج","Front seat ventilation كراسي مبردة","Front heated seats كراسي مدفئة"],
    Security: ["All wheel drive دفع الرباعي","High-beam assistant تشغيل الضوء العالي","Night view assist رؤية ليلية","Tire pressure monitoring حساسات ضغط الإطارات"]
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          احجز موعد الفحص
        </h1>

        <form className="grid md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-500">

          {/* الاسم */}
          <div className="flex items-center border rounded-xl p-3 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <FaUser className="text-red-500 mr-3" />
            <input type="text" placeholder="الاسم الكامل" className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white text-sm" required />
          </div>

          {/* رقم الهاتف */}
          <div className="flex items-center border rounded-xl p-3 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <FaPhoneAlt className="text-red-500 mr-3" />
            <input type="tel" placeholder="رقم الهاتف" className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white text-sm" required />
          </div>

          {/* موديل السيارة */}
          <div className="flex items-center border rounded-xl px-3 py-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 relative">
            <FaCar className="text-red-500 mr-3" />
            <select className="w-full focus:outline-none text-gray-800 dark:text-gray-200 appearance-none px-3 py-2 rounded-xl cursor-pointer text-sm dark:bg-gray-900 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
              required defaultValue="">
              <option value="" disabled>اختر موديل السيارة</option>
              {["تويوتا","نيسان","هوندا","هيونداي","كيا","بي إم دبليو","مرسيدس","فولكس فاجن","فورد","جيب","شيفروليه","رينو","ميتسوبيشي","سوزوكي","مازدا","لكزس","بورش","أودي"]
                .map((brand, i) => <option key={i} value={brand} className="text-gray-800 dark:text-gray-200">{brand}</option>)}
            </select>
            <span className="absolute right-3 pointer-events-none text-gray-500 dark:text-gray-300 text-xs">▼</span>
          </div>

          {/* سنة الصنع */}
          <div className="flex items-center border rounded-xl px-3 py-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mt-3 relative">
            <FaCalendarAlt className="text-red-500 mr-3" />
            <select className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 text-sm rounded-xl px-2 py-1 appearance-none cursor-pointer dark:bg-gray-900"
              required defaultValue="">
              <option value="" disabled className="text-gray-500 dark:text-gray-400">اختر سنة الصنع</option>
              {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                <option key={year} value={year} className="text-gray-800 dark:text-gray-200">{year}</option>
              ))}
            </select>
            <span className="absolute left-3 pointer-events-none text-gray-500 dark:text-gray-300 text-xs">▼</span>
          </div>

          {/* نوع الفحص */}
          <div className="flex items-center border rounded-xl p-3 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 col-span-2 relative">
            <FaClipboardList className="text-red-500 mr-3" />
            <select className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 text-sm rounded-xl px-2 py-1 appearance-none cursor-pointer dark:bg-gray-900"
              required defaultValue="">
              <option value="" disabled className="text-gray-500 dark:text-gray-400">اختر نوع الفحص</option>
              <option value="شامل" className="text-gray-800 dark:text-gray-200">فحص شامل</option>
              <option value="ميكانيكي" className="text-gray-800 dark:text-gray-200">فحص ميكانيكي</option>
              <option value="كهربائي" className="text-gray-800 dark:text-gray-200">فحص كهربائي</option>
            </select>
            <span className="absolute left-3 pointer-events-none text-gray-500 dark:text-gray-300 text-xs">▼</span>
          </div>

          {/* نوع المحرك */}
          
          <div className="flex items-center border rounded-xl px-3 py-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mt-3 relative">
            <FaCar className="text-red-500 mr-3" />
            <select className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 text-sm rounded-xl px-2 py-1 appearance-none cursor-pointer dark:bg-gray-900"
              required defaultValue="">
              <option value="" disabled className="text-gray-500 dark:text-gray-400">اختر نوع المحرك</option>
              <option value="بنزين" className="text-gray-800 dark:text-gray-200">بنزين</option>
              <option value="ديزل" className="text-gray-800 dark:text-gray-200">ديزل</option>
              <option value="هايبرد" className="text-gray-800 dark:text-gray-200">هايبرد</option>
              <option value="كهربائي" className="text-gray-800 dark:text-gray-200">كهربائي</option>
            </select>
            <span className="absolute left-3 pointer-events-none text-gray-500 dark:text-gray-300 text-xs">▼</span>
          </div>

          {/* المسافة المقطوعة */}
          <div className="flex items-center border rounded-xl px-3 py-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mt-3">
            <FaCar className="text-red-500 mr-3" />
            <input type="number" placeholder="المسافة المقطوعة (كم)" className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 text-sm rounded-xl px-2 py-1" required />
          </div>

          {/* الفرع */}
          <div className="flex items-center border rounded-xl px-3 py-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 col-span-2 relative">
  <FaMapMarkerAlt className="text-red-500 mr-3" />
  <select
    className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 text-sm rounded-xl pl-6 py-1 appearance-none cursor-pointer dark:bg-gray-900"
    required
    defaultValue=""
  >
    <option value="" disabled className="text-gray-500 dark:text-gray-400">اختر الفرع</option>
    <option value="التجمع" className="text-gray-800 dark:text-gray-200">التجمع</option>
    <option value="زايد" className="text-gray-800 dark:text-gray-200">زايد</option>
    <option value="مصر الجديده" className="text-gray-800 dark:text-gray-200">مصر الجديده</option>
  </select>
  <span className="absolute left-3 pointer-events-none text-gray-500 dark:text-gray-300 text-xs">▼</span>
</div>


          {/* زر إضافة المركبة */}
          <div className="col-span-2 flex justify-start mt-4">
            <button type="button" onClick={() => setModalOpen(true)} className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
              إضافة المركبة +
            </button>
          </div>

          {/* رفع صور السيارة */}
          <div className="col-span-2 grid grid-cols-3 gap-4 mt-4">
            {carImages.map((img, index) => {
              const labels = [
                "الصورة الأمامية لرخصة المركبة",
                "الصورة الخلفية لرخصة المركبة",
                "الصورة الأمامية لهوية المشتري"
              ];
              return (
                <label key={index} className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl h-44 cursor-pointer hover:border-red-500 transition-colors dark:bg-gray-800">
                  {img ? <img src={img} alt={`car ${index}`} className="h-32 w-full object-cover rounded-2xl" /> :
                    <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-300 text-sm h-32 w-full">
                      <FaFileUpload size={30} className="mb-2" /> اضغط لإضافة صورة
                    </div>
                  }
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(index, e.target.files[0])} />
                  <span className="mt-2 text-gray-700 dark:text-gray-200 text-xs text-center">{labels[index]}</span>
                </label>
              );
            })}
          </div>

          {/* زر الإرسال */}
          <div className="col-span-2 flex justify-center mt-6">
            <button type="submit" className="px-12 py-4 rounded-full text-white font-semibold shadow-lg transition duration-300 transform bg-red-600 hover:bg-red-700 hover:scale-105 hover:shadow-2xl">
              تأكيد الحجز
            </button>
          </div>
        </form>
      </div>

      {/* Modal للشيت */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-lg relative">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Car Features</h2>
            {Object.keys(carFeaturesData).map(category => (
              <div key={category} className="mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
  <FaCar className="text-red-500" /> {category}
</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {carFeaturesData[category].map(feature => (
                    <label key={feature} className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                      <input type="checkbox" checked={selectedFeatures.includes(feature)} onChange={() => toggleFeature(feature)} className="accent-red-600" />
                      {feature}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 transition">× إغلاق</button>
              <button onClick={() => { setModalOpen(false); console.log(selectedFeatures); }} className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition">حفظ</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Appointment;

