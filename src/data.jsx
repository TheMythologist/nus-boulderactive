/* data.jsx - BoulderActive 2026 content (reuses 2025 structure as realistic placeholder) */

const BA = {
  event: {
    name: "BOULDERACTIVE",
    year: "2026",
    edition: "29th edition",
    dates: "9-11 OCT 2026",
    dateLong: "9-11 October 2026",
    venue: "Boulder+ Chevrons",
    venueAddress: "The Chevrons · 48 Boon Lay Way, Singapore 609961",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Boulder%2B%20Chevrons%2C%2048%20Boon%20Lay%20Way",
    mapEmbedUrl: "https://www.google.com/maps?q=Boulder%2B%20Chevrons%2C%2048%20Boon%20Lay%20Way%2C%20Singapore%20609961&z=16&output=embed",
    city: "Singapore",
    founded: "1997",
    tagline: "Push your limits. Conquer new heights.",
    blurb: "Singapore's premier bouldering competition, organised by the NUS Climbing Club and varsity team.",
    instagram: "nusboulderactive",
    instagramUrl: "https://www.instagram.com/nusboulderactive/",
    email: "boulderactivenus@gmail.com",
  },

  pillars: [
    { n: "01", t: "Competitive Spirit", d: "Challenge yourself against Singapore's best climbers across Novice, Intermediate and Open categories." },
    { n: "02", t: "Inclusive Community", d: "Open to all skill levels, fostering friendship, mutual support and a shared love of the sport." },
    { n: "03", t: "Personal Growth", d: "Push past your limits and discover new heights in your climbing journey." },
  ],

  categories: [
    { code: "NOV", name: "Novice", sub: "Men · Women", desc: "Your first taste of competition climbing - approachable problems, big energy." },
    { code: "INT", name: "Intermediate", sub: "Men · Women", desc: "For climbers ready to step up the grade and the stakes." },
    { code: "OPEN", name: "Open", sub: "Men · Women", desc: "The sharp end - Singapore's strongest go head-to-head." },
    { code: "TEAM", name: "Team Event", sub: "Mixed squads", desc: "Climb for your crew. Collective scores, collective glory." },
  ],

  schedule: [
    { day: "DAY 01", date: "Fri · 9 Oct 2026", wall: "Small Island", focus: "Carnival qualifiers & Novice semi-finals", rounds: ["Novice quals - Men & Women", "Intermediate quals - Men & Women", "Novice semi-finals · Top 20"] },
    { day: "DAY 02", date: "Sat · 10 Oct 2026", wall: "Comp Wall", focus: "Open quals, Inter semis & the Team Event", rounds: ["Open quals - Men & Women", "Intermediate semi-finals · Top 20", "Team Event", "Open semi-finals · Top 20"] },
    { day: "DAY 03", date: "Sun · 11 Oct 2026", wall: "Comp Wall", focus: "Finals & prize presentation", rounds: ["Novice finals · Top 10", "Intermediate finals · Top 8", "Open Women & Men finals · Top 8", "Prize presentation"] },
  ],

  // Day-by-day running order for the full-schedule page. Times are start times;
  // cat codes (NOV/INT/OPEN/TEAM) drive the category filter - "" rows are
  // general items shown only under "All". Condensed from the BA2026 timetable.
  scheduleDetail: [
    {
      day: "DAY 01", date: "Fri · 9 Oct 2026", wall: "Small Island · Carnival qualifiers",
      rows: [
        { time: "08:00", evt: "Registration & call zone opens", cat: "" },
        { time: "10:00", evt: "Novice Men · Qualifiers", cat: "NOV" },
        { time: "13:00", evt: "Novice Women · Qualifiers", cat: "NOV" },
        { time: "14:20", evt: "Intermediate Men · Qualifiers", cat: "INT" },
        { time: "14:40", evt: "Novice Men · Semi-Finals - Top 20", cat: "NOV" },
        { time: "15:00", evt: "Intermediate Women · Qualifiers", cat: "INT" },
        { time: "15:10", evt: "Novice Women · Semi-Finals - Top 20", cat: "NOV" },
      ],
    },
    {
      day: "DAY 02", date: "Sat · 10 Oct 2026", wall: "Comp Wall · Team Event + Open quals / Inter semis",
      rows: [
        { time: "08:00", evt: "Open Men · Qualifiers", cat: "OPEN" },
        { time: "09:00", evt: "Open Women · Qualifiers", cat: "OPEN" },
        { time: "09:00", evt: "Team Event · Seeding round", cat: "TEAM" },
        { time: "11:00", evt: "Intermediate Men · Semi-Final - Top 20", cat: "INT" },
        { time: "11:30", evt: "Intermediate Women · Semi-Final - Top 20", cat: "INT" },
        { time: "12:00", evt: "Team Event", cat: "TEAM" },
        { time: "15:00", evt: "Open Women · Semi-Final - Top 20", cat: "OPEN" },
        { time: "18:00", evt: "Open Men · Semi-Final - Top 20", cat: "OPEN" },
      ],
    },
    {
      day: "DAY 03", date: "Sun · 11 Oct 2026", wall: "Comp Wall · Finals",
      rows: [
        { time: "09:30", evt: "Novice Finals - Top 10", cat: "NOV" },
        { time: "12:00", evt: "Intermediate Finals - Top 8", cat: "INT" },
        { time: "15:00", evt: "Open Women · Final - Top 8", cat: "OPEN" },
        { time: "18:00", evt: "Open Men · Final - Top 8", cat: "OPEN" },
        { time: "19:30", evt: "Prize Presentation", cat: "" },
      ],
    },
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
    { q: "Who can join?", a: "Anyone, but each category has its own rules - Novice is for first-time competitors, Intermediate for developing climbers, and Open welcomes all, including national team athletes. Pick the category you're eligible for; competing in one you're not means disqualification." },
    { q: "Where can I watch?", a: "Finals are streamed live on YouTube, and live scores run on ClimbBuddy throughout all three days." },
  ],

  links: {
    register: "https://nusync.nus.edu.sg/nssc/rsvp_boot?id=380423",
    liveScores: "https://score.climbbuddy.io/",
    youtube: "https://www.youtube.com/playlist?list=PLwYq96iTjrtOetExD61Q-g-jN-YfQVU8A",
    photos: "https://linktr.ee/boulderactive2025",
    feedback: "#",
  },

  location: {
    note: "We're climbing at Boulder+ Chevrons - Singapore's largest bouldering gym, inside The Chevrons clubhouse at 48 Boon Lay Way. Easy to reach from Jurong East and built for a competition crowd.",
    transit: [
      { label: "MRT", lines: ["Jurong East (East-West / North-South Line)", "~10 min walk along Boon Lay Way"] },
      { label: "BUS", lines: ["52 · 99 · 105 · 188 · 502", "Stops 28049 (outside) & 28041 (opposite)"] },
      { label: "CAR", lines: ["Parking on-site at The Chevrons", "Free shuttle from Jurong East & IMM"] },
    ],
  },
};

window.BA = BA;
