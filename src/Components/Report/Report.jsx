import React, { useState } from "react";
import { FaCar, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ReportSearch() {
  const [vin, setVin] = useState("");
  const [reportId, setReportId] = useState("");

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
            value={vin}
            onChange={(e) => setVin(e.target.value)}
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
            value={reportId}
            onChange={(e) => setReportId(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-900 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-inner"
          />
        </div>

        {/* لينك بدل الزرار */}
        <Link
          to={`/report-result?vin=${vin}&report=${reportId}`}
          className="px-8 py-4 rounded-xl bg-red-600 text-white font-bold shadow-lg hover:bg-red-700 transform hover:scale-105 transition duration-300 hover:shadow-2xl text-center"
        >
          ابحث 
        </Link>
      </div>
    </div>
  );
}

export default ReportSearch;
