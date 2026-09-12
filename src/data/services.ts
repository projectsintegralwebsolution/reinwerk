import { Language } from "../i18n/translations.js";

export interface CleanroomService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  isoRange: string;
  gmpGrades: string;
  icon: string;
  overview: string[];
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesDataDe: CleanroomService[] = [
  {
    id: "modular-cleanrooms",
    slug: "modular-cleanrooms",
    title: "Modulare Reinraumsysteme",
    shortDescription: "Schlüsselfertige Hardwall-, Monobloc- und Kassetten-Wandsysteme für schnelle, saubere Montage und maximale Flexibilität.",
    heroHeadline: "Modulare Reinraumarchitektur der nächsten Generation",
    heroSubheadline: "Höchste deutsche Ingenieurpräzision. Skalierbar, demontierbar und konform nach DIN EN ISO 14644-1 und EU-GMP Annex 1.",
    heroImage: "/images/cleanrooms/modular-suite.jpg",
    isoRange: "ISO-Klasse 3 bis ISO-Klasse 9",
    gmpGrades: "GMP-Grade A, B, C, D",
    icon: "layers",
    overview: [
      "REINWERK plant, fertigt und montiert hochleistungsfähige modulare Reinraumhüllen für anspruchsvolle Kontaminationskontrolle. Unsere Systeme zeichnen sich durch hervorragende thermische Isolation, planebene flächenbündige Fugen und zukunftssichere Erweiterbarkeit aus.",
      "Durch die werkseitige Vorfertigung von bis zu 90 % der Bauteile verkürzen wir die Montagezeit vor Ort um bis zu 50 % im Vergleich zu herkömmlichen Trockenbauweisen – mit minimalen Stillstandszeiten in Ihrer Produktion."
    ],
    keyFeatures: [
      {
        title: "Flächenbündige Architektur",
        description: "Monobloc- und Kassettenpaneele mit komplanaren Sichtfenstern und silikonfreien Trockendichtungen verhindern Partikelablagerungen.",
        icon: "maximize-2"
      },
      {
        title: "Begehbare Deckensysteme",
        description: "Hochbelastbare Rasterdecken für Wartungszugänge, integrierte LED-Reinraumleuchten und Direktaufnahme von Filter-Fan-Units (FFUs).",
        icon: "shield"
      },
      {
        title: "Chemikalien- & VHP-Beständig",
        description: "Oberflächen in HPL, pulverbeschichtetem verzinktem Stahl oder Edelstahl 316L – resistent gegen Begasung mit verdampftem Wasserstoffperoxid.",
        icon: "check-circle"
      },
      {
        title: "Integrierte Medienführung",
        description: "Vorbereitete Installationskanäle für Strom-, Gas-, Daten- und Sensorleitungen sauber im Paneelkern integriert.",
        icon: "cpu"
      }
    ],
    specifications: [
      { label: "Wandkerne", value: "Aluminiumwabe, PIR-Hartschaum oder Mineralwolle A2" },
      { label: "Wandstärken", value: "50 mm / 60 mm / 80 mm / 100 mm Ausführungen" },
      { label: "Oberflächen", value: "Antistatisches HPL, PVDF-Beschichtung oder Edelstahl 304/316L" },
      { label: "Bodenanbindung", value: "Leitfähiger Vinylbelag oder coved Epoxidharzbeschichtung" },
      { label: "Brandschutz", value: "EN 13501-1 Klasse A2-s1,d0 bzw. B-s1,d0" },
      { label: "Dichtheitsklasse", value: "Klasse 4 nach EN 12207 (Druckdifferenzen bis 100 Pa)" }
    ],
    applications: [
      "Biopharmazeutische Produktion",
      "Sterilabfüllung & Compounding",
      "Halbleiter- & Mikrosystemtechnik",
      "Medizintechnik-Montage",
      "Zell- & Gentherapie-Labore"
    ],
    processSteps: [
      { step: "01", title: "Bedarfsanalyse & URS", description: "Ermittlung von Partikelklassen, Druckkaskaden, Materialflüssen und Luftvolumenströmen." },
      { step: "02", title: "3D-BIM-Planung", description: "Kollisionsfreie Modellierung aller Gewerke von Reinraumwand bis Medienverrohrung." },
      { step: "03", title: "Präzisionsfertigung", description: "Industrielle Fertigung der Paneele, Türen und Schleusen unter strenger Qualitätskontrolle." },
      { step: "04", title: "Saubere Vor-Ort-Montage", description: "Schnellbau durch geschulte Reinraummonteure mit minimierter Partikelemission." }
    ],
    faqs: [
      {
        question: "Können modulare Reinräume nachträglich erweitert werden?",
        answer: "Ja. Das nicht-progressive Verbindungssystem ermöglicht es, einzelne Wand- und Deckenelemente ohne Beeinträchtigung angrenzender Zonen umzubauen oder zu erweitern."
      },
      {
        question: "Welche Vorteile bieten modulare Paneele gegenüber Trockenbau?",
        answer: "Modulare Systeme sind werksseitig fertig beschichtet, erzeugen beim Aufbau keinen Gipsstaub, benötigen keine Trocknungszeiten für Farben und sind sofort reinraumgerecht desinfizierbar."
      }
    ]
  },
  {
    id: "hvac-air-handling",
    slug: "hvac-air-handling",
    title: "Reinraum-HVAC & Klimatechnik",
    shortDescription: "Kundenspezifische Lüftungszentralen, HEPA/ULPA H14-U17 Filtration, Differenzdruckkaskaden und mikroklimatische Konditionierung.",
    heroHeadline: "Präzise Reinraum-Klimatechnik & Aerodynamik",
    heroSubheadline: "Laminare und turbulenzarme Luftführung für verlässliche Partikelabfuhr, kontinuierliche Druckdifferenzen und exakte Temperatur- & Feuchtestabilität.",
    heroImage: "/images/cleanrooms/hvac-filtration.jpg",
    isoRange: "ISO-Klasse 1 bis ISO-Klasse 9",
    gmpGrades: "GMP-Grade A, B, C, D",
    icon: "wind",
    overview: [
      "Sichere Kontaminationskontrolle basiert auf kompromissloser aerodynamischer Auslegung. REINWERK plant und integriert schlüsselfertige Reinraum-Lüftungsanlagen, die konstante Über- oder Unterdrücke sowie engste thermohygrometrische Grenzwerte sicherstellen.",
      "Durch elektronisch kommutierte (EC) Ventilatoren, bedarfsgerechte Volumenstromregelung und hocheffiziente Wärmerückgewinnung senken wir den Energiebedarf um bis zu 35 % bei dauerhafter Normtreue 24/7."
    ],
    keyFeatures: [
      {
        title: "Mehrstufige HEPA- & ULPA-Filtration",
        description: "Vorfiltration (ISO ePM1) kombiniert mit endständigen H14-Schwebstofffiltern (99,995 %) und U15-U17-ULPA-Filtern für maximale Abscheidung.",
        icon: "filter"
      },
      {
        title: "Aktive Druckkaskadenregelung",
        description: "Automatische Druckhaltung mit 10 Pa bis 25 Pa Druckstaffelung zwischen angrenzenden Zonen zur Verhinderung von Kreuzkontamination.",
        icon: "activity"
      },
      {
        title: "Präzise Klimakonditionierung",
        description: "Temperaturkonstanz bis ±0,2 °C und relative Feuchteregelung bis ±2 % r.F. für sensible Halbleiter- und Bioprozesse.",
        icon: "thermometer"
      },
      {
        title: "GLT- & Monitoring-Anbindung",
        description: "Lückenlose Erfassung von Luftgeschwindigkeiten, Filterdifferenzdrücken, Raumtemperaturen und Feuchte mit Audit-Trail.",
        icon: "sliders"
      }
    ],
    specifications: [
      { label: "Endfiltration", value: "EN 1822 geprüfte H14 HEPA (99,995 %) oder U15-U17 ULPA (99,99995 %)" },
      { label: "Luftwechselraten", value: "Von 15 bis über 100 Luftwechsel pro Stunde (LW/h) nach ISO-Klasse" },
      { label: "Temperaturregelung", value: "Standard: 20 °C ± 1 °C; Präzisionsoption: bis ± 0,2 °C" },
      { label: "Feuchteregelung", value: "Standard: 45 % ± 5 % r.F.; Entfeuchtungsoptionen bis < 1 % r.F." },
      { label: "Ventilatortechnik", value: "Hocheffiziente EC-Radialventilatoren (Effizienzklasse IE5)" },
      { label: "Schalldruckpegel", value: "< 55 dB(A) im Aufenthaltsbereich durch integrierte Telefonieschalldämpfer" }
    ],
    applications: [
      "Aseptische Abfüllung & Bioprozesse",
      "Wafer-Fertigung & Nanotechnologie",
      "Wirkstoffsynthese & Chemielabore",
      "Präzisionsoptik & Satellitentests",
      "Sterile Arzneimittelzubereitung"
    ],
    processSteps: [
      { step: "01", title: "Thermodynamik & CFD-Simulation", description: "Berechnung von Kühllasten, Luftwechseln und Strömungsmustern im Raum." },
      { step: "02", title: "RLT-Geräteauslegung", description: "Hygienegerechte Klimageräte mit thermisch entkoppelten Gehäusen und Dichtklappen." },
      { step: "03", title: "Luftkanalbau & Dichtheitsprüfung", description: "Airtight-Dichtheitsprüfung der Kanäle nach DIN EN 15727 Dichtheitsklasse C/D." },
      { step: "04", title: "Einregulierung & Strömungsvisualisierung", description: "Geschwindigkeitsabgleich und Rauchstudien zur Bestätigung homogener Strömungen." }
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen laminarer und turbulenter Luftführung?",
        answer: "Laminare Verdrängungsströmung führt Reinstluft in parallelen Bahnen gleichmäßig (meist 0,36 bis 0,45 m/s) über den Prozess (ISO 5 / GMP A). Turbulente Mischlüftung verdünnt die Partikelkonzentration im Raum (ISO 6 bis 8)."
      },
      {
        question: "Wie optimiert REINWERK den Energieverbrauch der Reinraumlüftung?",
        answer: "Durch drehzahlvariable EC-Motoren, automatische Nachtabsenkungen, Enthalpie-Wärmerückgewinnung und bedarfsorientierte Luftmengenregelung minimieren wir die Betriebskosten nachhaltig."
      }
    ]
  },
  {
    id: "cleanroom-equipment",
    slug: "cleanroom-equipment",
    title: "Reinraum-Ausstattung & Schleusentechnik",
    shortDescription: "Dynamische Materialdurchreichen, Personen-Luftduschen, Laminar-Flow-Werkbänke, Interlock-Steuerungen und Schleusenmobiliar.",
    heroHeadline: "Schleusen, Durchreichen & Reinraumausstattung",
    heroSubheadline: "Sichere Barrieren für Personen- und Materialbewegungen. Gefertigt aus Edelstahl 304 und 316L für optimale Desinfizierbarkeit.",
    heroImage: "/images/cleanrooms/equipment-passbox.jpg",
    isoRange: "ISO-Klasse 3 bis ISO-Klasse 8",
    gmpGrades: "GMP-Grade A, B, C, D",
    icon: "box",
    overview: [
      "Über 80 % der Kontaminationen in Reinräumen gelangen über Personal und Materialtransport in die Zonen. REINWERK baut robuste Durchreichen und dynamische Schleusensysteme, die sensible Prozesse vor äußeren Partikeln schützen.",
      "Von Hochgeschwindigkeits-Luftduschen zur Entpartikelung von Arbeitskleidung bis zu aktiven Durchreichen mit H14-Filterung und VHP-Begasungsanschlüssen liefern wir erstklassige Schleusentechnik."
    ],
    keyFeatures: [
      {
        title: "Personen-Luftduschen",
        description: "Hochgeschwindigkeitsdüsen (25-30 m/s) blasen anhaftende Mikropartikel von der Schutzkleidung vor Betreten des Reinraums ab.",
        icon: "wind"
      },
      {
        title: "Dynamische Materialdurchreichen",
        description: "Integrierte HEPA-Umluftfilterung, elektronische elektromagnetische Türverriegelung und Differenzdrucküberwachung.",
        icon: "refresh-cw"
      },
      {
        title: "Laminar-Flow-Arbeitsplätze",
        description: "Horizontale und vertikale Werkbänke zur Bereitstellung lokaler ISO-Klasse-3/4-Bedingungen (GMP Grade A) im Labor.",
        icon: "cpu"
      },
      {
        title: "Schleusenmobiliar aus Edelstahl",
        description: "Überschlagbänke (Step-Over), Reinraum-Garderoben mit aktiver Absaugung und berührungslose Waschbecken.",
        icon: "user-check"
      }
    ],
    specifications: [
      { label: "Materialgüte", value: "Edelstahl 1.4301 (304) oder 1.4404 (316L), elektropoliert (Ra < 0,4 µm)" },
      { label: "Türverriegelung", value: "Elektromagnetische Verriegelung mit Not-Aus-Überbrückung" },
      { label: "Ausblasgeschwindigkeit", value: "25 m/s bis 30 m/s an den justierbaren Düsen" },
      { label: "Filterausstattung", value: "Autarker H14 HEPA-Filter (99,995 %) mit Mini-Pleat-Technologie" },
      { label: "Steuerung", value: "SPS-Steuerung mit Touchscreen-Bedienung und einstellbaren Zykluszeiten" },
      { label: "Einbau", value: "Flächenbündige Integration in REINWERK-Wandpaneele" }
    ],
    applications: [
      "Material- und Personenschleusen (MAL & PAL)",
      "Aseptische Abfüll- und Verpackungslinien",
      "Pharmazeutische Einwaage- und Dosierkabinen",
      "Halbleiter-Wafer-Übergabestationen",
      "Sicherheitslabore BSL-2 und BSL-3"
    ],
    processSteps: [
      { step: "01", title: "Flussanalyse", description: "Strukturierung der Schleusengänge für Personal und Güter zur Vermeidung von Gegenverkehr." },
      { step: "02", title: "Kundenspezifische Maße", description: "Anpassung der Durchreichen an spezifische Behälter, Kassetten oder Wagenmaße." },
      { step: "03", title: "Präzisionsfertigung", description: "Laserschneiden, orbitales Fügen und Oberflächenfinish in hygienegerechtem Edelstahl." },
      { step: "04", title: "Werksabnahme (FAT)", description: "Umfassende Prüfung der Verriegelungszyklen, Luftströme und Filterdichtigkeit vor Auslieferung." }
    ],
    faqs: [
      {
        question: "Was unterscheidet statische von dynamischen Materialdurchreichen?",
        answer: "Statische Durchreichen verfügen lediglich über mechanisch oder elektrisch verriegelte Türen. Dynamische Durchreichen besitzen ein aktives Gebläse mit H14-Filter, das Partikel während des Einschleusens aktiv ausspült."
      },
      {
        question: "Können Durchreichen an VHP-Begasungsanlagen angeschlossen werden?",
        answer: "Ja, REINWERK fertigt gasdichte Durchreichen mit pneumatischen Dichtungen und Stutzen für die Anbindung externer H2O2-Begasungsgeneratoren."
      }
    ]
  },
  {
    id: "validation-maintenance",
    slug: "validation-maintenance",
    title: "Validierung, Messtechnik & Service",
    shortDescription: "Komplette DQ/IQ/OQ/PQ-Qualifizierung, Partikelmessungen, Filterintegritätstests (DEHS/DOP) und Wartungsverträge.",
    heroHeadline: "ISO 14644 & GMP Reinraumqualifizierung & Service",
    heroSubheadline: "Unabhängige, auditkonforme messtechnische Prüfungen für dauerhafte Rechtssicherheit, hohe Anlagenverfügbarkeit und minimale Stillstandszeiten.",
    heroImage: "/images/cleanrooms/validation-testing.jpg",
    isoRange: "ISO-Klasse 1 bis ISO-Klasse 9",
    gmpGrades: "GMP-Grade A, B, C, D",
    icon: "award",
    overview: [
      "Behörden (Regierungspräsidien, FDA, EMA) fordern vor Freigabe jeder Reinraumanlage eine lückenlose Validierungsdokumentation. REINWERK erbringt vollumfängliche Qualifizierungsleistungen nach dem anerkannten GAMP-5-Lebenszyklusmodell.",
      "Unsere zertifizierten Messtechniker führen alle Vor-Ort-Messungen mit kalibrierten High-End-Messgeräten durch und übergeben revisionssichere Qualifizierungsberichte."
    ],
    keyFeatures: [
      {
        title: "Vollständige Qualifizierung (DQ / IQ / OQ / PQ)",
        description: "Strukturierte Protokolle zum Nachweis, dass Bauwerk, RLT-Technik und Komponenten den Anforderungen (URS) entsprechen.",
        icon: "clipboard"
      },
      {
        title: "HEPA- / ULPA-Filterintegritätstest",
        description: "DEHS- / DOP-Aerosolbeaufschlagung und optische Scanprüfung zum Ausschluss von Pinhole-Leckagen in Filtermedium und Dichtsitz.",
        icon: "shield-check"
      },
      {
        title: "Reinraum-Partikelmessung",
        description: "Partikelzählung nach ISO 14644-1:2015 'at rest' und 'in operation' für Partikelgrößen ≥ 0,1 µm, ≥ 0,5 µm und ≥ 5,0 µm.",
        icon: "target"
      },
      {
        title: "Strömungsvisualisierung & Erholzeit",
        description: "Reinstwasser-Rauchstudien zur Dokumentation gerichteter Luftströmungen und Erholzeitmessung (Recovery Test < 15 Min.).",
        icon: "play-circle"
      }
    ],
    specifications: [
      { label: "Prüfnormen", value: "DIN EN ISO 14644-1, 2, 3:2019, EU-GMP Leitfaden Annex 1, VDI 2083" },
      { label: "Messtechnik", value: "NIST-rückführbar kalibrierte optische Partikelzähler, Aerosolgeneratoren und Thermoanemometer" },
      { label: "Prüfaerosol", value: "DEHS (Di-Ethyl-Hexyl-Sebacat) oder Emery 3004 / PAO" },
      { label: "Geschwindigkeitsbereich", value: "0,1 m/s bis 30 m/s mit ± 2 % Messgenauigkeit" },
      { label: "Berichtswesen", value: "Auditkonforme digitale Zertifikate und detaillierte Qualifizierungsdossiers" },
      { label: "Serviceintervalle", value: "Halbjährliche oder jährliche Re-Qualifizierungsverträge nach Vereinbarung" }
    ],
    applications: [
      "Erst-Inbetriebnahme und Übergabe von Neubauprojekten",
      "Zyklische Re-Zertifizierung nach ISO 14644-2",
      "Filterwechsel- und Integritätsbestätigung",
      "Auditvorbereitung für Behördeninspektionen (FDA / EMA / RP)",
      "Fehlersuche bei Partikelanstiegen und Druckabfällen"
    ],
    processSteps: [
      { step: "01", title: "Validierungs-Masterplan (VMP)", description: "Festlegung von Messrastern, Akzeptanzkriterien und Zeitabläufen." },
      { step: "02", title: "Installationsqualifizierung (IQ)", description: "Prüfung auf Übereinstimmung der verbauten Komponenten mit den Planungsunterlagen." },
      { step: "03", title: "Funktionsqualifizierung (OQ)", description: "Messtechnische Prüfung von Luftwechseln, Druckdifferenzen, Temperatur, Feuchte und Filterdichtigkeit." },
      { step: "04", title: "Leistungsqualifizierung (PQ)", description: "Nachweis stabiler Bedingungen unter simulierten oder realen Produktionsbedingungen." }
    ],
    faqs: [
      {
        question: "Wie oft muss ein Reinraum nach ISO 14644 re-zertifiziert werden?",
        answer: "Gemäß ISO 14644-2:2015 muss der Nachweis der Partikelreinheit für ISO-Klassen 6 bis 9 mindestens alle 12 Monate, für ISO-Klasse 5 und reiner mindestens alle 6 Monate erbracht werden."
      },
      {
        question: "Was passiert, wenn ein HEPA-Filter eine Leckage aufweist?",
        answer: "Kleinere Fehlstellen im zulässigen Rahmen können mit FDA-konformen silikonfreien Reinraum-Spezialpasten repariert werden. Bei größeren Beschädigungen tauschen REINWERK-Techniker den Filter direkt vor Ort aus."
      }
    ]
  }
];

export const servicesDataEn: CleanroomService[] = [
  {
    id: "modular-cleanrooms",
    slug: "modular-cleanrooms",
    title: "Modular Cleanroom Systems",
    shortDescription: "Turnkey hardwall, monobloc, and demountable cassette cleanroom structures engineered for swift installation and maximum operational flexibility.",
    heroHeadline: "Next-Generation Modular Cleanroom Architecture",
    heroSubheadline: "Precision-manufactured off-site with German engineering rigor. Scalable, demountable, and compliant with ISO 14644-1 and EU-GMP Annex 1.",
    heroImage: "/images/cleanrooms/modular-suite.jpg",
    isoRange: "ISO Class 3 to ISO Class 9",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "layers",
    overview: [
      "REINWERK designs, fabricates, and installs high-performance modular cleanroom envelopes engineered for critical contamination control. Our modular systems provide superior thermal insulation, seamless flush jointing, and effortless future reconfigurability.",
      "By pre-fabricating up to 90% of architectural elements in our controlled facilities, we reduce on-site installation timelines by up to 50% compared to traditional construction methods—minimizing downtime and facility disruption."
    ],
    keyFeatures: [
      {
        title: "Flush Architectural Surface",
        description: "Monobloc and cassette wall panels with coplanar flush-glazed vision panels and airtight silicone-free dry gasket seams to prevent particle accumulation.",
        icon: "maximize-2"
      },
      {
        title: "Walk-on Ceiling Grids",
        description: "Heavy-duty walkable ceiling grids capable of supporting maintenance personnel, integrated LED tear-drop lighting, and direct-mount Fan Filter Units (FFUs).",
        icon: "shield"
      },
      {
        title: "Chemical & Decontamination Resistant",
        description: "Panel facings available in High-Pressure Laminate (HPL), powder-coated galvanized steel, or 316L stainless steel, fully resistant to Vaporized Hydrogen Peroxide (VHP).",
        icon: "check-circle"
      },
      {
        title: "Integrated Utility Raceways",
        description: "Pre-routed conduits for electrical wiring, process gases, data cables, and sensor lines built seamlessly inside wall cavities.",
        icon: "cpu"
      }
    ],
    specifications: [
      { label: "Standard Wall Core", value: "Aluminum honeycomb, PIR (Polyisocyanurate), or Mineral Wool" },
      { label: "Panel Thickness", value: "50 mm / 60 mm / 80 mm / 100 mm options" },
      { label: "Surface Finishes", value: "Anti-static HPL, PVDF coating, or 304/316L Stainless Steel" },
      { label: "Floor System", value: "Static-dissipative conductive vinyl or coved seamless epoxy" },
      { label: "Fire Resistance", value: "EN 13501-1 Class A2-s1,d0 or B-s1,d0" },
      { label: "Airtightness", value: "Class 4 according to EN 12207 (differential pressure to 100 Pa)" }
    ],
    applications: [
      "Biopharmaceutical Manufacturing",
      "Sterile Compounding Suites",
      "Semiconductor & MEMS Packaging",
      "Medical Device Assembly",
      "Advanced Cell & Gene Therapy"
    ],
    processSteps: [
      { step: "01", title: "Conceptual URS & Layout", description: "Analyzing particle cleanliness criteria, pressure cascades, material transfer flows, and HVAC capacity." },
      { step: "02", title: "3D BIM & Clash Detection", description: "Developing millimeter-accurate digital models coordinating structural, mechanical, electrical, and process piping." },
      { step: "03", title: "Precision Off-site Fabrication", description: "Manufacturing wall panels, ceiling elements, and door interlocks under rigorous quality standards." },
      { step: "04", title: "Rapid Turnkey Erection", description: "Rapid on-site installation by specialized cleanroom technicians with zero dust generation." }
    ],
    faqs: [
      {
        question: "Can modular cleanrooms be relocated or expanded in the future?",
        answer: "Yes. REINWERK modular cleanrooms are designed with non-progressive cassette panel joints, enabling individual walls to be modified, expanded, or relocated without disturbing adjacent zones."
      },
      {
        question: "How does modular construction compare to traditional drywall?",
        answer: "Modular cleanrooms eliminate particulate dust during assembly, cure time for paints, and uneven surfaces. They are 100% factory-finished, chemically inert, and significantly faster to validate."
      }
    ]
  },
  {
    id: "hvac-air-handling",
    slug: "hvac-air-handling",
    title: "Cleanroom HVAC & Precision Air Handling",
    shortDescription: "Custom-engineered air handling units (AHUs), HEPA/ULPA H14-U17 filtration, differential pressure cascades, and climate control.",
    heroHeadline: "Precision Cleanroom HVAC & Microclimate Engineering",
    heroSubheadline: "Engineered laminar and turbulent airflow systems delivering micro-filtered air, continuous pressure differentials, and precise temperature & humidity regulation.",
    heroImage: "/images/cleanrooms/hvac-filtration.jpg",
    isoRange: "ISO Class 1 to ISO Class 9",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "wind",
    overview: [
      "Contamination control begins with flawless aerodynamic engineering. REINWERK designs and integrates turnkey cleanroom HVAC systems that ensure unyielding particle removal, continuous positive/negative differential pressure, and stringent microclimate stability.",
      "Our systems utilize state-of-the-art electronically commutated (EC) fan technology, demand-controlled ventilation (DCV), and high-efficiency heat recovery wheels—reducing energy consumption by up to 35% while maintaining regulatory compliance 24/7."
    ],
    keyFeatures: [
      {
        title: "Multi-Stage HEPA & ULPA Filtration",
        description: "Pre-filtration (ISO Coarse / ePM1) coupled with terminal H14 HEPA (99.995% @ 0.3 µm) and U15-U17 ULPA filters for ultra-critical particle trapping.",
        icon: "filter"
      },
      {
        title: "Differential Pressure Cascades",
        description: "Automated active pressure regulation maintaining 10 Pa to 25 Pa pressure differentials between adjacent classification zones to prevent cross-contamination.",
        icon: "activity"
      },
      {
        title: "Stringent Climate Regulation",
        description: "Precision temperature control down to ±0.2°C and relative humidity regulation down to ±2% RH for sensitive electronic, chemical, and biologics processes.",
        icon: "thermometer"
      },
      {
        title: "Real-time BMS Integration",
        description: "Continuous monitoring of airflow velocities, filter differential pressure (dP), room temperatures, and humidity with automated audit logging.",
        icon: "sliders"
      }
    ],
    specifications: [
      { label: "Terminal Filtration", value: "EN 1822 certified H14 HEPA (99.995%) or U15-U17 ULPA (99.99995%)" },
      { label: "Air Change Rates", value: "From 15 to over 300 Air Changes per Hour (ACH) depending on ISO class" },
      { label: "Temperature Stability", value: "Standard: 20°C ± 1°C; Precision option: ± 0.2°C" },
      { label: "Humidity Stability", value: "Standard: 45% ± 5% RH; Low-dewpoint options to < 1% RH" },
      { label: "Fan Technology", value: "Direct-drive backward curved EC centrifugal blowers (IE5 efficiency)" },
      { label: "Acoustic Levels", value: "< 55 dB(A) in operating room zones via integrated silencers" }
    ],
    applications: [
      "Aseptic Filling & Bio-Processing",
      "Wafer Fabrication & Nanotechnology",
      "API Synthesis & Hazardous Chemical Handling",
      "Optics & Satellite Component Testing",
      "Sterile Injectables Production"
    ],
    processSteps: [
      { step: "01", title: "Thermodynamic & CFD Modeling", description: "Calculating heat loads, air change volumes, and simulating particle dispersion vectors in computational fluid dynamics." },
      { step: "02", title: "AHU & Ductwork Specification", description: "Selecting hygiene-certified air handling units with double-skinned insulated casing and zero-leakage dampers." },
      { step: "03", title: "Ductwork Erection & Leak Testing", description: "Installing airtight stainless or galvanized ductwork sealed to Eurovent Class C/D standards." },
      { step: "04", title: "Air Balancing & Smoke Studies", description: "Balancing air velocities and performing visual airflow smoke testing to verify laminar flow uniformity." }
    ],
    faqs: [
      {
        question: "What is the difference between laminar airflow and turbulent airflow?",
        answer: "Laminar (unidirectional) airflow moves filtered air in parallel streams at uniform velocity (typically 0.36 to 0.45 m/s), sweeping particles directly away from critical zones (e.g. ISO 5 / GMP Grade A). Turbulent (non-unidirectional) airflow mixes conditioned air to dilute particulate concentration (typical in ISO 6 to 8)."
      },
      {
        question: "How does REINWERK optimize cleanroom energy consumption?",
        answer: "Cleanroom HVAC is energy-intensive. We integrate variable-speed EC fans, automated night setback modes, high-efficiency enthalpy heat recovery, and intelligent damper modulation that adjust air volume in real time based on occupancy."
      }
    ]
  },
  {
    id: "cleanroom-equipment",
    slug: "cleanroom-equipment",
    title: "Cleanroom Equipment & Material Airlocks",
    shortDescription: "Dynamic pass-through boxes, decontamination air showers, laminar flow workstations, interlock systems, and gowning furniture.",
    heroHeadline: "Airlocks, Pass-Throughs & Clean Air Equipment",
    heroSubheadline: "Protecting controlled perimeters during personnel and material ingress. Engineered in 304 and 316L stainless steel for effortless sanitization.",
    heroImage: "/images/cleanrooms/equipment-passbox.jpg",
    isoRange: "ISO Class 3 to ISO Class 8",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "box",
    overview: [
      "Over 80% of contamination in cleanroom environments is introduced during the transfer of personnel and materials. REINWERK engineers robust barrier equipment and dynamic airlock systems that isolate critical processes from external particulate contamination.",
      "From high-velocity HEPA air showers that dislodge surface dust to motorized dynamic pass-through hatches with UV-C and VHP ports, our equipment provides unyielding barrier protection."
    ],
    keyFeatures: [
      {
        title: "Personnel Air Showers",
        description: "High-velocity air nozzles (25-30 m/s) delivering filtered air jets to purge micro-particles from cleanroom garments prior to entry.",
        icon: "wind"
      },
      {
        title: "Dynamic Pass-Through Boxes",
        description: "Equipped with internal HEPA recirculation, electronic magnetic door interlocks, differential pressure monitoring, and UV sterilization.",
        icon: "refresh-cw"
      },
      {
        title: "Laminar Flow Workstations",
        description: "Horizontal and vertical clean benches providing localized ISO Class 3/4 (GMP Grade A) operating conditions on standard laboratory benchtops.",
        icon: "cpu"
      },
      {
        title: "Aseptic Gowning Furniture",
        description: "Stainless steel step-over benches, garment storage cabinets with internal HEPA purge, and hands-free touchless wash sinks.",
        icon: "user-check"
      }
    ],
    specifications: [
      { label: "Material Construction", value: "AISI 304 or AISI 316L electro-polished stainless steel (Ra < 0.4 µm)" },
      { label: "Door Interlocking", value: "Fail-safe electromagnetic interlocks with emergency override buttons" },
      { label: "Air Velocity (Air Showers)", value: "25 m/s to 30 m/s across adjustable nozzles" },
      { label: "Internal Filtration", value: "Self-contained H14 HEPA (99.995%) with mini-pleat technology" },
      { label: "Control System", value: "Siemens PLC with touchscreen HMI and customizable cycle timers" },
      { label: "Integration", value: "Flush installation into REINWERK modular wall panels" }
    ],
    applications: [
      "Material Airlocks (MAL) & Personnel Airlocks (PAL)",
      "Sterile Filling & Packaging Lines",
      "Pharmaceutical API Dispensing Booths",
      "Electronic Wafer Transfer Hatches",
      "Biosafety Level 2 and Level 3 Airlocks"
    ],
    processSteps: [
      { step: "01", title: "Flow Pattern Analysis", description: "Mapping personnel gowning routes and material transfer staging points to eliminate cross-contamination risks." },
      { step: "02", title: "Custom Engineering", description: "Sizing pass-through boxes and air showers to accommodate specific tote dimensions, carts, or pallets." },
      { step: "03", title: "Precision Fabrication", description: "Laser cutting, seamless orbital welding, and electro-polishing in sanitary 316L stainless steel." },
      { step: "04", title: "Factory Acceptance Test (FAT)", description: "Rigorous testing of interlock sequences, air velocities, and particle leakage before delivery." }
    ],
    faqs: [
      {
        question: "What is the difference between static and dynamic pass-through boxes?",
        answer: "Static pass boxes have mechanical or magnetic door interlocks without active air filtration, suitable for non-critical transfers between similar cleanliness grades. Dynamic pass boxes feature active HEPA filtration, laminar airflow, and differential pressure to maintain positive pressure and purge particles during door opening."
      },
      {
        question: "Can pass-through boxes accommodate VHP bio-decontamination?",
        answer: "Yes, REINWERK supplies VHP-ready dynamic pass boxes equipped with airtight pneumatic gasket seals, injection/sampling ports, and automated cycle communication with external VHP generators."
      }
    ]
  },
  {
    id: "validation-maintenance",
    slug: "validation-maintenance",
    title: "Validation, Testing & Lifecycle Maintenance",
    shortDescription: "Complete DQ/IQ/OQ/PQ certification, airborne particle counts, filter integrity (DOP/DEHS) testing, and preventative service agreements.",
    heroHeadline: "ISO 14644 & GMP Cleanroom Validation & Servicing",
    heroSubheadline: "Independent, auditable testing and regulatory certification ensuring continuous compliance, operational longevity, and minimal plant downtime.",
    heroImage: "/images/cleanrooms/validation-testing.jpg",
    isoRange: "ISO Class 1 to ISO Class 9",
    gmpGrades: "GMP Grade A, B, C, D",
    icon: "award",
    overview: [
      "Regulatory bodies (FDA, EMA, WHO) demand rigorous validation documentation before any cleanroom can begin commercial production. REINWERK provides comprehensive validation services following the international Good Automated Manufacturing Practice (GAMP 5) lifecycle model.",
      "Our certified cleanroom metrology engineers perform all on-site qualification testing with calibrated state-of-the-art instruments, providing tamper-proof audit-ready documentation and customized preventative maintenance programs."
    ],
    keyFeatures: [
      {
        title: "Complete Qualification (DQ / IQ / OQ / PQ)",
        description: "Structured protocols establishing documented evidence that facilities and systems perform consistently according to User Requirement Specifications (URS).",
        icon: "clipboard"
      },
      {
        title: "HEPA / ULPA Filter Integrity Testing",
        description: "DOP / DEHS aerosol challenge testing and photometer scanning to detect pinhole leaks in filter media, gel seals, and clamping frames.",
        icon: "shield-check"
      },
      {
        title: "Airborne Particle Counting",
        description: "Optical particle counter sampling according to ISO 14644-1:2015 at rest and in operational states for particles ≥0.1 µm, ≥0.5 µm, and ≥5.0 µm.",
        icon: "target"
      },
      {
        title: "Airflow Visualization & Recovery Tests",
        description: "High-purity DI water smoke studies to document unidirectional airflow, turbulence zones, and recovery rate measurements (typically <15 minutes).",
        icon: "play-circle"
      }
    ],
    specifications: [
      { label: "Testing Standard", value: "DIN EN ISO 14644-1, 2, 3:2019, EU-GMP Annex 1, VDI 2083" },
      { label: "Instrumentation", value: "NIST-traceable calibrated optical particle counters, hot-wire anemometers, and aerosol generators" },
      { label: "Aerosol Challenge", value: "DEHS (Di-Ethyl-Hexyl-Sebacat) or Emery 3004 / PAO" },
      { label: "Air Velocity Range", value: "0.1 m/s to 30 m/s with ±2% accuracy" },
      { label: "Report Delivery", value: "GMP-compliant audit-ready digital certificates and comprehensive protocol dossiers" },
      { label: "Service Intervals", value: "Quarterly, bi-annual, or annual re-certification contracts" }
    ],
    applications: [
      "Pre-handover Commissioning of New Cleanrooms",
      "Routine Bi-annual & Annual ISO Re-certification",
      "Post-filter Replacement Integrity Verification",
      "FDA / EMA Regulatory Audit Preparation",
      "Facility Modifications & Troubleshooting"
    ],
    processSteps: [
      { step: "01", title: "Validation Master Plan (VMP)", description: "Defining testing boundaries, sampling grids, acceptance criteria, and qualification schedules." },
      { step: "02", title: "Installation Qualification (IQ)", description: "Verifying that all equipment, ductwork, filter models, and building materials match design specifications." },
      { step: "03", title: "Operational Qualification (OQ)", description: "Testing functional parameters: air change rates, pressure cascades, temperature/humidity control, and filter integrity." },
      { step: "04", title: "Performance Qualification (PQ)", description: "Proving repeatable cleanliness and environmental control under simulated or actual manufacturing loads." }
    ],
    faqs: [
      {
        question: "How often does an ISO 14644 cleanroom need to be re-certified?",
        answer: "According to ISO 14644-2:2015, airborne particle concentration testing should be demonstrated at least once every 12 months for ISO 6 through 9, and at least every 6 months for ISO 5 and cleaner. Filter integrity and differential pressure should be verified continuously or on a scheduled schedule."
      },
      {
        question: "What happens if a HEPA filter fails the aerosol leak test?",
        answer: "If a minor leak is detected, it can often be repaired using FDA-approved silicone-free cleanroom patch sealant within standard surface area allowances. If the leak exceeds permissible limits, REINWERK technicians immediately replace the filter element with a factory-tested replacement."
      }
    ]
  }
];

export function getLocalizedServices(lang: Language = "de"): CleanroomService[] {
  return lang === "en" ? servicesDataEn : servicesDataDe;
}

export const servicesData = servicesDataDe;

export function getServiceBySlug(slug: string, lang: Language = "de"): CleanroomService | undefined {
  const list = getLocalizedServices(lang);
  return list.find(service => service.slug === slug);
}
