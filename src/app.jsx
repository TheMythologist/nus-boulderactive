/* app.jsx — shell: router, nav, footer, tweaks */
const { useState: useS, useEffect: useE } = React;
const { Btn: Button, Marker: Mark } = window;

const ROUTES = {
  home: { label: "Home" },
  schedule: { label: "Schedule" },
  rules: { label: "Rules" },
  location: { label: "Location" },
  register: { label: "Register" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "lime",
  "theme": "light",
  "hero": "photo",
  "motion": "full",
  "tracking": 4
}/*EDITMODE-END*/;

function useRoute() {
  const get = () => (location.hash.replace("#/", "") || "home");
  const [route, setRoute] = useS(get());
  useE(() => {
    const on = () => { setRoute(get()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const go = (r) => { location.hash = "#/" + r; };
  return [route, go];
}

function Nav({ route, go }) {
  const [open, setOpen] = useS(false);
  const isActive = (key) => route === key || (key === "schedule" && route === "schedule-full");
  const link = (key) => (
    <a key={key} className={`nav-link ${isActive(key) ? "active" : ""}`}
       href={"#/" + key} onClick={() => setOpen(false)}>{ROUTES[key].label}</a>
  );
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="nav-logo" href="#/home">
          <span className="mark">◎</span>
          <span>BOULDERACTIVE</span>
        </a>
        <div className="nav-links desktop">
          {["home", "schedule", "rules", "location"].map(link)}
          <a className="btn accent sm" href="#/register" style={{ marginLeft: 10 }}>Register <span className="arrow">→</span></a>
        </div>
        <button className="nav-toggle btn ghost sm" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <div className="nav-mobile">
          {["home", "schedule", "rules", "location", "register"].map(link)}
        </div>
      )}
    </nav>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="display d-lg">BOULDER<br/>ACTIVE</h2>
            <p className="footer-blurb">{BA.event.blurb} Pushing limits, conquering fears, building an inclusive climbing community since {BA.event.founded}.</p>
            <a className="btn accent" href="#/register">Register now <span className="arrow">→</span></a>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <span className="tag footer-h">Explore</span>
              {["home", "schedule", "rules", "location", "register"].map((k) => (
                <a key={k} href={"#/" + k} className="footer-link">{ROUTES[k].label}</a>
              ))}
            </div>
            <div className="footer-col">
              <span className="tag footer-h">During the comp</span>
              <a className="footer-link" href={BA.links.liveScores} target="_blank" rel="noopener">Live scores</a>
              <a className="footer-link" href={BA.links.youtube} target="_blank" rel="noopener">YouTube stream</a>
              <a className="footer-link" href={BA.links.photos} target="_blank" rel="noopener">Photo gallery</a>
            </div>
            <div className="footer-col">
              <span className="tag footer-h">Connect</span>
              <a className="footer-link" href={BA.event.instagramUrl} target="_blank" rel="noopener">@{BA.event.instagram}</a>
              <a className="footer-link" href={"mailto:" + BA.event.email}>{BA.event.email}</a>
            </div>
          </div>
        </div>
        <div className="footer-marquee">
          <div className="marquee"><div className="marquee-track">
            {[0,1].map((g)=>(<span key={g} style={{display:"inline-flex"}}>
              <span className="display footer-mq-word">BOULDERACTIVE 2026&nbsp;✦&nbsp;9–11 OCT&nbsp;✦&nbsp;SINGAPORE&nbsp;✦&nbsp;</span>
            </span>))}
          </div></div>
        </div>
        <div className="footer-bottom mono">
          <span>© 2026 NUS BoulderActive. Organised by NUS Climbing Club.</span>
          <span>{BA.event.dates} · {BA.event.city}</span>
        </div>
      </div>
    </footer>
  );
}

function TweakUI({ t, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection label="Hero treatment" />
      <TweakRadio label="Hero" value={t.hero}
        options={["photo", "duo", "type", "kinetic"]}
        onChange={(v) => setTweak("hero", v)} />
      <TweakSection label="Brand" />
      <TweakColor label="Accent" value={t.accent === "lime" ? "#D0F537" : "#012BFC"}
        options={["#D0F537", "#012BFC"]}
        onChange={(v) => setTweak("accent", v === "#D0F537" ? "lime" : "blue")} />
      <TweakRadio label="Theme" value={t.theme} options={["light", "dark"]}
        onChange={(v) => setTweak("theme", v)} />
      <TweakSection label="Feel" />
      <TweakRadio label="Motion" value={t.motion} options={["full", "low"]}
        onChange={(v) => setTweak("motion", v)} />
      <TweakSlider label="Type tightness" value={t.tracking} min={0} max={8} step={1} unit=""
        onChange={(v) => setTweak("tracking", v)} />
    </TweaksPanel>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, go] = useRoute();

  useE(() => {
    const r = document.documentElement;
    r.setAttribute("data-accent", t.accent);
    r.setAttribute("data-theme", t.theme);
    r.setAttribute("data-motion", t.motion);
    r.setAttribute("data-photo", t.hero === "duo" ? "duo" : "bw");
    r.style.setProperty("--tracking", `-${(t.tracking * 0.012).toFixed(3)}em`);
  }, [t]);

  let page;
  if (route === "schedule") page = <SchedulePage go={go} />;
  else if (route === "schedule-full") page = <ScheduleDetailPage go={go} />;
  else if (route === "rules") page = <RulesPage go={go} />;
  else if (route === "location") page = <LocationPage go={go} />;
  else if (route === "register") page = <RegisterPage go={go} />;
  else page = <Home hero={t.hero} go={go} />;

  return (
    <>
      <Nav route={route} go={go} />
      {page}
      {route !== "register" && <Footer go={go} />}
      <TweakUI t={t} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
