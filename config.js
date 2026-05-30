// ╔══════════════════════════════════════════════════════════════════╗
// ║  TURNERINGSINSTÄLLNINGAR — Ändra här för nästa turnering!      ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// Den här filen styr allt som är unikt för varje turnering.
// Du behöver BARA ändra i den här filen för att sätta upp en ny cup.
//
// Se setup.html för steg-för-steg-instruktioner.

const CONFIG = {

  // ── Turneringsnamn och klubb ──
  tournamentName: "Örebrocupen",
  year: 2026,
  clubName: "Segeltorps P15",
  subtitle: "17–19 april 2026 • Örebro",
  logo: "logo.png",        // Logotyp-fil (lägg i samma mapp)

  // ── Dagar ──
  // Lägg till eller ta bort dagar. id = kort namn, label = visas i kalendern.
  dates: [
    { id: "fri", label: "Fredag 17 april", date: "2026-04-17" },
    { id: "sat", label: "Lördag 18 april", date: "2026-04-18" },
    { id: "sun", label: "Söndag 19 april", date: "2026-04-19" }
  ],

  // ── Lag ──
  // Du kan ha 1, 2 eller fler lag. Varje lag har:
  //   id       = unikt kort namn (används internt)
  //   name     = visningsnamn
  //   color    = huvudfärg
  //   lightBg  = ljus bakgrund för matchblock
  //   assemblyBg = bakgrund för samlingsblock
  //   textColor = textfärg i block
  teams: [
    {
      id: "blue",
      name: "Lag Blå",
      color: "#2563eb",
      lightBg: "#dbeafe",
      assemblyBg: "#93bbfd",
      textColor: "#1e3a5f",
      // Färg för "Heja på"-block (visas på det ANDRA lagets matcher)
      cheerBg: "#bfdbfe",
      cheerBorder: "#3b82f6"
    },
    {
      id: "white",
      name: "Lag Vit",
      color: "#64748b",
      lightBg: "#f1f5f9",
      assemblyBg: "#cbd5e1",
      textColor: "#334155",
      cheerBg: "#e2e8f0",
      cheerBorder: "#94a3b8"
    }
  ],

  // ── Kalender-vy ──
  timelineStart: 7,      // Kalendern börjar kl 07:00
  timelineEnd: 23,       // Kalendern slutar kl 23:00
  hourHeight: 90,        // Pixelhöjd per timme

  // ── Standardhändelser ──
  // Alla matcher, samlingar och andra händelser som ska vara förifyllda.
  // type = kategori (matchar eventCategories), team = lag-id, day = dag-id,
  // start/end = tid HH:MM, desc = beskrivning
  defaultEvents: [],

  // ── Firebase (för realtidssynk mellan telefoner/datorer) ──
  // Följ instruktionerna i setup.html för att skapa ett Firebase-projekt.
  // Klistra in dina värden här.
  firebase: {
    apiKey: "AIzaSyB3i97Uls9GZkuP3bxHKwZLfqWWqKGIPuU",
    authDomain: "orebrocupen-2026.firebaseapp.com",
    databaseURL: "https://orebrocupen-2026-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "orebrocupen-2026",
    storageBucket: "orebrocupen-2026.firebasestorage.app",
    messagingSenderId: "953715494179",
    appId: "1:953715494179:web:32c96d70ea7c8c215d1096",
    measurementId: "G-6HM3BFTH3J"
  },

  // Rumsnamn — alla som delar samma rumsnamn ser varandras ändringar.
  // Byt till ett nytt namn varje turnering, t.ex. "segeltorps-gothia-2027"
  roomName: "segeltorps-cup-2026",

  // ── Händelsekategorier ──
  // Kategorier med useTeamColor: true färgas efter lagets färger.
  // Övriga har egna fasta färger.
  eventCategories: {
    match:    { label: "Match",    useTeamColor: true, defaultDuration: 40 },
    assembly: { label: "Samling",  useTeamColor: true, dashed: true, opacity: 0.75, defaultDuration: 30 },
    cheer:    { label: "Heja på",  useTeamCheerColor: true, defaultDuration: 40 },
    meal:     { label: "Mat",       color: "#f59e0b", lightBg: "#fef3c7", textColor: "#92400e", defaultDuration: 60 },
    activity: { label: "Aktivitet", color: "#10b981", lightBg: "#d1fae5", textColor: "#065f46", defaultDuration: 60 },
    travel:   { label: "Resa",      color: "#ef4444", lightBg: "#fee2e2", textColor: "#991b1b", defaultDuration: 60 },
    other:    { label: "Övrigt",    color: "#9333ea", lightBg: "#faf5ff", textColor: "#7e22ce", defaultDuration: 60 }
  }
};

// ── Helper: get team by id ──
function getTeam(id) {
  return CONFIG.teams.find(t => t.id === id);
}

// ── Helper: get team name ──
function getTeamName(id) {
  const team = getTeam(id);
  return team ? team.name : id;
}

// ── Helper: build page title ──
function getPageTitle(pageName) {
  return `${pageName} — ${CONFIG.tournamentName} ${CONFIG.year}`;
}

// ── Helper: build header HTML ──
function getHeaderTitle() {
  return `${CONFIG.tournamentName} ${CONFIG.year} — ${CONFIG.clubName}`;
}
