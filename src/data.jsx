/* data.jsx — BoulderActive 2026 content (reuses 2025 structure as realistic placeholder) */

const BA = {
  event: {
    name: "BOULDERACTIVE",
    year: "2026",
    edition: "29th edition",
    dates: "9–11 OCT 2026",
    dateLong: "9–11 October 2026",
    venue: "VENUE TBA",
    city: "Singapore",
    founded: "1997",
    tagline: "Push your limits. Conquer new heights.",
    blurb: "Singapore's premier bouldering competition, organised by the NUS Climbing Club.",
    instagram: "nusboulderactive",
    instagramUrl: "https://www.instagram.com/nusboulderactive/",
    email: "boulderactivenus@gmail.com",
  },

  pillars: [
    { n: "01", t: "Competitive Spirit", d: "Challenge yourself against Singapore's best climbers across Novice, Intermediate and Open categories." },
    { n: "02", t: "Inclusive Community", d: "Open to all skill levels, fostering friendship, mutual support and a shared love of the sport." },
    { n: "03", t: "Dynamic Routes", d: "Expertly set problems that test technique, strength, creativity and nerve under pressure." },
    { n: "04", t: "Personal Growth", d: "Push past your limits and discover new heights in your climbing journey." },
  ],

  categories: [
    { code: "NOV", name: "Novice", sub: "Men · Women", desc: "Your first taste of competition climbing — approachable problems, big energy." },
    { code: "INT", name: "Intermediate", sub: "Men · Women", desc: "For climbers ready to step up the grade and the stakes." },
    { code: "OPEN", name: "Open", sub: "Men · Women", desc: "The sharp end — Singapore's strongest go head-to-head." },
    { code: "TEAM", name: "Team Event", sub: "Mixed squads", desc: "Climb for your crew. Collective scores, collective glory." },
  ],

  schedule: [
    { day: "DAY 01", date: "Fri · 9 Oct 2026", focus: "Qualifiers & opening rounds", rounds: ["Novice quals", "Intermediate quals", "Novice semis"] },
    { day: "DAY 02", date: "Sat · 10 Oct 2026", focus: "Semifinals & Team Event", rounds: ["Open quals", "Inter semis", "Open semis", "Team Event"] },
    { day: "DAY 03", date: "Sun · 11 Oct 2026", focus: "Finals", rounds: ["Novice finals", "Intermediate finals", "Open finals"] },
  ],

  formats: [
    { code: "FLASH", time: "19 min / detail", rules: [
      "Demo climb available", "6 problems per competitor", "Same detail enters together",
      "Routes can be viewed beforehand",
    ]},
    { code: "SESSION", time: "30 min / detail", rules: [
      "No demo climb", "5 problems per competitor", "Same detail enters together",
    ]},
    { code: "ROTATION", time: "4 min / route", rules: [
      "No demo climb", "4 problems per competitor", "Sent out in gendered pairs",
      "Routes attempted in a set order", "Cannot view routes beforehand",
    ]},
    { code: "IFSC CONCURRENT", time: "Finals format", rules: [
      "No demo climb", "4 problems per competitor", "Sent out in reverse order",
      "2-min observation period", "1 hour isolation", "Return to isolation between problems",
    ]},
  ],

  faqs: [
    { q: "Who can join?", a: "Anyone — from total beginners in Novice to elite climbers in Open. Pick the category that fits your level." },
    { q: "What's included with registration?", a: "Competition entry for your chosen category, an event tee, and access to the full three-day festival." },
    { q: "Do I need my own gear?", a: "Bring your own climbing shoes and chalk. Everything else — walls, holds, mats — is provided." },
    { q: "Where can I watch?", a: "Finals are streamed live on YouTube, and live scores run on ClimbBuddy throughout all three days." },
  ],

  links: {
    liveScores: "https://score.climbbuddy.io/",
    youtube: "https://www.youtube.com/playlist?list=PLwYq96iTjrtOetExD61Q-g-jN-YfQVU8A",
    photos: "https://linktr.ee/boulderactive2025",
    feedback: "#",
  },

  location: {
    note: "Our 2026 venue will be announced soon. Drop your details and we'll be the first to tell you.",
    transit: [
      { label: "MRT", lines: ["Farrer Park (North-East Line) — 5 min walk", "Little India (NE / Downtown Line)"] },
      { label: "BUS", lines: ["21 · 23 · 64 · 65 · 66 · 67 · 125 · 130", "Stops along Serangoon & Kitchener Road"] },
      { label: "CAR", lines: ["Sheltered parking on-site", "Drop-off at main entrance"] },
    ],
  },
};

window.BA = BA;
