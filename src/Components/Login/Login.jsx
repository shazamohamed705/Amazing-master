import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import backgroundVideo from "../../assets/backgroundvideo.mp4";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // هنا نخزن رسالة الخطأ من السيرفر

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    if (!login || !password) {
      setError("⚠️ من فضلك املأ جميع الحقول");
      return;
    }

    try {
      const res = await axios.post(
        "https://demo.syarahplus.sa/backend/api/users/login",
        {
          login: login.trim(),
          password: password.trim(),
        }
      );

      // 👇 هنا نطبع كل الريسبونس علشان نشوف مكان التوكن
      console.log("📌 Full API Response:", res.data);

      // احتمال التوكن يكون في res.data.token أو res.data.data.token
      const token =
        res.data?.token || res.data?.data?.token || res.data?.access_token;

      if (token) {
        localStorage.setItem("token", token); // نخزن التوكن
        console.log("✅ Token Stored:", token);

        if (res.data?.data?.is_verified === 0) {
          setError("⚠️ تم تسجيل الدخول لكن الحساب غير مفعل بعد");
        } else {
          setError("");
          alert("✅ تم تسجيل الدخول بنجاح");
        }
      } else {
        setError(res.data?.message || "❌ لم يتم العثور على التوكن");
      }
    } catch (err) {
      console.error(
        "❌ خطأ:",
        err.response?.data || err.message
      );
      setError(err.response?.data?.message || "❌ فشل تسجيل الدخول");
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="container relative z-10 mx-auto my-10 py-20">
        <div className="w-3/4 md:w-4/6 lg:w-2/5 mx-auto bg-black bg-opacity-60 rounded-2xl py-12">
          <div className="w-3/4 mx-auto text-center">
            <input
              type="text"
              placeholder="رقم الهاتف أو اسم المستخدم"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full px-4 py-3 rounded-lg my-2 text-black"
            />

            <div className="relative my-2">
              <input
                type={showPassword ? "text" : "password"}
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

            {/* عرض رسالة الخطأ هنا */}
            {error && (
              <p className="text-red-400 font-semibold my-3">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 py-3 rounded-lg mt-5 text-white font-bold"
            >
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
