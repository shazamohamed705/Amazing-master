import React from "react";
import "./FlightPathTable.css";

function FlightPathTable({
  date = "18/06/2025",
  from = "محافظة الحقل",
  to = "مكة المكرمة",
  startLabel = "Start",
  finishLabel = "Finish",
}) {
  return (
    <div className="flight-wrapper" dir="rtl">
      <table className="flight-table" role="table" aria-label="مسار الرحلة">
        <colgroup>
          <col style={{ width: "240px" }} />
          <col style={{ width: "220px" }} />
          <col style={{ width: "160px" }} />
          <col style={{ width: "220px" }} />
        </colgroup>

        <thead>
          <tr>
            <th className="top en">DATE#</th>
            <th className="top en" colSpan={3}>FLIGHT PATH#</th>
          </tr>
          <tr>
            <th className="sub"><u>تاريخ الرحلة</u></th>
            <th className="sub" colSpan={3}>مسار الرحلة</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="date-value" rowSpan={2}>{date}</td>
            <td className="arrow" colSpan={3}>
              <div className="labels">
                <span className="label label-finish en">{finishLabel}</span>
                <span className="label label-start en">{startLabel}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>{to}</td>
            <td className="to-cell">
              <div>TO/ الى</div>
              <div className="route-red">الرحلة</div>
            </td>
            <td>{from}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FlightPathTable;

