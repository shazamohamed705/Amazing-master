import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import GaugeChart from "react-gauge-chart";
import { Disclosure } from "@headlessui/react";
import { 
  FaCarSide, FaCogs, FaShieldAlt, FaCamera, FaChevronDown, 
  FaInfoCircle, FaCheckCircle, FaTimes 
} from "react-icons/fa";
import image55 from '../../assets/image55.png';

// Constants moved outside component to prevent recreation
const GRADES = [
  { label: "F", range: [0, 40], color: "bg-red-500", textColor: "text-red-500" },
  { label: "D", range: [40, 50], color: "bg-purple-500", textColor: "text-purple-500" },
  { label: "C", range: [50, 60], color: "bg-orange-500", textColor: "text-orange-500" },
  { label: "B", range: [60, 70], color: "bg-gray-600", textColor: "text-gray-600" },
  { label: "B+", range: [70, 80], color: "bg-yellow-400", textColor: "text-yellow-400" },
  { label: "A", range: [80, 90], color: "bg-green-500", textColor: "text-green-500" },
  { label: "A+", range: [90, 100], color: "bg-blue-600", textColor: "text-blue-600" },
];

const INSPECTION_SECTIONS = [
  { name: "الهيكل الخارجي", key: "الهيكل", icon: FaCarSide },
  { name: "المحرك وناقل الحركة", key: "المحرك", icon: FaCogs },
  { name: "الشاصي والهيكل", key: "الشاصي", icon: FaCogs },
  { name: "نظام التوجيه", key: "التوجيه", icon: FaCarSide },
  { name: "النظام الكهربائي", key: "الكهرباء", icon: FaShieldAlt },
];

const FEATURES = [
  "شحن لاسلكي", "كراسي مبردة", "كراسي مدفئة", "كراسي جلد",
  "شاشة أمامية", "عدادات ديجيتال", "الدخول بدون مفتاح (بصمة)",
  "تتبع المسار", "النقطة العمياء", "أضوية LED", "كاميرا خلفية",
  "كاميرا 360 درجة", "سقف بانوراما", "نظام صوتي", "تحكم ستيرنج",
  "مثبت سرعة", "حساسات أمامية", "حساسات خلفية", "بصمة تشغيل",
  "نظام الرادار", "تنبيه التصادم", "كراسي كهربائي",
];

// Service ID mapping for better performance
const SERVICE_ID_MAP = {
  1: "الهيكل",    // Body/Exterior
  2: "الشاصي",    // Chassis
  3: "المحرك",    // Engine/Transmission
  4: "التوجيه",   // Suspension/Steering
  5: "الكهرباء"   // Electrical
};

// Utility functions - optimized
const getStatusColor = (status) => {
  const colorMap = {
    success: "border-green-500",
    warning: "border-yellow-500", 
    error: "border-red-500",
    pending: "border-gray-400",
    neutral: "border-gray-300"
  };
  return colorMap[status] || colorMap.neutral;
};

const formatDate = (dateString) => {
  if (!dateString) return new Date().toLocaleDateString('ar-SA');
  return new Date(dateString).toLocaleDateString('ar-SA');
};

const getInspectionStatus = (status, percentage) => {
  if (status === "pending") return "pending";
  if (percentage >= 60) return "success";
  if (percentage >= 40) return "warning";
  return "error";
};

// Memoized components for better performance
const StatusDisplay = React.memo(({ status, score }) => {
  if (status === "success") {
    return (
      <>
        <FaCheckCircle className="text-green-500 text-3xl" />
        <span className="font-bold text-green-600">ناجحة</span>
        <span className="text-sm text-gray-500 mt-1">ممتازة</span>
      </>
    );
  }
  
  if (status === "warning") {
    return (
      <>
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-100 border-4 border-yellow-500 text-yellow-600 font-bold text-4xl shadow-md">
          C
        </div>
        <span className="mt-2 text-yellow-600 font-semibold">تحتاج صيانة</span>
        <span className="text-sm text-gray-500 mt-1">متوسطة</span>
      </>
    );
  }
  
  if (status === "error") {
    return (
      <>
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 border-4 border-red-500 text-red-600 font-bold text-4xl shadow-md">
          F
        </div>
        <span className="mt-2 text-red-600 font-semibold">غير ناجحة</span>
        <span className="text-sm text-gray-500 mt-1">ضعيفة</span>
      </>
    );
  }
  
  if (status === "pending") {
    return (
      <>
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 border-4 border-gray-400 text-gray-600 font-bold text-4xl shadow-md">
          ?
        </div>
        <span className="mt-2 text-gray-600 font-semibold">في الانتظار</span>
        <span className="text-sm text-gray-500 mt-1">لم يتم الفحص بعد</span>
      </>
    );
  }
  
  return <span className="text-gray-500">-</span>;
});

const CarInfoGrid = React.memo(({ carInfo }) => (
  <div className="grid grid-cols-3 gap-6">
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-black border border-gray-100 dark:border-white shadow rounded-lg h-60">
      <span className="text-black dark:text-white text-lg font-semibold text-gray-700 mb-2">
        {carInfo.brand}
      </span>
      <span className="text-black dark:text-white text-lg font-semibold text-gray-700 mt-1">
        {carInfo.model}
      </span>
    </div>

    <div className="p-6 bg-white dark:bg-black border border-white dark:border-white shadow rounded text-center">
      <h2 className="text-black dark:text-white text-xl font-semibold text-gray-900 mb-4">
        {carInfo.title}
      </h2>
      <div className="flex justify-between mt-4 text-black dark:text-white text-base">
        <div className="text-right">
          <span className="block text-sm text-gray-600 text-black dark:text-white">رقم التقرير</span>
          <h3 className="text-black dark:text-white font-semibold text-gray-800">
            {carInfo.reportNumber}
          </h3>
        </div>
        <div className="text-left">
          <span className="block text-sm text-gray-600 text-black dark:text-white">رقم الشاسيه</span>
          <h3 className="font-semibold text-gray-800 text-black dark:text-white">
            {carInfo.chassisNumber}
          </h3>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center p-6 bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg h-60">
      <img
        src={carInfo.image}
        alt="Car"
        className="w-28 h-28 object-cover rounded mb-3"
        onError={(e) => {
          e.target.src = "/img1.png";
        }}
      />
      <span className="text-black dark:text-white text-base font-semibold">صورة السيارة</span>
    </div>
  </div>
));

const GaugeSection = React.memo(({ score, currentGrade, showInfo, setShowInfo }) => (
  <div className="p-6 flex flex-col items-start bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg">
    <button
      className="mb-4 w-10 h-10 flex items-center justify-center bg-white dark:bg-black border border-black dark:border-white rounded-full shadow hover:bg-gray-100"
      onClick={() => setShowInfo(!showInfo)}
    >
      <FaInfoCircle className="text-blue-500 text-xl" />
    </button>

    {showInfo && (
      <div className="mb-4 bg-white shadow-lg border rounded-lg p-4 w-full">
        <table className="table-auto border-collapse border border-gray-300 w-full text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 px-3 py-1">Grade</th>
              <th className="border border-gray-300 px-3 py-1">Range</th>
            </tr>
          </thead>
          <tbody>
            {GRADES.map((g) => (
              <tr key={g.label}>
                <td className={`border border-gray-300 px-3 py-1 font-bold ${g.textColor}`}>
                  {g.label}
                </td>
                <td className="border border-gray-300 px-3 py-1">
                  {g.range[0]}% - {g.range[1]}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    <GaugeChart
      id="gauge-chart"
      nrOfLevels={20}
      colors={["#ef4444", "#f97316", "#eab308", "#22c55e"]}
      arcWidth={0.3}
      percent={score / 100}
      textColor="#000000"
    />

    <div className="text-2xl font-bold mt-2">
      <span className={currentGrade?.textColor || ""}>
        {score}%
      </span>
    </div>
  </div>
));

function ReportData() {
  const location = useLocation();
  const [reportData, setReportData] = useState(null);
  const [vehicleData, setVehicleData] = useState(null);
  const [score, setScore] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [showReasons, setShowReasons] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get data from navigation state
  const navigationData = location.state;

  // Memoized computed values - optimized calculations
  const currentGrade = useMemo(() => {
    if (reportData?.grade) {
      const apiGrade = GRADES.find(g => g.label === reportData.grade);
      if (apiGrade) return apiGrade;
    }
    
    return GRADES.find(g => score >= g.range[0] && score <= g.range[1]);
  }, [score, reportData?.grade]);

  const inspectionPoints = useMemo(() => {
    return reportData?.inspection_reports_points || 
           reportData?.inspection_points || 
           reportData?.points || 
           [];
  }, [reportData]);

  const { passedPoints, totalPoints } = useMemo(() => {
    const passed = inspectionPoints.filter(p => p.point_passed).length;
    const total = inspectionPoints.length;
    return { passedPoints: passed, totalPoints: total };
  }, [inspectionPoints]);

  // Optimized inspection status calculation
  const getInspectionStatusForSection = useCallback((sectionKey) => {
    if (!inspectionPoints.length) return "neutral";
    
    const sectionPoints = inspectionPoints.filter(point => {
      const serviceId = point.point?.services_id;
      const sectionName = point.point?.section;
      
      const mappedSection = SERVICE_ID_MAP[serviceId];
      
      return mappedSection?.toLowerCase().includes(sectionKey.toLowerCase()) ||
             sectionName?.toLowerCase().includes(sectionKey.toLowerCase());
    });
    
    if (sectionPoints.length === 0) return "neutral";
    
    const passed = sectionPoints.filter(point => point.point_passed).length;
    const total = sectionPoints.length;
    
    if (passed === total) return "success";
    if (passed > total / 2) return "warning";
    return "error";
  }, [inspectionPoints]);

  // Memoized inspections array
  const inspections = useMemo(() => {
    const sections = INSPECTION_SECTIONS.map(section => ({
      ...section,
      status: getInspectionStatusForSection(section.key),
      icon: <section.icon />
    }));
    
    const photoSection = { 
      name: "صور الفحص", 
      status: reportData?.inspection_images ? "success" : "neutral", 
      icon: <FaCamera /> 
    };
    
    return [...sections, photoSection];
  }, [getInspectionStatusForSection, reportData?.inspection_images]);

  // Optimized car info calculation
  const carInfo = useMemo(() => {
    if (!reportData) return { bodyType: "-" };

    const vehicle = vehicleData || reportData.vehicle || reportData.vehicle_data || {};
    
    return {
      image: vehicle.image || vehicle.photo || "/img1.png",
      chassisNumber: vehicle.vin_number || vehicle.chassis_number || reportData.vehicle_id || "-",
      brand: vehicle.manufacturer_id || vehicle.brand || vehicle.make || "-",
      model: vehicle.model || vehicle.model_name || vehicle.vehicle_category || "-",
      title: vehicle.title || vehicle.name || vehicle.description || `${vehicle.vehicle_category || 'سيارة'} ${vehicle.production_year || ''}`,
      reportNumber: reportData.report_number || navigationData?.reportNum || reportData.id || "-",
      licensePlate: vehicle.license_plate_number || "-",
      category: vehicle.vehicle_category || "-",
      year: vehicle.production_year || "-",
      mileage: vehicle.mileage_km ? `${vehicle.mileage_km} KM` : "-",
      color: vehicle.exterior_color || "-",
      engineType: vehicle.engine_capacity_cc ? `${vehicle.engine_capacity_cc} CC` : "-",
      fuelType: vehicle.fuel_type || "-",
      transmission: vehicle.transmission_type || "-",
      drivetrain: vehicle.drivetrain || "-",
      bodyType: vehicle.body_type || "-"
    };
  }, [reportData, vehicleData, navigationData?.reportNum]);

  // Optimized inspection info
  const inspectionInfo = useMemo(() => {
    const status = getInspectionStatus(reportData?.status, score);
    const result = score >= 60 ? "السيارة بحالة جيدة" : "السيارة تحتاج صيانة";
    
    return { status, result };
  }, [reportData?.status, score]);

  // Optimized failure reasons calculation
  const failureReasons = useMemo(() => {
    if (!reportData) return [];
    
    const reasons = reportData.failure_reasons || reportData.data?.failure_reasons || [];
    
    if ((!reasons || reasons.length === 0) && inspectionPoints.length > 0) {
      const failedPoints = inspectionPoints.filter(point => !point.point_passed);
      
      return failedPoints.map(point => ({
        reason: point.point_notes || `فشل في ${point.point?.name_ar || point.point?.name_en || 'نقطة الفحص'}`,
        point: point.point?.name_ar || point.point?.name_en || `نقطة ${point.point_id}`,
        score: `${point.score_achieved || 0}/${point.max_score || 10}`,
        section: point.point?.section || "غير محدد",
        serviceId: point.point?.services_id
      }));
    }
    
    return reasons || [];
  }, [reportData, inspectionPoints]);

  // Optimized API call with better error handling
  useEffect(() => {
    const fetchData = async () => {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        window.location.href = "/login";
        return;
      }

      setLoading(true);
      setError(null);

      // Try to fetch from inspection reports API first
      if (!navigationData?.report && !navigationData?.searchResults) {
        try {
          const response = await axios.get(
            "https://demo.syarahplus.sa/backend/api/users/inspection/reports",
            { headers: { Authorization: `Bearer ${storedToken}` } }
          );
          
          if (response.data?.data && response.data.data.length > 0) {
            const reports = response.data.data;
            // Use the first report or find specific one
            let targetReport = reports[0];
            
            if (navigationData?.reportNum) {
              const foundReport = reports.find(report => 
                report.report_number === navigationData.reportNum
              );
              if (foundReport) {
                targetReport = foundReport;
              }
            }
            
            setReportData(targetReport);
            
            const percentage = targetReport.percentage || 
                              targetReport.percentage_score || 
                              targetReport.total_score || 0;
            setScore(percentage);
            
            if (targetReport.vehicle) {
              setVehicleData(targetReport.vehicle);
            } else if (targetReport.vehicle_id && targetReport.vehicle_id ) {
              try {
                const vehicleResponse = await axios.get(
                  `https://demo.syarahplus.sa/backend/api/users/vehicles/${targetReport.vehicle}`,
                  { headers: { Authorization: `Bearer ${storedToken}` } }
                );
                
                if (vehicleResponse.data?.data) {
                  setVehicleData(vehicleResponse.data.data);
                }
              } catch (vehicleErr) {
                // Continue without vehicle data
              }
            }
            
            setLoading(false);
            return;
          }
        } catch (apiError) {
          // API failed, continue to navigation data
        }
      }

      // Check if we have navigation data (from Report.jsx)
      if (navigationData?.report || navigationData?.searchResults) {
        const navData = navigationData.searchResults || navigationData.report;
        
        if (Array.isArray(navData) && navData.length > 0) {
          let targetReport = navData[0];
          
          if (navigationData.reportNum) {
            const foundReport = navData.find(report => 
              report.report_number === navigationData.reportNum
            );
            if (foundReport) {
              targetReport = foundReport;
            }
          }
          
          setReportData(targetReport);
          
          const percentage = targetReport.percentage || 
                            targetReport.percentage_score || 
                            targetReport.total_score || 0;
          setScore(percentage);
          
          if (targetReport.vehicle) {
            setVehicleData(targetReport.vehicle);
          } else if (targetReport.vehicle_id && targetReport.vehicle_id !== 2) {
            try {
              const vehicleResponse = await axios.get(
                `https://demo.syarahplus.sa/backend/api/users/vehicles/${targetReport.vehicle}`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
              );
              
              if (vehicleResponse.data?.data) {
                setVehicleData(vehicleResponse.data.data);
              }
            } catch (vehicleErr) {
              // Continue without vehicle data
            }
          }
        } else if (navData?.data) {
          const reportData = navData.data;
          const enhancedReportData = {
            ...reportData,
            total_score: navData.total_score,
            max_possible_score: navData.max_possible_score,
            percentage_score: navData.percentage,
            grade: navData.grade,
            failure_reasons: navData.failure_reasons
          };
          
          setReportData(enhancedReportData);
          
          const percentage = navData.percentage || navData.percentage_score || 0;
          setScore(percentage);
          
          if (reportData.vehicle) {
            setVehicleData(reportData.vehicle);
          }
        } else {
          setReportData(navData);
          
          const percentage = navData.percentage || 
                            navData.percentage_score || 
                            navData.total_score || 0;
          setScore(percentage);
          
          if (navData.vehicle) {
            setVehicleData(navData.vehicle);
          }
        }
        
        setLoading(false);
        return;
      }

      setError("يرجى استخدام صفحة البحث للوصول إلى التقارير");
      setLoading(false);
    };

    fetchData();
  }, [navigationData]);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">جاري تحميل بيانات الفحص...</p>
          <p className="text-sm text-gray-500 mt-2">يرجى الانتظار...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center max-w-md mx-4">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  // No data state
  if (!reportData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📋</div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">لا توجد بيانات فحص متاحة</p>
          <p className="text-sm text-gray-500">يرجى التحقق من الاتصال بالخادم</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow">
      <h1 className="text-black dark:text-white text-2xl font-bold mb-6">تقرير فحص السيارة</h1>
      
      <div className="space-y-4">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
                <span className="text-black dark:text-white font-medium">بيانات الفحص</span>
                <FaChevronDown className={`transform transition-transform ${open ? "rotate-180" : ""}`} />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 py-2 bg-white dark:bg-black rounded-b-md border border-t-0 border-gray-200">
                <div className="space-y-6">
                  {/* Car Info Grid */}
                  <CarInfoGrid carInfo={carInfo} />

                  {/* Status Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {/* Gauge Chart */}
                    <GaugeSection 
                      score={score} 
                      currentGrade={currentGrade} 
                      showInfo={showInfo} 
                      setShowInfo={setShowInfo} 
                    />

                    {/* Status Display */}
                    <div className="flex flex-col items-center justify-center p-2 bg-white shadow rounded bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg">
                      <StatusDisplay status={inspectionInfo.status} score={score} />
                      {inspectionInfo.status === "error" && (
                        <button
                          onClick={() => setShowReasons(true)}
                          className="mt-2 text-sm text-red-600 underline hover:text-red-800"
                        >
                          عرض الأسباب
                        </button>
                      )}
                    </div>

                    {/* Market Value */}
                    <div className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg">
                      <img
                        src={image55}
                        alt="car"
                        className="w-20 h-20 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src = "/img1.png";
                        }}
                      />
                      <span className="mt-3 text-lg font-bold">القيمة التسويقية</span>
                    </div>
                  </div>

                  {/* Report Information */}
                  <div className="bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg p-6 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 border-b pb-2 dark:text-white">
                      معلومات التقرير
                    </h2>

                    <div className="grid grid-cols-2 gap-x-8 text-base dark:text-white">
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">التاريخ</span>
                        <span className="font-semibold dark:text-white">{formatDate(reportData.created_at)}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">رقم التقرير</span>
                        <span className="font-semibold dark:text-white">{carInfo.reportNumber}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">نوع الفحص</span>
                        <span className="font-semibold dark:text-white">
                          {reportData.status === 'pending' ? 'في الانتظار' : 'مكتمل'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">النسبة المئوية</span>
                        <span className="font-semibold dark:text-white">{score.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">الدرجة</span>
                        <span className="font-semibold dark:text-white">{reportData?.grade || currentGrade?.label || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">النتيجة الإجمالية</span>
                        <span className="font-semibold dark:text-white">
                          {reportData?.total_score ? `${reportData.total_score.toFixed(1)}/${reportData.max_possible_score}` : '-'}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mt-6 dark:text-white">
                      معلومات المركبة
                    </h2>

                    <div className="grid grid-cols-2 gap-x-8 text-base dark:text-white">
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">النوع</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.body_type || reportData?.vehicle?.body_type || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2 dark:text-white">
                        <span className="text-gray-600 font-semibold">الموديل</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.model || reportData?.vehicle?.model || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">الفئة</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.vehicle_category || reportData?.vehicle?.vehicle_category || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">سنة الصنع</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.production_year || reportData?.vehicle?.production_year || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">سعة المحرك</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.engine_capacity_cc ? `${vehicleData.engine_capacity_cc} CC` : reportData?.vehicle?.engine_capacity_cc ? `${reportData.vehicle.engine_capacity_cc} CC` : '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">العداد الحالي</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.mileage_km ? `${vehicleData.mileage_km} KM` : reportData?.vehicle?.mileage_km ? `${reportData.vehicle.mileage_km} KM` : '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">رقم اللوحة</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.license_plate_number || reportData?.vehicle?.license_plate_number || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">لون السيارة</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.exterior_color || reportData?.vehicle?.exterior_color || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">نوع المحرك</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.fuel_type || reportData?.vehicle?.fuel_type || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">ناقل الحركة</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.transmission_type || reportData?.vehicle?.transmission_type || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">نوع الدفع</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.drivetrain || reportData?.vehicle?.drivetrain || '-'}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600 font-semibold dark:text-white">نوع الهيكل</span>
                        <span className="font-semibold dark:text-white">{vehicleData?.body_type || reportData?.vehicle?.body_type || '-'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">الإضافات</h3>
                    <div className="flex flex-wrap gap-2">
                      {FEATURES.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center border border-red-500 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-white"
                        >
                          <span className="text-gray-700 dark:text-white text-xs mr-1">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inspection Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {inspections.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-3 bg-white dark:bg-black border border-white dark:border-white shadow rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-gray-800">
                          <span className="text-xl text-blue-600">{item.icon}</span>
                          <span className="text-base font-medium dark:text-white">{item.name}</span>
                        </div>
                        <span className={`w-0 h-0 border-l-[10px] border-y-[6px] border-y-transparent ${getStatusColor(item.status)}`}></span>
                      </div>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      {/* Failure Reasons Modal */}
      {showReasons && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-black dark:text-white text-xl font-bold text-red-600">
                {reportData?.failure_reasons === null ? 
                  "أسباب الفشل من النقاط الفاشلة" : 
                  "أسباب الفشل في الفحص"
                }
              </h2>
              <button
                onClick={() => setShowReasons(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FaTimes />
              </button>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
              {failureReasons.length > 0 ? (
                failureReasons.map((item, i) => (
                  <li key={i} className="mb-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    {typeof item === 'string' ? (
                      <span>{item}</span>
                    ) : (
                      <div>
                        <div className="font-semibold text-red-600">{item.point}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{item.reason}</div>
                        {item.score && (
                          <div className="text-xs text-gray-500 mt-1">النتيجة: {item.score}</div>
                        )}
                        {item.section && (
                          <div className="text-xs text-gray-500 mt-1">القسم: {item.section}</div>
                        )}
                      </div>
                    )}
                  </li>
                ))
              ) : (
                <li className="text-gray-500 italic">
                  {reportData?.failure_reasons === null ? 
                    '"failure_reasons": null' : 
                    "لا توجد أسباب محددة للفشل"
                  }
                </li>
              )}
            </ul>
            <button
              onClick={() => setShowReasons(false)}
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportData;