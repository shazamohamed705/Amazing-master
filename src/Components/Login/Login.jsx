import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { FaApple, FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import backgroundVideo from '../../assets/backgroundvideo.mp4';
function Login() {
    const { login, loading, error } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      await login(email, password);
    };
  return (
    <>
    
    <section className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
          {/* Registration Form */}
          <div className="container register relative z-10 mx-auto my-10 py-20">
            <div className="w-3/4 md:w-4/6 lg:w-2/5 mx-auto bg-black bg-opacity-60 rounded-2xl h-full py-12">
              <div className="w-3/4 mx-auto h-full text-center">
                <form onSubmit={onSubmit}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="ادخل البريد الالكتروني"
                  className="w-full mx-auto px-4 py-3 text-black rounded-lg my-2"
                  required
                />
                <div className="relative w-full mx-auto my-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="ادخل كلمة المرور"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:outline-none"
                    required
                  />
                  <span
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </span>
                </div>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                <button type="button" className="text-end mt-5 w-full">نسيت كلمه المرور</button>
                <button type="submit" disabled={loading} className="block w-full mainBg py-4 px-4 rounded-lg my-10 font-bold disabled:opacity-50">
                  {loading ? 'جارٍ الدخول...' : 'تسجيل الدخول'}
                </button>
                </form>
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
    
        </>
  )
}

export default Login