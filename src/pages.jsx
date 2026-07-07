/* pages.jsx - Schedule, Rules, Location */
const { Marker: Mk, Btn: Bn, DuoImage: Du, Reveal: Rv, Eyebrow: Ey } = window;
const { useState: uS, useEffect: uE } = React;

/* turn a schedule "day" label into a stable anchor id, e.g. "DAY 01" -> "day-01" */
const daySlug = (day) => day.toLowerCase().replace(/\s+/g, "-");

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
      <PageHero kicker="(02) Programme" title="Schedule" sub={`Three days of competition - ${BA.event.dateLong}, ${BA.event.city}.`} />
      <section className="section pt0">
        <div className="wrap">
          <Rv className="sched-soon-cta"><Bn variant="accent" onClick={() => go("schedule-full")}>View full schedule</Bn></Rv>

          <div className="sched-days">
            {BA.schedule.map((d, i) => (
              <Rv key={d.day} delay={i * 80} as="a" href={`#/schedule-full?${daySlug(d.day)}`}
                  className="sched-day-card card is-clickable">
                <div className="sched-day-card-top">
                  <span className="display d-md">{d.day}</span>
                </div>
                <span className="mono sched-date">{d.date}</span>
                <ul className="sched-rounds">
                  {d.rounds.map((r, j) => <li key={j} className="sched-round"><span className="sched-round-dot" />{r}</li>)}
                </ul>
              </Rv>
            ))}
          </div>

          <div className="rules-cta">
            <h3 className="display d-md">Want the minute-by-minute?</h3>
            <Bn variant="accent" onClick={() => go("schedule-full")}>Full running order</Bn>
          </div>
          <p className="note mono">Schedule shape is indicative and subject to change. Final timings confirmed closer to the event.</p>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------- SCHEDULE - FULL DETAIL */
function ScheduleDetailPage({ go }) {
  const [filter, setFilter] = uS("ALL");
  const filterName = (CAT_FILTERS.find((c) => c.code === filter) || {}).name;
  // jump to the day named in the "?day-xx" hash suffix, if any (e.g. from the overview cards)
  uE(() => {
    const id = location.hash.split("?")[1];
    const el = id && document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <main>
      <PageHero kicker="(02) Programme" title="Full schedule" sub={`Day-by-day running order - ${BA.event.dateLong}, ${BA.event.city}.`} />
      <section className="section pt0">
        <div className="wrap">
          <p className="sched-note mono">Timings may be subject to change.</p>

          <div className="filter-row">
            {CAT_FILTERS.map((c) => (
              <button key={c.code} className={`chip ${filter === c.code ? "on" : ""}`} onClick={() => setFilter(c.code)}>{c.name}</button>
            ))}
          </div>

          <div className="sched-full">
            {BA.scheduleDetail.map((d) => {
              const rows = d.rows.filter((r) => filter === "ALL" || r.cat === filter);
              return (
                <div key={d.day} id={daySlug(d.day)} className={`sched-day ${rows.length ? "" : "empty"}`}>
                  <div className="sched-day-head">
                    <span className="display d-md">{d.day}</span>
                    <span className="mono sched-date">{d.date}</span>
                  </div>
                  <div className="sched-day-body">
                    {rows.length
                      ? rows.map((r, j) => (
                          <div key={j} className="sched-row">
                            <span className="mono">{r.time}</span>
                            <span className="sched-evt">{r.evt}</span>
                            {r.cat && <span className="mono sched-cat">{r.cat}</span>}
                          </div>
                        ))
                      : <p className="sched-none mono">No {filterName} sessions on this day.</p>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rules-cta">
            <h3 className="display d-md">Back to the overview.</h3>
            <Bn onClick={() => go("schedule")}>Schedule overview</Bn>
          </div>
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
          <div className="rules-doc-cta">
            <Bn variant="accent" href={BA.links.rules} target="_blank">Read the full Rules &amp; Regulations</Bn>
            <span className="rules-doc-note">The complete BoulderActive 2026 R&amp;R, including category eligibility.</span>
          </div>

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
                ["Isolation", "Competitors enter isolation ahead of their round."],
                ["Eligibility", <>Each category has its own requirements. Register in a category you're ineligible for and you'll be disqualified and moved up a tier. <a href={BA.links.rules} target="_blank" rel="noreferrer">Read the R&amp;R for more details on eligibility</a>.</>],
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
            <Bn variant="accent" href={BA.links.register} target="_blank">Register now</Bn>
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
        <span className="faq-sign mono">{open ? "-" : "+"}</span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? "200px" : "0" }}><p>{a}</p></div>
    </div>
  );
}

/* ---------------------------------------------------------------- LOCATION */
function LocationPage({ go }) {
  return (
    <main>
      <PageHero kicker="(05) Getting there" title="Location" />
      <section className="section pt0">
        <div className="wrap">
          <div className="loc-tba card">
            <div className="loc-tba-grid">
              <div>
                <Mk solid>Venue confirmed</Mk>
                <h2 className="display d-lg loc-tba-title">Boulder+<br/>Chevrons.</h2>
                <p className="lead">{BA.location.note}</p>
                <p className="mono loc-addr">{BA.event.venueAddress}</p>
                <div className="loc-cta"><Bn variant="accent" href={BA.event.mapUrl} target="_blank">Get directions</Bn></div>
              </div>
              <div className="loc-map">
                <iframe src={BA.event.mapEmbedUrl} title="Map of Boulder+ Chevrons, 48 Boon Lay Way, Singapore" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
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

Object.assign(window, { SchedulePage, ScheduleDetailPage, RulesPage, LocationPage });
