import React from 'react';
import './TransportOrder.css';

function TransportOrder() {
  return (
    <div className="transport-order-page">
      <div className="a4 transport-order" dir="rtl">
        <div className="header">
          <div className="company-info">
            <div>Obour Creations Transport Est.</div>
            <div>MOBILE/ 0555989406</div>
            <div>AL Madinah AL Munawwara</div>
            <div>M.ON / 7302253465</div>
            <div>VAT NO: (311496915600003)</div>
          </div>
          <div className="logo">
            <img src="/car1.png" alt="logo" />
            <div className="doc-title">أمر تشغيل</div>
            <div className="sub-title">عقد نقل على الطرق البرية</div>
          </div>
          <div className="doc-meta">
            <div className="row">
              <span>رقم الرحلة/</span>
              <span>9380001</span>
            </div>
            <div className="row">
              <span>التاريخ/</span>
              <span>18/06/2025</span>
            </div>
            <div className="row">
              <span>رقم العقد/</span>
              <span className="red">8955601</span>
            </div>
            <div className="qr-placeholder" />
          </div>
        </div>

        <div className="notice">
          طبقاً لما ورد في المادة (39) الخاصة بأحكام عقد نقل الأشخاص في اللائحة المنظمة لنشاط نقل الركاب ...
        </div>

        <div className="parties">
          <div className="party">
            <div className="party-title">الطرف الأول:</div>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>الاسم</th>
                  <td>مؤسسة ابداعات العبور للنقلات</td>
                </tr>
                <tr>
                  <th>الجوال</th>
                  <td>0555989406</td>
                </tr>
                <tr>
                  <th>الهوية/السجل</th>
                  <td>٧/٧٣٢٢٥٣٤٦٥ / ب.ت</td>
                </tr>
                <tr>
                  <th>العنوان</th>
                  <td>المدينة المنورة - السعودية</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="party">
            <div className="party-title">الطرف الثاني:</div>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>الاسم</th>
                  <td>فندق اجمل الهدا</td>
                </tr>
                <tr>
                  <th>الجوال</th>
                  <td className="two-phones">
                    <span>0556742234</span>
                    <span>0558993875</span>
                  </td>
                </tr>
                <tr>
                  <th>الوقت</th>
                  <td>س/س/ ٧:٠٠ ؛ ٤:٣٠ ؛ ٠:٥٩:٥٩</td>
                </tr>
                <tr>
                  <th>الوجهة</th>
                  <td>المدينة المنورة المركزية</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="timeline">
          <div className="badge start">Start</div>
          <div className="progress" />
          <div className="badge finish">Finish</div>
        </div>

        <div className="terms">
          <ol>
            <li>
              يلتزم الطرفان على أن ينفذ الطرف الأول عملية النقل للطرف الثاني على النحو المحدد، ويتمم من الموقع المحدد من الطرف الثاني و
              تسليمهم إلى الجهة المطلوبة.
            </li>
            <li>
              في حالة إلغاء الرحلة لأي سبب شخصي أو أسباب تتعلق في الحجوزات أو الأنظمة تكون سياسة الإلغاء ...
            </li>
            <li>
              يحق للطرف الأول وقف الحجز في حالة التأخير عن مرحلة الحجز ...
            </li>
            <li>
              إذا طلب الطرف الثاني إعادة الحجز ... يلتزم الطرف الثاني بسداد رسوم إعادة الحجز.
            </li>
          </ol>
        </div>

        <div className="footer">
          <div className="signatures">
            <div className="sign-box">
              <div>توقيع الطرف الأول</div>
              <div className="box" />
            </div>
            <div className="sign-box">
              <div>توقيع الطرف الثاني</div>
              <div className="box" />
            </div>
          </div>
          <div className="compliance">
            <p>
              Please comply with the regulations of the Public Transport Authority and the company’s guidelines. Any violation
              will lead to accountability.
            </p>
            <p>
              Our goal: Respectfully serving passengers and reflecting a positive image of the Kingdom. Thank you for your
              cooperation. Ebtshat Al-Obour Transport
            </p>
          </div>
        </div>
      </div>

      <div className="no-print print-actions">
        <button onClick={() => window.print()} className="print-btn">طباعة</button>
      </div>
    </div>
  );
}

export default TransportOrder;

