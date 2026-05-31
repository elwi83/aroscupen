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
  tournamentName: "Aroscupen",
  year: 2026,
  clubName: "Stuvsta IF P15-1",
  subtitle: "13–15 juni 2026 • Västerås",
  logo: "logo.png",        // Logotyp-fil (lägg i samma mapp)

  // ── Dagar ──
  // Lägg till eller ta bort dagar. id = kort namn, label = visas i kalendern.
  dates: [
    { id: "sat", label: "Lördag 13 juni", date: "2026-06-13" },
    { id: "sun", label: "Söndag 14 juni", date: "2026-06-14" },
    { id: "mon", label: "Måndag 15 juni", date: "2026-06-15" }
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
      name: "Lag Stuvsta - P15:1A",
      color: "#0F5A22",
      lightBg: "#D4E8D7",
      assemblyBg: "#2F8A3D",
      textColor: "#13401A",
      // Färg för "Heja på"-block (visas på det ANDRA lagets matcher)
      cheerBg: "#BBD9C0",
      cheerBorder: "#4CAF50"
    },
    {
      id: "white",
      name: "Lag Stuvsta - P15:1B",
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
    apiKey: "AIzaSyDbDHpx53Bb3bOHhrtlC9JuRfUwcmnypDc",
    authDomain: "aroscupen-45279.firebaseapp.com",
    databaseURL: "https://aroscupen-45279-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aroscupen-45279",
    storageBucket: "aroscupen-45279.firebasestorage.app",
    messagingSenderId: "218772065424",
    appId: "1:218772065424:web:de7a0c4ed9f61c29c6dc15",
    measurementId: "G-K63JH4YGPN"
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
    activity: { label: "Aktivitet", color: "#2563EB", lightBg: "#dbeafe", textColor: "#1e3a5f", defaultDuration: 60 },
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
