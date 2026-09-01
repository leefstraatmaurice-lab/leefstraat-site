// ── LEEFSTRAAT MAURICE VERDONCKLAAN ──
// Pas hier alles aan en upload naar GitHub
// fb: voeg een Facebook albumlink toe als die beschikbaar is


// ═══════════════════════════════════════════
//  1. SEIZOEN — bepaalt wat er bovenaan staat
// ═══════════════════════════════════════════
// 'bedankt'  → bedanktboodschap + terugblik in de hero
// 'agenda'   → gewone hero met de activiteiten-knop
const SEIZOEN = 'bedankt';


// ═══════════════════════════════════════════
//  2. TERUGBLIK — enkel zichtbaar bij SEIZOEN = 'bedankt'
// ═══════════════════════════════════════════
// ⚠️ PAS DE CIJFERS AAN — dit zijn schattingen
const TERUGBLIK = {
  tag: 'Zomer 2026',
  titel: 'Bedankt,<br><em>buren</em>',
  tekst: 'Drie maanden lang was de Maurice Verdoncklaan geen doorgangsweg maar een plek. ' +
         'Kinderen op straat, stoelen op de kasseien, buren die elkaar eindelijk bij naam kennen. ' +
         'Dat hebben we samen gedaan — bedankt aan iedereen die kwam, hielp, kookte of gewoon bleef plakken.',
  cijfers: [
    { getal: '12',  label: 'weken straat' },
    { getal: '5',   label: 'activiteiten' },
    { getal: '40+', label: 'buren' }
  ],
  knop: { tekst: "Bekijk de foto's →", link: 'fotos.html' },
  // Tweede regel onder de knop — laat leeg ('') om te verbergen
  vervolg: 'En het stopt hier niet: hieronder staat wat er dit najaar op de planning staat.'
};


// ═══════════════════════════════════════════
//  3. VAST MOMENT — kleine regel boven de agenda
// ═══════════════════════════════════════════
// Laat leeg ('') om te verbergen
const VAST_MOMENT = 'Elke eerste zondag van de maand · 16u · straataperitief — iedereen brengt zijn eigen glas en iets kleins.';


// ═══════════════════════════════════════════
//  4. ACTIVITEITEN
// ═══════════════════════════════════════════
// date    : YYYY-MM-DD (verplicht)
// name    : naam van de activiteit (verplicht)
// note    : uur, plaats of korte uitleg (optioneel)
// trekker : wie de datum bewaakt (optioneel — leeg = "Trekker gezocht")
// fb      : Facebook albumlink (optioneel, verschijnt op de fotopagina)
const ACTIVITEITEN = [

  // ── Zomer 2026 ──
  { date: '2026-06-12', name: 'Hot Dogs Party',      note: '17:30', trekker: '', fb: '' },
  { date: '2026-07-11', name: 'Spelletjesavond',     note: '',      trekker: '', fb: '' },
  { date: '2026-08-16', name: 'Koffie & taart',      note: '',      trekker: '', fb: '' },
  { date: '2026-08-29', name: 'BBQ',                 note: '',      trekker: '', fb: '' },
  { date: '2026-08-30', name: 'Afbraak Leefstraat',  note: '',      trekker: '', fb: '' },

  // ── Jaarkalender 2026–2027 ──
  {
    date: '2026-09-20',
    name: 'Startmoment najaar',
    note: 'Zondag 16u · straataperitief + kalender voorstellen. We zoeken per activiteit een trekker.',
    trekker: '',
    fb: ''
  },
  {
    date: '2026-10-17',
    name: 'Klusnamiddag',
    note: 'Zaterdag 14u · plantenbakken winterklaar, bollen poten, straatmeubilair nakijken. Koffie en taart voorzien.',
    trekker: '',
    fb: ''
  },
  {
    date: '2026-10-31',
    name: 'Halloweentocht',
    note: 'Zaterdag 18u · wie meedoet zet een pompoen of lichtje buiten. De kinderen gaan de deuren af.',
    trekker: '',
    fb: ''
  },
  {
    date: '2026-11-22',
    name: 'Soep- & stoofpotdag',
    note: 'Zondag 12u · één grote pot, de rest brengt brood of dessert mee.',
    trekker: '',
    fb: ''
  },
  {
    date: '2026-12-20',
    name: 'Lichtjeswandeling',
    note: 'Zondag 17u30 · kaarsjes of lampionnen aan elke voordeur, korte wandeling door de straat, warme chocomelk op het einde.',
    trekker: '',
    fb: ''
  },
  {
    date: '2027-01-17',
    name: 'Nieuwjaarsdrink',
    note: 'Zondag 16u · nieuwe buren verwelkomen en de plannen voor het voorjaar overlopen.',
    trekker: '',
    fb: ''
  },
  {
    date: '2027-02-20',
    name: 'Quiz- & spelavond',
    note: 'Zaterdag 20u · binnen, bij iemand thuis of in een garage. €2 per persoon voor de drank.',
    trekker: '',
    fb: ''
  },
  {
    date: '2027-03-20',
    name: 'Lenteklus & zaadruil',
    note: 'Zaterdag 14u · bakken opnieuw vullen, zaden en stekken uitwisselen.',
    trekker: '',
    fb: ''
  },
  {
    date: '2027-04-18',
    name: 'Kinderdag op straat',
    note: 'Zondag 14u · krijtparcours, kampen bouwen, fietsrace. Straat één namiddag afgesloten.',
    trekker: '',
    fb: ''
  },
  {
    date: '2027-05-16',
    name: 'Stoepverkoop',
    note: 'Zondag 10u · iedereen zet een tafel voor zijn eigen deur. Geen inschrijving nodig.',
    trekker: '',
    fb: ''
  },
  {
    date: '2027-06-05',
    name: 'Buurt-BBQ & start leefstraat 2027',
    note: 'Zaterdag 17u · het grote moment, en meteen de aftrap van het nieuwe leefstraatseizoen.',
    trekker: '',
    fb: ''
  }
];


// ═══════════════════════════════════════════
//  5. VASTE FACEBOOK ALBUMS (fotopagina)
// ═══════════════════════════════════════════
const VASTE_ALBUMS = [
  {
    name: 'Afscheidsdrink',
    date: '13 jul 2022',
    fb: 'https://www.facebook.com/media/set/?set=oa.1089925041954156&type=3'
  }
];