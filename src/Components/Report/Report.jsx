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
  const mockData = {
    success: true,
    data: {
      id: 1,
      report_number: "RPT-2024-001",
      status: "completed",
      percentage: 85,
      grade: "A",
      total_score: 85,
      max_possible_score: 100,
      created_at: "2024-01-15T10:30:00Z",
      inspection_reports_points: [
        {
          point_id: 1,
          point_passed: true,
          score_achieved: 10,
          max_score: 10,
          point_condition: "ممتاز",
          point_notes: "الهيكل الخارجي بحالة ممتازة",
          point: {
            point_id: 1,
            name_ar: "الهيكل الخارجي",
            name_en: "Exterior Body",
            section: "الهيكل",
            services_id: 1,
            explanation_ar: "فحص شامل للهيكل الخارجي",
            explanation_en: "Comprehensive exterior body inspection"
          }
        },
        {
          point_id: 2,
          point_passed: true,
          score_achieved: 9,
          max_score: 10,
          point_condition: "جيد",
          point_notes: "المحرك يعمل بشكل جيد",
          point: {
            point_id: 2,
            name_ar: "المحرك",
            name_en: "Engine",
            section: "المحرك",
            services_id: 3,
            explanation_ar: "فحص أداء المحرك",
            explanation_en: "Engine performance inspection"
          }
        },
        {
          point_id: 3,
          point_passed: false,
          score_achieved: 6,
          max_score: 10,
          point_condition: "يحتاج صيانة",
          point_notes: "نظام الفرامل يحتاج صيانة",
          point: {
            point_id: 3,
            name_ar: "نظام الفرامل",
            name_en: "Brake System",
            section: "السلامة",
            services_id: 5,
            explanation_ar: "فحص نظام الفرامل",
            explanation_en: "Brake system inspection"
          }
        }
      ],
      vehicle: {
        id: 1,
        vin_number: "1HGBH41JXMN109186",
        manufacturer_id: "هوندا",
        model: "سيفيك",
        vehicle_category: "سيدان",
        production_year: 2020,
        mileage_km: 45000,
        exterior_color: "أبيض",
        engine_capacity_cc: 2000,
        fuel_type: "بنزين",
        transmission_type: "أوتوماتيك",
        drivetrain: "أمامي",
        body_type: "سيدان",
        license_plate_number: "ABC-123",
        image: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Honda+Civic"
      },
      failure_reasons: [
        {
          reason: "نظام الفرامل يحتاج صيانة فورية",
          point: "نظام الفرامل",
          score: "6/10",
          section: "السلامة",
          serviceId: 5
        }
      ]
    }
  };

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

      {/* معلومات إضافية للمطورين */}
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg text-blue-300 text-sm max-w-2xl text-center">
        <p className="mb-2">💡 للمطورين: إذا فشل الاتصال بالباك إند، سيتم استخدام بيانات تجريبية للاختبار</p>
        <p className="text-xs opacity-75">يمكنك إدخال أي قيم للاختبار</p>
      </div>
    </div>
  );
}

export default ReportSearch;
