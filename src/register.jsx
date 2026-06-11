/* register.jsx - multi-step registration flow */
const { Marker: Mr, Btn: Bt, Reveal: Rg, Eyebrow: Eb } = window;
const { useState: ust } = React;

const REG_CATS = [
  { code: "NOV", name: "Novice", sub: "First competition energy", genders: true },
  { code: "INT", name: "Intermediate", sub: "Stepping up the grade", genders: true },
  { code: "OPEN", name: "Open", sub: "The sharp end", genders: true },
  { code: "TEAM", name: "Team Event", sub: "Climb for your crew", genders: false },
];
const TEE = ["XS", "S", "M", "L", "XL", "XXL"];
const STEPS = ["Category", "Details", "Review"];

function RegisterPage({ go }) {
  const [step, setStep] = ust(0);
  const [data, setData] = ust({ cat: "", gender: "", name: "", email: "", phone: "", affil: "", tee: "", notes: "", agree: false });
  const [done, setDone] = ust(false);
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const cat = REG_CATS.find((c) => c.code === data.cat);

  const canNext = () => {
    if (step === 0) return data.cat && (!cat.genders || data.gender);
    if (step === 1) return data.name && data.email && data.affil && data.tee && data.agree;
    return true;
  };

  if (done) return <RegSuccess data={data} cat={cat} go={go} />;

  return (
    <main>
      <header className="reg-hero">
        <div className="wrap reg-hero-inner">
          <Eb>Registration · BoulderActive 2026</Eb>
          <h1 className="display d-lg">Secure your spot.</h1>
          <Stepper step={step} />
        </div>
      </header>

      <section className="section pt0">
        <div className="wrap">
          <div className="reg-body">
            {step === 0 && <StepCategory data={data} set={set} cat={cat} />}
            {step === 1 && <StepDetails data={data} set={set} />}
            {step === 2 && <StepReview data={data} cat={cat} />}

            <div className="reg-nav">
              {step > 0
                ? <Bt variant="ghost" arrow={false} onClick={() => setStep(step - 1)}>← Back</Bt>
                : <Bt variant="ghost" arrow={false} onClick={() => go("home")}>← Cancel</Bt>}
              {step < 2
                ? <Bt variant="accent" onClick={() => canNext() && setStep(step + 1)} >Continue</Bt>
                : <Bt variant="accent" onClick={() => setDone(true)}>Confirm registration</Bt>}
            </div>
            {!canNext() && <p className="reg-hint mono">{step === 0 ? "Pick a category to continue" : step === 1 ? "Fill the required fields & accept the terms" : ""}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

function Stepper({ step }) {
  return (
    <div className="stepper">
      {STEPS.map((s, i) => (
        <div key={s} className={`step ${i === step ? "on" : ""} ${i < step ? "done" : ""}`}>
          <span className="step-n mono">{i < step ? "✓" : String(i + 1).padStart(2, "0")}</span>
          <span className="step-label mono">{s}</span>
        </div>
      ))}
    </div>
  );
}

function StepCategory({ data, set, cat }) {
  return (
    <div className="reg-step">
      <h2 className="display d-md reg-q">Which category?</h2>
      <div className="reg-cats">
        {REG_CATS.map((c) => (
          <button key={c.code} className={`reg-cat card ${data.cat === c.code ? "on" : ""}`} onClick={() => { set("cat", c.code); if (!c.genders) set("gender", "Mixed"); else set("gender", ""); }}>
            <span className="display reg-cat-code">{c.code}</span>
            <span className="display d-md reg-cat-name">{c.name}</span>
            <span className="reg-cat-sub">{c.sub}</span>
            <span className={`reg-radio ${data.cat === c.code ? "on" : ""}`} />
          </button>
        ))}
      </div>
      {cat && cat.genders && (
        <div className="reg-gender">
          <span className="tag reg-sub-label">Division</span>
          <div className="seg">
            {["Men", "Women"].map((g) => (
              <button key={g} className={`seg-btn ${data.gender === g ? "on" : ""}`} onClick={() => set("gender", g)}>{g}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children, req }) {
  return (
    <label className="field-wrap">
      <span className="field-label mono">{label}{req && <span className="req">*</span>}</span>
      {children}
    </label>
  );
}

function StepDetails({ data, set }) {
  return (
    <div className="reg-step">
      <h2 className="display d-md reg-q">Your details</h2>
      <div className="reg-form">
        <Field label="Full name" req><input className="field" value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Tan" /></Field>
        <Field label="Email" req><input className="field" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@email.com" /></Field>
        <Field label="Phone"><input className="field" value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+65 ..." /></Field>
        <Field label="University / club" req><input className="field" value={data.affil} onChange={(e) => set("affil", e.target.value)} placeholder="NUS" /></Field>
        <Field label="Event tee size" req>
          <div className="seg tee">
            {TEE.map((t) => <button key={t} className={`seg-btn ${data.tee === t ? "on" : ""}`} onClick={(e) => { e.preventDefault(); set("tee", t); }}>{t}</button>)}
          </div>
        </Field>
        <Field label="Anything we should know? (dietary, accessibility)"><textarea className="field" rows="3" value={data.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Optional" /></Field>
        <label className="reg-agree">
          <input type="checkbox" checked={data.agree} onChange={(e) => set("agree", e.target.checked)} />
          <span>I accept the competition rules and acknowledge the risks of climbing.</span>
        </label>
      </div>
    </div>
  );
}

function StepReview({ data, cat }) {
  const rows = [
    ["Category", `${cat ? cat.name : "-"}${data.gender && data.gender !== "Mixed" ? " · " + data.gender : ""}`],
    ["Name", data.name || "-"],
    ["Email", data.email || "-"],
    ["Phone", data.phone || "-"],
    ["University / club", data.affil || "-"],
    ["Tee size", data.tee || "-"],
    ["Notes", data.notes || "-"],
  ];
  return (
    <div className="reg-step">
      <h2 className="display d-md reg-q">Review & confirm</h2>
      <div className="review card">
        {rows.map(([k, v]) => (
          <div key={k} className="review-row">
            <span className="mono review-k">{k}</span>
            <span className="review-v">{v}</span>
          </div>
        ))}
      </div>
      <p className="note mono">A confirmation and payment link will be sent to your email after you confirm.</p>
    </div>
  );
}

function RegSuccess({ data, cat, go }) {
  return (
    <main className="reg-success">
      <div className="wrap reg-success-inner">
        <Mr solid>Registration received</Mr>
        <h1 className="display d-xl">You're in,<br/>{(data.name || "climber").split(" ")[0]}.</h1>
        <p className="lead">Welcome to BoulderActive 2026. Your spot in <strong>{cat ? cat.name : ""}{data.gender && data.gender !== "Mixed" ? " " + data.gender : ""}</strong> is reserved. Check your inbox for confirmation and next steps.</p>
        <div className="ticket">
          <div className="ticket-l">
            <span className="mono ticket-label">BIB</span>
            <span className="display ticket-bib">{(data.cat || "BA") + "-" + String(Math.floor(100 + Math.random() * 800))}</span>
            <span className="mono">{cat ? cat.name : ""} {data.gender !== "Mixed" ? data.gender : ""}</span>
          </div>
          <div className="ticket-r">
            <span className="mono">{data.name || "-"}</span>
            <span className="mono ticket-dim">{BA.event.dates} · {BA.event.city}</span>
            <span className="mono ticket-dim">{BA.event.venue}</span>
          </div>
        </div>
        <div className="hero-cta">
          <Bt variant="accent" onClick={() => go("schedule")}>View schedule</Bt>
          <Bt variant="ghost" arrow={false} onClick={() => go("home")}>Back home</Bt>
        </div>
      </div>
    </main>
  );
}

window.RegisterPage = RegisterPage;
