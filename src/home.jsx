/* home.jsx - landing page sections */
const { Marker: M, Btn: B, DuoImage: Duo, Reveal: R, Eyebrow: Eye, Marquee: Mq } = window;

/* ---------------------------------------------------------------- HERO */
const HERO_IMAGES = [
  "assets/img/dyno.png",
  "assets/img/overhang.png",
  "assets/img/motion-portrait.png",
  "assets/img/wall-wide.png",
  "assets/img/motion-overhead.png",
];

function HeroCarousel() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (document.documentElement.getAttribute("data-motion") === "low") return;
      setI((p) => (p + 1) % HERO_IMAGES.length);
    }, 4400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-carousel">
      {HERO_IMAGES.map((src, idx) => (
        <div key={src} className={`hero-slide duo grain ${idx === i ? "on" : ""}`} aria-hidden={idx !== i}>
          <img src={src} alt={idx === 0 ? "BoulderActive competition climbing" : ""} loading={idx === 0 ? "eager" : "lazy"} />
        </div>
      ))}
    </div>
  );
}

function HeroPhoto({ go }) {
  return (
    <header className="hero hero-photo">
      <div className="hero-photo-bg">
        <HeroCarousel />
        <div className="hero-photo-scrim" />
      </div>
      <div className="wrap hero-photo-inner">
        <div className="hero-top">
          <M solid>9-11 OCT 2026</M>
          <M>{BA.event.venue}</M>
          <M>SINGAPORE</M>
        </div>
        <h1 className="display d-hero hero-word">BOULDER<br />ACTIVE</h1>
        <div className="hero-foot">
          <p className="lead hero-lead">{BA.event.tagline} Join Singapore's premier bouldering competition.</p>
          <div className="hero-cta">
            <B variant="accent" size="lg" onClick={() => go("register")}>Register now</B>
            <B variant="ghost" href={BA.links.liveScores} target="_blank">Live scores</B>
          </div>
        </div>
      </div>
    </header>);

}

function HeroDuo({ go }) {
  return (
    <header className="hero hero-duo">
      <div className="wrap hero-duo-grid">
        <div className="hero-duo-left">
          <div className="hero-top"><M solid>9-11 OCT 2026</M><M>29TH EDITION</M></div>
          <h1 className="display d-xl">BEYOND<br />LIMITS.</h1>
          <p className="lead">NUS BoulderActive {BA.event.year} - three days of competitive bouldering, {BA.event.venue.toLowerCase()}, {BA.event.city}.</p>
          <div className="hero-cta">
            <B variant="accent" size="lg" onClick={() => go("register")}>Register now</B>
            <B variant="ghost" onClick={() => go("schedule")}>See schedule</B>
          </div>
        </div>
        <div className="hero-duo-right">
          <Duo src="assets/img/overhang.png" alt="Climber on overhang" grain={true} className="hero-duo-img" />
          <span className="hero-duo-badge mono">M4 · START</span>
        </div>
      </div>
    </header>);

}

function HeroType({ go }) {
  return (
    <header className="hero hero-type">
      <div className="wrap">
        <div className="hero-type-top">
          <Eye>NUS Climbing Club · Est. {BA.event.founded}</Eye>
          <span className="mono hero-type-date">9-11 OCT 2026 / {BA.event.city}</span>
        </div>
        <h1 className="display hero-type-word">
          <span>BOULDER</span>
          <span className="outline">ACTIVE</span>
          <span className="hero-type-year">26</span>
        </h1>
        <div className="hero-type-foot">
          <p className="lead">{BA.event.tagline} Singapore's premier bouldering competition returns for its 29th edition.</p>
          <B variant="accent" size="lg" onClick={() => go("register")}>Register now</B>
        </div>
      </div>
    </header>);

}

function HeroKinetic({ go }) {
  const word = <span className="display d-xl kin-word">BOULDERACTIVE&nbsp;<span className="kin-star">✦</span>&nbsp;</span>;
  return (
    <header className="hero hero-kinetic">
      <div className="kin-rows">
        <Mq items={[word, word, word]} className="kin-row" />
        <Mq items={[<span className="display d-xl kin-word outline">2026&nbsp;·&nbsp;9-11 OCT&nbsp;·&nbsp;SINGAPORE&nbsp;·&nbsp;</span>]} className="kin-row rev" />
        <Mq items={[word, word, word]} className="kin-row" />
      </div>
      <div className="wrap kin-center">
        <div className="kin-card">
          <div className="hero-top"><M solid>9-11 OCT 2026</M><M>{BA.event.venue}</M></div>
          <p className="lead">{BA.event.tagline} Join Singapore's premier bouldering competition.</p>
          <div className="hero-cta">
            <B variant="accent" size="lg" onClick={() => go("register")}>Register now</B>
            <B variant="ghost" href={BA.links.liveScores} target="_blank">Live scores</B>
          </div>
        </div>
      </div>
    </header>);

}

function Hero({ variant, go }) {
  if (variant === "duo") return <HeroDuo go={go} />;
  if (variant === "type") return <HeroType go={go} />;
  if (variant === "kinetic") return <HeroKinetic go={go} />;
  return <HeroPhoto go={go} />;
}

/* ---------------------------------------------------------------- COUNTDOWN */
function Countdown() {
  const target = new Date("2026-10-09T09:00:00+08:00").getTime();
  const calc = () => {
    const d = Math.max(0, target - Date.now());
    return { Days: Math.floor(d / 86400000), Hrs: Math.floor(d / 3600000) % 24, Min: Math.floor(d / 60000) % 60, Sec: Math.floor(d / 1000) % 60 };
  };
  const [t, setT] = React.useState(calc());
  React.useEffect(() => {const id = setInterval(() => setT(calc()), 1000);return () => clearInterval(id);}, []);
  const units = ["Days", "Hrs", "Min", "Sec"];
  return (
    <section className="cd-band">
      <div className="cd-grid-tex dotgrid" />
      <div className="wrap cd-inner">
        <div className="cd-head">
          <span className="mono cd-kicker">◎ Countdown to BoulderActive 2026</span>
          <span className="mono cd-date">09 OCT 2026 · 09:00 SGT</span>
        </div>
        <div className="cd-clock">
          {units.map((u, i) =>
          <React.Fragment key={u}>
              <div className="cd-unit">
                <span className="cd-num display">{String(t[u]).padStart(2, "0")}</span>
                <span className="cd-label mono">{u}</span>
              </div>
              {i < units.length - 1 && <span className="cd-colon">:</span>}
            </React.Fragment>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------------------------------------------------------- TICKER */
function Ticker() {
  const item = (t) => <span className="ticker-item mono"><span className="ticker-dot" />{t}</span>;
  const items = [item("3 DAYS"), item("4 CATEGORIES"), item("ALL LEVELS"), item("LIVE SCORING"), item("TEAM EVENT"), item("EST. 1997"), item("IFSC FORMAT FINALS")];
  return <div className="ticker"><Mq items={items} /></div>;
}

/* ---------------------------------------------------------------- VISION */
function Vision() {
  return (
    <section className="section vision" id="about">
      <div className="wrap">
        <div className="vision-head">
          <R><Eye>(01) Our Vision</Eye></R>
          <R delay={60}><h2 className="display d-lg">Beyond limits.<br />Beyond the wall.</h2></R>
        </div>
        <R delay={120}>
          <p className="vision-statement" data-comment-anchor="b266d7431d-p-122-11">
            Since <span className="vs-tag mono">1997</span>, NUS BoulderActive has become Singapore's <span className="vs-hl">premier bouldering competition</span> - bringing climbers of every level together in the spirit of challenge, friendship and growth.
          </p>
        </R>
        <div className="pillars">
          {BA.pillars.map((p, i) =>
          <R key={p.n} delay={i * 80} className="pillar">
              <span className="pillar-n mono">{p.n}</span>
              <h3 className="d-md display">{p.t}</h3>
              <p className="pillar-d">{p.d}</p>
            </R>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------------------------------------------------------- SCHEDULE PREVIEW */
function SchedulePreview({ go }) {
  return (
    <section className="section sched-prev" id="schedule">
      <div className="wrap">
        <div className="sec-head">
          <div><R><Eye>(02) Three Days</Eye></R><R delay={60}><h2 className="display d-lg">The running order.</h2></R></div>
          <R delay={120}><B variant="ghost" onClick={() => go("schedule")}>Schedule details</B></R>
        </div>
        <div className="sched-grid">
          {BA.schedule.map((d, i) =>
          <R key={d.day} delay={i * 90} className="sched-col card">
              <div className="sched-col-head">
                <span className="display d-md">{d.day}</span>
                <M square>{d.wall}</M>
              </div>
              <span className="mono sched-date sched-col-date">{d.date}</span>
              <p className="sched-focus">{d.focus}</p>
              <ul className="sched-rounds">
                {d.rounds.map((r, j) =>
              <li key={j} className="sched-round"><span className="sched-round-dot" />{r}</li>
              )}
              </ul>
            </R>
          )}
        </div>
        <R delay={120}><p className="note mono">See the full day-by-day running order on the <a className="note-link" href="#/schedule-full">schedule page</a>. Timings subject to change closer to the event.</p></R>
      </div>
    </section>);

}

/* ---------------------------------------------------------------- CATEGORIES */
function Categories({ go }) {
  return (
    <section className="section cats">
      <div className="wrap" data-comment-anchor="eec64fe364-div-211-7">
        <div className="sec-head">
          <div><R><Eye>(03) Find your grade</Eye></R><R delay={60}><h2 className="display d-lg">Categories</h2></R></div>
        </div>
        <div className="cat-grid">
          {BA.categories.map((c, i) =>
          <R key={c.code} delay={i * 70} className="cat-card card">
              <div className="cat-top">
                <span className="mono cat-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="mono cat-sub">{c.sub}</span>
              </div>
              <div className="cat-body">
                <h3 className="display cat-name">{c.name}</h3>
                <p className="cat-desc">{c.desc}</p>
              </div>
            </R>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------------------------------------------------------- FORMATS */
function Formats({ go }) {
  return (
    <section className="section formats" id="formats">
      <div className="wrap" data-comment-anchor="dea1e446a6-div-238-7">
        <div className="sec-head">
          <div><R><Eye>(04) How it's climbed</Eye></R><R delay={60}><h2 className="display d-lg">Competition formats</h2></R></div>
          <R delay={120}><B variant="ghost" onClick={() => go("rules")}>Full rules</B></R>
        </div>
        <div className="fmt-grid">
          {BA.formats.map((f, i) =>
          <R key={f.code} delay={i * 70} className="fmt-card card">
              <div className="fmt-head">
                <h3 className="display d-md">{f.code}</h3>
                <M square>{f.time}</M>
              </div>
              <ul className="fmt-rules">
                {f.rules.map((r, j) => <li key={j}><span className="fmt-tick mono">→</span>{r}</li>)}
              </ul>
            </R>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------------------------------------------------------- LIVE BAND */
function LiveBand() {
  return (
    <section className="live-band">
      <div className="wrap live-inner">
        <div className="live-pulse"><span /></div>
        <h2 className="display d-lg">Follow every<br />send live.</h2>
        <p className="lead">Real-time scores on ClimbBuddy across all three days, plus finals streamed live on YouTube.</p>
        <div className="hero-cta">
          <B variant="" href={BA.links.liveScores} target="_blank">Live scores</B>
          <B variant="ghost" href={BA.links.youtube} target="_blank">Watch on YouTube</B>
        </div>
      </div>
    </section>);

}

/* ---------------------------------------------------------------- CTA */
function FinalCTA({ go }) {
  return (
    <section className="section final-cta">
      <div className="wrap final-grid">
        <div className="final-photo">
          <Duo src="assets/img/wall-wide.png" alt="Competition wall" grain={true} />
        </div>
        <div className="final-text">
          <Eye>Registration open</Eye>
          <h2 className="display d-lg">Your spot<br />is waiting.</h2>
          <p className="lead">Lock in your category for BoulderActive 2026 and join Singapore's biggest bouldering weekend.</p>
          <B variant="accent" size="lg" onClick={() => go("register")}>Register now</B>
        </div>
      </div>
    </section>);

}

/* ---------------------------------------------------------------- HOME */
function Home({ hero, go }) {
  return (
    <main>
      <Hero variant={hero} go={go} />
      <Countdown />
      <Ticker />
      <Vision />
      <SchedulePreview go={go} />
      <Categories go={go} />
      <Formats go={go} />
      <LiveBand />
      <FinalCTA go={go} />
    </main>);

}

window.Home = Home;