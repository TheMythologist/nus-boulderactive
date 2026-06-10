/* pages.jsx — Schedule, Rules, Location */
const { Marker: Mk, Btn: Bn, DuoImage: Du, Reveal: Rv, Eyebrow: Ey } = window;
const { useState: uS } = React;

function PageHero({ index, title, sub, kicker }) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <Ey>{kicker}</Ey>
        <h1 className="display d-xl page-hero-title">{title}</h1>
        {sub && <p className="lead page-hero-sub">{sub}</p>}
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- SCHEDULE */
const CAT_FILTERS = [
  { code: "ALL", name: "All" },
  { code: "NOV", name: "Novice" },
  { code: "INT", name: "Inter" },
  { code: "OPEN", name: "Open" },
  { code: "TEAM", name: "Team" },
];

function SchedulePage({ go }) {
  return (
    <main>
      <PageHero kicker="(02) Programme" title="Schedule" sub={`Three days of competition — ${BA.event.dateLong}, ${BA.event.city}.`} />
      <section className="section pt0">
        <div className="wrap">
          <div className="sched-soon">
            <Rv><Mk solid>Timings TBA</Mk></Rv>
            <Rv delay={60}><h2 className="display d-xl sched-soon-title">Dropping<br/>soon.</h2></Rv>
            <Rv delay={120}><p className="lead">Three days of head-to-head bouldering across Novice, Intermediate, Open and Team. The full day-by-day running order is locked closer to the date — here's the shape of the weekend.</p></Rv>
          </div>

          <div className="sched-days">
            {BA.schedule.map((d, i) => (
              <Rv key={d.day} delay={i * 80} className="sched-day-card card">
                <div className="sched-day-card-top">
                  <span className="display d-md">{d.day}</span>
                  <Mk square>TBA</Mk>
                </div>
                <span className="mono sched-date">{d.date}</span>
                <p className="sched-focus">{d.focus}</p>
                <ul className="sched-rounds">
                  {d.rounds.map((r, j) => <li key={j} className="sched-round"><span className="sched-round-dot" />{r}</li>)}
                </ul>
              </Rv>
            ))}
          </div>

          <div className="sched-lineup">
            <Rv><Ey>The lineup</Ey></Rv>
            <div className="lineup-grid">
              {BA.categories.map((c, i) => (
                <Rv key={c.code} delay={i * 60} className="lineup-item">
                  <span className="mono lineup-code">{c.code}</span>
                  <div><span className="display d-md lineup-name">{c.name}</span><span className="mono lineup-sub">{c.sub}</span></div>
                </Rv>
              ))}
            </div>
          </div>

          <div className="rules-cta">
            <h3 className="display d-md">Be first to know.</h3>
            <Bn variant="accent" href={BA.event.instagramUrl} target="_blank">Follow @{BA.event.instagram}</Bn>
          </div>
          <p className="note mono">Schedule shape is indicative and subject to change. Final timings confirmed closer to the event.</p>
        </div>
      </section>
    </main>
  );
}

/* ---------------------------------------------------------------- RULES */
function RulesPage({ go }) {
  return (
    <main>
      <PageHero kicker="(04) Rules & Formats" title="Rules & formats" sub="Everything you need to know about how BoulderActive is climbed and scored." />
      <section className="section pt0">
        <div className="wrap">
          <div className="fmt-grid wide">
            {BA.formats.map((f, i) => (
              <Rv key={f.code} delay={i * 60} className="fmt-card card">
                <div className="fmt-head">
                  <h3 className="display d-md">{f.code}</h3>
                  <Mk square>{f.time}</Mk>
                </div>
                <ul className="fmt-rules">
                  {f.rules.map((r, j) => <li key={j}><span className="fmt-tick mono">→</span>{r}</li>)}
                </ul>
              </Rv>
            ))}
          </div>

          <div className="rules-general">
            <Rv><Ey>General rules</Ey></Rv>
            <div className="rules-list">
              {[
                ["Scoring", "Tops and zones are scored with attempts as the tiebreak, following IFSC-style ranking. Live standings update on ClimbBuddy throughout."],
                ["Isolation", "Finalists enter isolation ahead of their round. Observation periods are strictly timed."],
                ["Eligibility", "Open to all. Climbers self-select the category matching their level; organisers may re-seed for fairness."],
                ["Conduct", "Respect the holds, the volunteers and your fellow climbers. Brushing between attempts is encouraged."],
              ].map(([t, d], i) => (
                <Rv key={t} delay={i * 60} className="rule-item">
                  <span className="mono rule-n">{String(i + 1).padStart(2, "0")}</span>
                  <div><h4 className="display d-md rule-t">{t}</h4><p>{d}</p></div>
                </Rv>
              ))}
            </div>
          </div>

          <div className="faq">
            <Rv><Ey>FAQ</Ey></Rv>
            <div className="faq-list">
              {BA.faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} n={i} />)}
            </div>
          </div>

          <div className="rules-cta">
            <h3 className="display d-md">Ready to climb?</h3>
            <Bn variant="accent" onClick={() => go("register")}>Register now</Bn>
          </div>
        </div>
      </section>
    </main>
  );
}

function FaqItem({ q, a, n }) {
  const [open, setOpen] = uS(n === 0);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span className="display d-md">{q}</span>
        <span className="faq-sign mono">{open ? "–" : "+"}</span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? "200px" : "0" }}><p>{a}</p></div>
    </div>
  );
}

/* ---------------------------------------------------------------- LOCATION */
function LocationPage({ go }) {
  const [email, setEmail] = uS("");
  const [sent, setSent] = uS(false);
  return (
    <main>
      <PageHero kicker="(05) Getting there" title="Location" />
      <section className="section pt0">
        <div className="wrap">
          <div className="loc-tba card">
            <div className="loc-tba-grid">
              <div>
                <Mk solid>Venue TBA</Mk>
                <h2 className="display d-lg loc-tba-title">Somewhere<br/>worth climbing to.</h2>
                <p className="lead">{BA.location.note}</p>
                {sent ? (
                  <p className="loc-sent mono">✓ You're on the list — see you in October.</p>
                ) : (
                  <form className="loc-form" onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}>
                    <input className="field" type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Bn variant="accent" arrow={false}>Notify me</Bn>
                  </form>
                )}
              </div>
              <div className="loc-map">
                <div className="loc-map-grid checker" />
                <span className="loc-pin">◎</span>
                <span className="mono loc-map-label">SINGAPORE · 01°21'N 103°49'E</span>
              </div>
            </div>
          </div>

          <div className="transit">
            {BA.location.transit.map((t, i) => (
              <Rv key={t.label} delay={i * 70} className="transit-card card">
                <span className="display d-md transit-label">{t.label}</span>
                <ul>{t.lines.map((l, j) => <li key={j}>{l}</li>)}</ul>
              </Rv>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { SchedulePage, RulesPage, LocationPage });
