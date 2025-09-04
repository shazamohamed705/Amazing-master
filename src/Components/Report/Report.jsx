import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaFileAlt } from "react-icons/fa";

function ReportSearch() {
  const [vin_number, setVin_number] = useState("");
  const [report_number, setReport_number] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // بيانات تجريبية للاختبار
  

  const handleSearch = async () => {
    if (!vin_number && !report_number) {
      setError("ادخل رقم الشاصي أو التقرير");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("يرجى تسجيل الدخول أولاً");
        setLoading(false);
        return;
      }

      // محاولة الاتصال بالباك إند الحقيقي
      try {
        const url = `https://demo.syarahplus.sa/backend/api/users/inspection/reports?vin_number=${vin_number.trim()}&report_number=${report_number.trim()}`;
        
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Report Search Response:", data);

          if (data.success) {
            console.log("🔍 Search successful, navigating with data:", data.data);
            navigate("/report-result", {
              state: {
                report: data.data,
                vin: vin_number.trim(),
                reportNum: report_number.trim(),
                searchResults: data.data,
                fromSearch: true
              },
            });
            return;
          } else {
            setError(data.message || "لم يتم العثور على التقرير");
          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (apiError) {
        console.log("API Error:", apiError.message);
        
        // استخدام البيانات التجريبية إذا فشل API
        console.log("🔄 Using mock data for testing...");
        
        // محاكاة تأخير الشبكة
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // تحديث البيانات التجريبية بالقيم المدخلة
        const updatedMockData = {
          ...mockData,
          data: {
            ...mockData.data,
            report_number: report_number.trim() || mockData.data.report_number,
            vehicle: {
              ...mockData.data.vehicle,
              vin_number: vin_number.trim() || mockData.data.vehicle.vin_number
            }
          }
        };

        navigate("/report-result", {
          state: {
            report: updatedMockData.data,
            vin: vin_number.trim() || updatedMockData.data.vehicle.vin_number,
            reportNum: report_number.trim() || updatedMockData.data.report_number,
            searchResults: updatedMockData.data,
            fromSearch: true,
            isMockData: true
          },
        });
        return;
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("حصل خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-gray-900 via-black to-gray-800">
      <h2 className="text-4xl md:text-5xl font-smeiabold text-white mb-16 text-center tracking-wide">
        البحث عن <span className="text-red-600">تقرير</span>
      </h2>

      <div className="flex flex-col md:flex-row items-end gap-6 w-full max-w-4xl bg-gray-900/50 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
        {/* حقل رقم الشاصي */}
        <div className="flex-1 relative">
          <span className="absolute left-4 top-3 text-gray-400 text-xl">
            <FaCar />
          </span>
          <input
            type="text"
            placeholder="رقم الشاصي *"
            value={vin_number}
            onChange={(e) => setVin_number(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-900 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-inner"
          />
        </div>

        {/* حقل رقم التقرير */}
        <div className="flex-1 relative">
          <span className="absolute left-4 top-3 text-gray-400 text-xl">
            <FaFileAlt />
          </span>
          <input
            type="text"
            placeholder="رقم التقرير *"
            value={report_number}
            onChange={(e) => setReport_number(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-900 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-inner"
          />
        </div>

        {/* زرار البحث */}
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-8 py-4 rounded-xl bg-red-600 text-white font-bold shadow-lg hover:bg-red-700 transform hover:scale-105 transition duration-300 hover:shadow-2xl text-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "جار البحث..." : "ابحث"}
        </button>
      </div>

      {/* رسائل الخطأ */}
      {error && <p className="text-red-400 mt-6">{error}</p>}

   
    </div>
  );
}

export default ReportSearch;
