export default function TransportOrder() {
  return (
    <div className="page">
      <Header />
      <IntroNotes />
      <Parties />
      <Badges />
      <DeliveryNotes />
      <FooterNotes />
    </div>
  )
}

function Header() {
  return (
    <div className="header">
      <div className="box" style={{ minHeight: 120 }}>
        <div style={{ fontWeight: 700 }}>Obour Creations Transport Est.</div>
        <div className="muted">MOBILE/ 0555989406</div>
        <div className="muted">AL Madinah AL Munawara</div>
        <div className="muted">M.ON / 7032235465</div>
        <div className="muted">VAT NO: (311496915600003)</div>
      </div>
      <div className="box title">
        <div style={{ marginBottom: 6 }}>
          <div className="main-title">أمر تشغيل</div>
          <div className="sub-title">عقد نقل على الطرق البرية</div>
        </div>
        <div className="muted">رقم الرحلة/ 9380001</div>
      </div>
      <div className="box">
        <div className="flex" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="muted">التاريخ</div>
            <div>18/06/2025</div>
          </div>
          <div>
            <div className="muted">رقم العقد</div>
            <div>8955601</div>
          </div>
        </div>
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <span className="qr" aria-label="QR placeholder" />
        </div>
      </div>
    </div>
  )
}

function IntroNotes() {
  return (
    <div className="box" style={{ marginBottom: 10 }}>
      <div className="muted" style={{ lineHeight: 1.7 }}>
        طبقاً لما تم الاتفاق عليه بين الطرفين وطبقاً للمادة (39) الخاصة بالالتزامات في الأنظمة المعتمدة للنقل البري؛
        يلتزم الطرفان بالتقيد بأنظمة ولوائح هيئة النقل. كما يلتزم الطرفان بتأدية الخدمة المتفق عليها بكافة
        تفاصيلها. في حال مخالفة أي من الشروط يطبق على الطرف المخالف الجزاءات الواردة في الأنظمة.
      </div>
    </div>
  )
}

function Parties() {
  return (
    <div className="a4-table" style={{ marginBottom: 10 }}>
      <div style={{ fontWeight: 700 }}>الطرف الأول:</div>
      <div>
        <div style={{ fontWeight: 700 }}>مؤسسة إبداعات العبور للنقليات</div>
        <div className="muted">س.ت/ 7032235465</div>
        <div className="muted">العنوان: المدينة المنورة - السعودية</div>
        <div className="muted">التواصل: 0555989406</div>
      </div>
      <div>
        <div className="muted">رقم النقل</div>
        <div>---</div>
      </div>

      <div style={{ fontWeight: 700 }}>الطرف الثاني:</div>
      <div>
        <div style={{ fontWeight: 700 }}>فندق اجمل الهدا</div>
        <div className="muted">س.ت/ 7007775559</div>
        <div className="muted">الوجهة: المدينة المنورة المركزية</div>
        <div className="muted">التواصل: 0556742234 - 0558993875</div>
      </div>
      <div>
        <div className="muted">جوال</div>
        <div>0556742234</div>
      </div>
    </div>
  )
}

function Badges() {
  return (
    <div className="badges">
      <div className="badge red">Finish</div>
      <div style={{ fontWeight: 700 }}>محافظة الأكحل</div>
      <div className="badge green">Start</div>
    </div>
  )
}

function DeliveryNotes() {
  return (
    <div className="box" style={{ marginTop: 10 }}>
      <div className="muted" style={{ lineHeight: 1.7 }}>
        يلتزم الطرف الأول بتنفيذ عملية النقل للطرف الثاني مع مراقبته، ويتم خصم المبلغ من الطرف الثاني وتسليمهم إلى
        الجهة المحددة وإصدار سندات.
      </div>
    </div>
  )
}

function FooterNotes() {
  return (
    <div className="foot-notes">
      <div>
        - أي حالة إلغاء من العميل لأي شخص أو أشياء تتعلق في الحجوزات أو الأنظمة تتبع سياسة الإلغاء، ولا يتحمل
        الطرف الأول أي مسؤولية.
      </div>
      <div>
        - التعديل والتغيير والحجز في حالة السفر والإلغاء قبل أو في مرحلة لا تقل عن 6 ساعات من وقت التنفيذ.
      </div>
      <div>
        - في حال طلب أحد الطرفين إيقاف الحجز من غير أي سبب مقنع، يتم خصم رسوم الحجز وفق الشروط والأحكام.
      </div>
      <div className="muted" style={{ marginTop: 8 }}>
        الرجاء الالتزام بأنظمة هيئة النقل العام وتعليمات الشركة. شاكرين لكم تعاونكم.
      </div>
    </div>
  )
}

