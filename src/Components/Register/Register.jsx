import React, { useState } from 'react';

import axios from 'axios';
import backgroundVideo from '../../assets/backgroundvideo.mp4';
import { FaApple, FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // توليد بريد ورقم هاتف عشوائي
  const generateRandomEmail = () => `user${Date.now()}@demo.com`;
  const generateRandomPhone = () => `05${Math.floor(10000000 + Math.random() * 90000000)}`;

  const handleRegister = async () => {
    const email = generateRandomEmail();
    const phone = generateRandomPhone();
    const username = `user_${Date.now()}`;

    if (!password || !confirmPassword) {
      alert('من فضلك املأ جميع الحقول');
      return;
    }
    if (password !== confirmPassword) {
      alert('كلمة المرور غير متطابقة');
      return;
    }

    try {
      const res = await axios.post(
        'https://demo.syarahplus.sa/backend/api/users/register',
        {
          email,
          password,
          name: "Shaza Test",
          username,
          phone_number: phone,
          registration_method: "form",
          platform: "web"
        }
      );

      if (res.data.success) {
        alert(`تم إنشاء الحساب بنجاح ✅\nالبريد: ${email}\nرقم الهاتف: ${phone}`);
        localStorage.setItem('token', res.data.data.token);
        console.log('بيانات المستخدم:', res.data.data);
      } else {
        alert(res.data.message || 'فشل في إنشاء الحساب');
      }
    } catch (err) {
      console.error('خطأ:', err.response?.data || err.message);
      alert(err.response?.data?.errors || 'فشل في إنشاء الحساب');
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="container relative z-10 mx-auto my-10 py-20">
        <div className="w-3/4 md:w-4/6 lg:w-2/5 mx-auto bg-black bg-opacity-60 rounded-2xl py-12">
          <div className="w-3/4 mx-auto text-center">
            <div className="relative my-2">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-black border"
              />
              <span
                className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            <div className="relative my-2">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="تأكيد كلمة المرور"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-black border"
              />
            </div>

          <button className="text-end mt-5 w-full">نسيت كلمه المرور</button>

              {/* زر التسجيل */}
              <button
                onClick={handleRegister}
                className="block w-full mainBg py-4 px-4 rounded-lg my-10 font-bold"
              >
                انشاء حساب
              </button>

              {/* التسجيل عبر سوشيال ميديا */}
              <div className="flex items-center my-10">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <h6 className="secondColor px-4 text-md font-medium text-center">
                  يمكنك التسجيل عبر
                </h6>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
              </div>

              <div className="icons flex items-center justify-center gap-5">
                <div className="bg-white w-24 h-14 rounded-xl flex items-center justify-center">
                  <FaFacebook className="text-3xl text-blue-600" />
                </div>
                <div className="bg-white w-24 h-14 rounded-xl flex items-center justify-center">
                  <FaApple className="text-3xl text-black" />
                </div>
                <div className="bg-white w-24 h-14 rounded-xl flex items-center justify-center">
                  <FcGoogle className="text-3xl text-blue-600" />
                </div>
              </div>

              <h6 className="secondColor mt-14 px-4 text-sm font-medium text-center">
                انشاء حساب
              </h6>
            </div>
          </div>
        </div>
        
        
      
    </section>
  );
}

export default Register;
