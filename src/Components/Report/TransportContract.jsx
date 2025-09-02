import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/TransportContract.css";
import logo from "../../assets/auto-vehicle-repair-service-logo_681672-1437 1.png";

const TransportContract = () => {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [driver, setDriver] = useState(null);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    if (!id) return;

    setTrip(null);
    setVehicle(null);
    setDriver(null);
    setPassengers([]);

    fetch(`https://my-bus.storage-te.com/api/trips/${id}/pdf`)
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          setTrip(result.data?.trip);
          setVehicle(result.data?.vehicle);
          setDriver(result.data?.driver);
          setPassengers(result.data?.trip?.passengers ?? []);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!trip) return <p>⏳ جاري تحميل البيانات...</p>;

  return (
    <>
      {/* الصفحة الأولى */}
      <div className="contract-outer">
        <div className="contract-inner">
          <div className="contract-body">
            {/* الهيدر */}
            <div className="header">
              <div className="logo-box">
                <div className="logo-text">
                  <div>مؤسسة إبداعات العبور للنقليات</div>
                  <div>جوال / ٠٥٥٥٩٨٩٤٠٦</div>
                  <div>المدينة المنورة</div>
                  <div> الرقم الموحد / ٧٠٣٢٢٥٣٤٦</div>
                  <div>الرقم الضريبي ( ٣١١٤٩٦٩١٥٦٠٠٠) </div>
                </div>
              </div>
              <div className="center-title">
                <img src={logo} alt="Logo" className="title-logo" />
                <div className="main-title">أمر تشغيل</div>
                <div className="sub-title">عقد نقل على الطرق البرية</div>
              </div>
              <div className="company-info">
                <div>Obour Creations Transport Est </div>
                <div>MOBILE/ 0555989406</div>
                <div>AL Madinah AL Munawwara </div>
                <div>M.ON / 7032253465</div>
                <div>VAT NO: (311496915600003)</div>
              </div>
            </div>

            <div className="meta-row">
              <div className="contract-row">
                <p>
                  التاريخ / {" "}
                  <span className="red-text">
                    {trip?.departure_time
                      ? new Date(trip?.departure_time).toLocaleDateString("ar-EG")
                      : "غير متوفر"}
                  </span>
                </p>

                <p>
                  رقم الرحلة / <span className="red-text">{trip?.id}</span>
                </p>
                <p>
                  رقم العقد / <span className="red-text">8955601</span>
                </p>
              </div>

              <p>
                تم إبرام هذا العقد بين المتعاقدين بناء على المادة (٣٩) التاسعة والثلاثون من الأنظمة المنظمة لنشاط النقل
                المتخصص وتأجير و توجيه الحافلات وبناء على الفقرة (١) من المادة (٢٩) والتي تنص على ان يجب على الناقل إبرام
                عقد نقل مع الاطراف المحددين في المادة (٤٠) قبل تنفيذ عمليات النقل على الطرق البرية و بما ال يخالف أحكام هذه
                اللائحة و وفقا الآلية التي تحددها هيئة النقل و بناء على ما سبق تم إبرام عقد النقل بين الأطراف الآتية
              </p>
            </div>

            {/* جدول الطرف الأول */}
            <table className="my-table first-party">
              <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "35%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th rowSpan="3" style={{ color: "#3399ff" }}>
                    الطرف الأول
                  </th>
                  <td>مؤسسة إبداعات العبور للنقليات.</td>
                  <th rowSpan="3" style={{ color: "#3399ff" }}>
                    أرقام التواصل
                  </th>
                  <td>0555989406</td>
                </tr>
                <tr>
                  <td>س.ت/ ٧٠٣٢٢٥٣٤٦٥/٤٦٥٠٢٥٢٥٠١</td>
                  <td>---</td>
                </tr>
                <tr>
                  <td>العنوان / السعودية - المدينة المنورة</td>
                  <td>---</td>
                </tr>
              </tbody>
            </table>

            {/* جدول الطرف الثاني */}
            <table className="my-table first-party">
              <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "35%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th rowSpan="3" style={{ color: "#3399ff" }}>
                    الطرف الثاني
                  </th>
                  <td>فندق امجاد الهدا</td>
                  <th rowSpan="3" style={{ color: "#3399ff" }}>
                    أرقام التواصل
                  </th>
                  <td>0556742234</td>
                </tr>
                <tr>
                  <td>س.ت/ ٧٠٣٢٢٥٣٤٦٥/٤٦٥٠٢٥٢٩٠٦</td>
                  <td>0558993875</td>
                </tr>
                <tr>
                  <td>المدينة المنورة المركزية</td>
                  <td>---</td>
                </tr>
              </tbody>
            </table>

            {/* الشروط */}
            <div className="conditions">
              <p>
                اتفق الطرفان على أن ينفذ الطرف الأول عملية النقل للطرف الثاني مع مرافقيه و ذويهم من الموقع المحدد مسبقا من
                الطرف الثاني و توصيلهم إلى الجهة المحددة بالعقد .
              </p>
            </div>

            {/* جدول مسار الرحلة والتاريخ - مطابق للتقسيم المطلوب */}
            <table className="flight-path-table" style={{ width: "100%", borderCollapse: "collapse" }}>
              <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "75%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="fp-head fp-date">DATE#<div className="fp-sub">تاريخ الرحلة</div></th>
                  <th className="fp-head fp-path">FLIGHT PATH#<div className="fp-sub">مسار الرحلة</div></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fp-date-cell">
                    {trip?.departure_time && new Date(trip.departure_time).toLocaleDateString("ar-EG")}
                  </td>
                  <td className="fp-path-cell">
                    <div className="fp-path-wrapper">
                      <span className="fp-start-badge">Start</span>
                      <span className="fp-start-city">{trip?.departure_location}</span>
                      <span className="fp-arrow" aria-hidden> </span>
                      <span className="fp-to">TO/ إلى</span>
                      <span className="fp-finish-city">{trip?.destination_location}</span>
                      <span className="fp-finish-badge">Finish</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* بيانات السيارة */}
            <table className="car-trips" style={{ borderCollapse: "collapse", width: "100%" }}>
              <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>النقل من</th>
                  <th style={{ position: "relative" }}>
                    <span
                      style={{
                        background: "green",
                        color: "white",
                        fontSize: "12px",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        marginRight: "10px",
                        verticalAlign: "middle",
                      }}
                    >
                      Start
                    </span>
                    {trip?.departure_location}
                  </th>
                  <th>وصولا الي</th>
                  <th style={{ position: "relative" }}>
                    <span
                      style={{
                        background: "red",
                        color: "white",
                        fontSize: "12px",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        marginRight: "10px",
                        verticalAlign: "middle",
                      }}
                    >
                      Finish
                    </span>
                    {trip?.destination_location}
                  </th>
                </tr>
              </thead>
            </table>

            {/* الشروط */}
            <div className="conditions">
              <p>
                في حالة الغاء التعاقد لأي سبب شخصي أو أسباب أخرى تتعلق في الحجوزات او الأنظمة تكون سياسة الإلغاء و الاستبدال
              </p>
              <p>
                و في حالة طلب الطرف الثاني الحجز من خلال الموقع الإلكتروني للمؤسسة يعتبر هذا الحجز و موافقه على الشروط و
                الأحكام بالموقع الإلكتروني هو موافقة على هذا العقد لتنفيذ عملية النقل المتفق عليها مع الطرف الأول بواسطة حافلات
                المؤسسة المرخصة و المتوافقة مع الاشتراطات المقدرة من هيئة النقل .
              </p>
            </div>
          </div>
          <div className="wrapper-box">
            <div className="driver-notice-box">
              {/* العمود الأزرق */}
              <div className="side-box">
                <h3>تنبيه للسائق</h3>
                <p>Driver Notice</p>
                <p className="small">للتوزيع لدى السائقين</p>
              </div>

              {/* النصوص */}
              <div className="content-box">
                <span style={{ color: "red", fontWeight: "bold" }}>تنبيه للسائق:</span>
                <span className="arabic" style={{ color: "red", fontWeight: "bold", marginRight: "5px" }}>
                  برجاء الإلتزام بتعليمات الهيئة العامة للنقل و تعليمات المؤسسة، أي مخالفة تعرض السائق للمساءلة.
                </span>
                ,
                <hr />

                <p className="english bold">
                  Please comply with the regulations of the Public Transport Authority and the company’s guidelines. Any
                  violation will lead to accountability. Our goal: Respectfully serving passengers and reflecting a
                  positive image of the Kingdom.Thank you for your cooperation.Ebdaat Al-Obour Transport <br />
                  <span className="company">Edbatat Al-Obour Transport</span>
                </p>
                <hr />
                <p className="urdu">
                  براه کرم پبلک ٹرانسپورٹ اتهارٹی کے قوانين اور ادارے کی ہدايات پر عمل کريں۔ کسی بهی خلاف ورزی کی صورت ميں آپ
                  کو جوابده ٹهہرايا جائے گا۔ ہمارا مقصد: مسافروں کی عزت کے ساته خدمت اور مملکت کی اچهی شبيہ پيش کرنا ہے۔ تعاون
                  کا شکريہ۔ ابداعات العبور ٹرانسپورٹ.
                </p>
              </div>
            </div>
            <div className="image-box">
              <img src="/img6.png" alt="صورة" />
            </div>
          </div>
        </div>
      </div>

      {/* الصفحة الثانية */}
      <div className="contract-outer">
        <div className="contract-inner">
          <div className="contract-body">
            {/* الهيدر مكرر */}
            <div className="header">
              <div className="logo-box">
                <div className="logo-text">
                  <div>مؤسسة إبداعات العبور للنقليات</div>
                  <div>جوال / ٠٥٥٥٩٨٩٤٠٦</div>
                  <div>المدينة المنورة</div>
                  <div> الرقم الموحد / ٧٠٣٢٢٥٣٤٦</div>
                  <div>الرقم الضريبي ( ٣١١٤٩٦٩١٥٦٠٠٠٠) </div>
                </div>
              </div>
              <div className="center-title">
                <img src={logo} alt="Logo" className="title-logo" />
                <div className="main-title">كشف الركاب</div>
              </div>
              <div className="company-info">
                <div>Obour Creations Transport Est </div>
                <div>MOBILE/ 0555989406</div>
                <div>AL Madinah AL Munawwara </div>
                <div>M.ON / 7032253465</div>
                <div>VAT NO: (311496915600003)</div>
              </div>
            </div>

            <table className="VEHICLE-table">
              <thead>
                <tr>
                  <th style={{ backgroundColor: "#fafa04", color: "#040404ff" }}>VEHICLE PLATE#</th>
                  <th style={{ backgroundColor: "#fafa04", color: "#141313ff" }}>VEHICLE MODEL#</th>
                  <th style={{ backgroundColor: "#fafa04", color: "#040404ff" }}>IQAMA#</th>
                  <th style={{ backgroundColor: "#fafa04", color: "#0b0b0bff" }}>MOBILE#</th>
                  <th style={{ backgroundColor: "#fafa04", color: "#060606ff" }}>DRIVER NAME</th>
                </tr>
              </thead>

              <tbody>
                {/* الصف العربي قبل البيانات */}
                <tr>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#060606ff" }}>لوحة المركبة</th>

                  <th style={{ backgroundColor: "#c1d8e5", color: "#060606ff" }}>موديل المركبة</th>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#060606ff" }}>رقم الاقامة</th>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#060606ff" }}>رقم التواصل</th>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#060606ff" }}>اسم سائق الرحلة</th>
                </tr>

                <tr>
                  {/* أول خانة مقسمة داخل td */}
                  <td>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          {/* رقم اللوحة مقسم */}
                          {vehicle?.plate_number?.split("/").map((part, idx) => (
                            <td key={idx} style={{ textAlign: "center", borderRight: "1px solid #000" }}>
                              {part}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* ثاني خانة مقسمة داخل td */}
                  <td>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          <td style={{ borderRight: "1px solid #000", textAlign: "center" }}>{vehicle?.vehicle_model}</td>
                          <td style={{ textAlign: "center" }}>{vehicle?.manufacturing_year}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* باقي الأعمدة بدون تقسيم */}
                  <td>{driver?.driver_profile?.national_id}</td>
                  <td>{driver?.phone}</td>
                  <td>{driver?.name}</td>
                </tr>

                {/* الصف العربي يتكرر بعد البيانات */}
                <tr>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#000" }}>لوحة المركبة</th>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#000" }}>موديل المركبة</th>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#000" }}>رقم الاقامة</th>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#000" }}>رقم التواصل</th>
                  <th style={{ backgroundColor: "#c1d8e5", color: "#000" }}>اسم سائق الرحلة</th>
                </tr>
                <tr>
                  {/* أول خانة مقسمة داخل td */}
                  <td>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          {vehicle?.plate_number?.split("/").map((part, idx) => (
                            <td key={idx} style={{ textAlign: "center", borderRight: "1px solid #000" }}>
                              {part}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* ثاني خانة مقسمة داخل td */}
                  <td>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          <td style={{ borderRight: "1px solid #000", textAlign: "center" }}>{vehicle?.vehicle_model}</td>
                          <td style={{ textAlign: "center" }}>{vehicle?.manufacturing_year}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* باقي الأعمدة بدون تقسيم */}
                  <td>{driver?.driver_profile?.national_id}</td>
                  <td>{driver?.phone}</td>
                  <td>{driver?.name}</td>
                </tr>
              </tbody>
            </table>

            <table className="trip-table" style={{ borderCollapse: "collapse", width: "100%", border: "2px solid #000" }}>
              <thead>
                {/* الهيدر الأساسي بالإنجليزي */}
                <tr>
                  <th style={{ backgroundColor: "#fafa04", color: "#000", padding: "8px", border: "1px solid #000" }} colSpan="3">
                    FLIGHT PATH#
                  </th>
                  <th style={{ backgroundColor: "#fafa04", color: "#000", padding: "8px", border: "1px solid #000" }}>Date</th>
                </tr>

                {/* الهيدر بالعربي */}
                <tr>
                  <th style={{ backgroundColor: "#e4f6f8", color: "black", padding: "8px", border: "1px solid #000" }} colSpan="3">
                    مسار الرحلة
                  </th>
                  <th style={{ backgroundColor: "#e4f6f8", color: "black", padding: "8px", border: "1px solid #000" }}>التاريخ</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {/* Start City */}
                  <td style={{ textAlign: "center", fontWeight: "bold", color: "green", padding: "10px", border: "1px solid #000" }}>
                    <span>{trip?.departure_location}</span>{" "}
                    <span
                      style={{
                        backgroundColor: "#e4f6f8",
                        color: "#155724",
                        fontSize: "11px",
                        fontWeight: "bold",
                        padding: "3px 10px",
                        borderRadius: "999px",
                        marginLeft: "6px",
                        border: "1px solid #155724",
                      }}
                    >
                      Start
                    </span>
                  </td>

                  {/* TO */}
                  <td style={{ textAlign: "center", fontWeight: "bold", background: "black", color: "white", padding: "10px", border: "1px solid #000", width: "80px" }}>
                    TO
                  </td>

                  {/* Finish City */}
                  <td style={{ textAlign: "center", fontWeight: "bold", color: "red", padding: "10px", border: "1px solid #000" }}>
                    <span>{trip?.destination_location}</span>{" "}
                    <span
                      style={{
                        backgroundColor: "#f8d7da",
                        color: "#721c24",
                        fontSize: "11px",
                        fontWeight: "bold",
                        padding: "3px 10px",
                        borderRadius: "999px",
                        marginLeft: "6px",
                        border: "1px solid #721c24",
                      }}
                    >
                      Finish
                    </span>
                  </td>

                  {/* Date */}
                  <td style={{ textAlign: "center", fontWeight: "bold", color: "red", fontSize: "16px", border: "1px solid #000", padding: "10px" }}>
                    {trip?.departure_time && new Date(trip?.departure_time).toLocaleDateString("ar-EG")}
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="passenger-table" style={{ borderCollapse: "collapse", direction: "ltr" }}>
              <thead>
                <tr>
                  <th>SR.NO</th>
                  <th>PASSENGER NAME #</th>
                  <th>PASSENGR IDENTY #</th>
                  <th>NATIONALITY</th>
                </tr>
                <tr>
                  <th>الرقم</th>
                  <th>اسم الراكب</th>
                  <th>رقم الهوية</th>
                  <th>الجنسية</th>
                </tr>
              </thead>
              <tbody>
                {passengers.map((p, i) => (
                  <tr key={p?.id ?? i}>
                    <td>{i + 1}</td>
                    <td>{p?.name}</td>
                    <td>{p?.national_id}</td>
                    <td>{p?.nationality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="header-image">
            <img src="/img4.png" alt="Header" />
          </div>
          <div
            style={{
              backgroundColor: "#ffeb3b",
              color: "red",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "center",
              padding: "10px",
              borderBottom: "3px solid red",
            }}
          >
            علي جميع السائقين الالتزام بتعليمات و توجيهات هيئة النقل و تعليمات مؤسسة ابداعات العبور للنقل
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportContract;

