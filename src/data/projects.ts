export interface CleanroomProject {
  id: string;
  slug: string;
  title: string;
  clientSector: string;
  location: string;
  area: string;
  isoClass: string;
  gmpGrade: string;
  completionYear: string;
  thumbnail: string;
  summary: string;
  scopeOfWork: string[];
  results: {
    metric: string;
    label: string;
  }[];
}

export const projectsDataEn: CleanroomProject[] = [
  {
    id: "project-biopharma-suite",
    slug: "biopharma-sterile-fill-finish",
    title: "Biopharmaceutical Aseptic Fill-Finish Suite",
    clientSector: "Pharmaceutical",
    location: "Bavaria, Germany",
    area: "650 m²",
    isoClass: "ISO 5 / ISO 7",
    gmpGrade: "GMP Grade B & C with Grade A RABS",
    completionYear: "2025",
    thumbnail: "/images/cleanrooms/project-biopharma.jpg",
    summary: "Turnkey design, prefabrication, and validation of a multi-room biopharmaceutical filling facility with integrated restricted access barrier systems (RABS) and automated continuous environmental monitoring.",
    scopeOfWork: [
      "Monobloc wall panels with flush-mounted double-glazed vision panels",
      "Ducted HVAC with H14 terminal HEPA filters and 45 air changes/hour (ACH)",
      "Automated pressure cascade system with 15 Pa increments between zones",
      "Dynamic material pass-through airlocks with internal VHP decontamination ports",
      "Full DQ/IQ/OQ/PQ validation protocol dossier complying with EU-GMP Annex 1"
    ],
    results: [
      { metric: "650 m²", label: "Cleanroom Floor Area" },
      { metric: "0 Viable CFU", label: "Baseline Particle Audits" },
      { metric: "< 12 min", label: "Air Cleanliness Recovery Time" },
      { metric: "14 Weeks", label: "Fabrication to IQ Handover" }
    ]
  },
  {
    id: "project-semiconductor-fab",
    slug: "semiconductor-photolithography-lab",
    title: "High-Precision Photolithography Cleanroom",
    clientSector: "Semiconductor",
    location: "Dresden Silicon Saxony, Germany",
    area: "340 m²",
    isoClass: "ISO Class 4 (Class 10)",
    gmpGrade: "N/A",
    completionYear: "2024",
    thumbnail: "/images/cleanrooms/project-semiconductor.jpg",
    summary: "High-performance microelectronics cleanroom engineered for sub-micron photolithography and wafer inspection with perforated raised access floor and active chemical filtration.",
    scopeOfWork: [
      "100% ceiling coverage with low-vibration EC Fan Filter Units (FFUs)",
      "Raised airflow plenum floor with conductive anti-static vinyl tiles (ESD safe)",
      "Precision temperature control (21.0°C ± 0.1°C) and humidity control (45% ± 1.5% RH)",
      "Airborne Molecular Contamination (AMC) chemisorption filters for acid and base vapors",
      "Vibration dampening structural isolation pads for lithography stepper machines"
    ],
    results: [
      { metric: "ISO 4", label: "Certified Particle Cleanliness" },
      { metric: "± 0.1°C", label: "Thermal Stability Margin" },
      { metric: "10^7 Ω", label: "ESD Surface Resistivity" },
      { metric: "99.9995%", label: "U15 ULPA Efficiency" }
    ]
  },
  {
    id: "project-medtech-facility",
    slug: "orthopedic-implant-manufacturing",
    title: "Orthopedic Implant Precision Assembly Plant",
    clientSector: "Medical Device",
    location: "Tuttlingen, Germany",
    area: "480 m²",
    isoClass: "ISO Class 7 (Class 10,000)",
    gmpGrade: "Grade C Compliant",
    completionYear: "2025",
    thumbnail: "/images/cleanrooms/project-medtech.jpg",
    summary: "Controlled environment cleanroom facility for robotic polishing, automated ultrasonic cleaning, and sterile blister packaging of titanium spinal and orthopedic implants.",
    scopeOfWork: [
      "HPL hardwall modular partition system with flush siliconized seams",
      "Cleanroom ceiling with energy-efficient LED tear-drop lighting (1000 lux)",
      "3-stage personnel gowning airlock sequence with step-over benches and sole cleaners",
      "Integrated laminar flow clean benches for manual blister packaging inspection",
      "Complete ISO 13485 and ISO 14644-1:2015 certification"
    ],
    results: [
      { metric: "480 m²", label: "Turnkey Footprint" },
      { metric: "35 ACH", label: "Air Change Rate" },
      { metric: "Zero Defect", label: "MDR Audit Clearance" },
      { metric: "11 Weeks", label: "On-site Build Duration" }
    ]
  },
  {
    id: "project-cell-therapy",
    slug: "cell-gene-therapy-modular-facility",
    title: "Modular Cell & Gene Therapy GMP Laboratory",
    clientSector: "Biotech",
    location: "Basel Region, Switzerland",
    area: "220 m²",
    isoClass: "ISO Class 6 / ISO Class 7",
    gmpGrade: "GMP Grade B Suite",
    completionYear: "2024",
    thumbnail: "/images/cleanrooms/project-celltherapy.jpg",
    summary: "Rapid-deployment modular cleanroom facility designed for autologous cell therapy processing, equipped with biosafety cabinets and independent HVAC zoning.",
    scopeOfWork: [
      "Prefabricated demountable cassette wall panels with antimicrobial powder coating",
      "Dedicated air handling unit with 100% fresh air option and active exhaust filtration",
      "Interlocked magnetic doors with contactless wave sensors and emergency release",
      "Continuous optical particle counter manifold integrated with cleanroom SCADA",
      "Vaporized Hydrogen Peroxide (VHP) resistant construction throughout"
    ],
    results: [
      { metric: "220 m²", label: "Cell Therapy Area" },
      { metric: "GMP Grade B", label: "Certified Environment" },
      { metric: "100%", label: "VHP Cycle Resistance" },
      { metric: "8 Weeks", label: "Fast-Track Deployment" }
    ]
  },
  {
    id: "project-aerospace-optics",
    slug: "satellite-optics-integration-facility",
    title: "High-Bay Satellite Optics Integration Cleanroom",
    clientSector: "Aerospace",
    location: "Friedrichshafen, Germany",
    area: "520 m²",
    isoClass: "ISO Class 5 / ISO Class 6",
    gmpGrade: "N/A",
    completionYear: "2023",
    thumbnail: "/images/cleanrooms/project-aerospace.jpg",
    summary: "Custom high-clearance cleanroom engineered for satellite telescope payload integration with overhead crane rails and zero-outgassing structural envelopes.",
    scopeOfWork: [
      "7.5-meter internal clear height modular steel frame structure",
      "Integrated 5-tonne overhead gantry crane sealed with cleanroom-rated bellow skirts",
      "Low-outgassing panels, non-VOC joint sealants certified to ESA ECSS standards",
      "Laminar flow downflow canopy over primary optical alignment bench",
      "Comprehensive particle and airborne molecular contamination (AMC) monitoring"
    ],
    results: [
      { metric: "7.5 m", label: "Internal Clear Height" },
      { metric: "5 Tonne", label: "Overhead Crane Capacity" },
      { metric: "ISO 5", label: "Target Cleanliness Handover" },
      { metric: "Zero VOC", label: "Surface Outgassing" }
    ]
  }
];

export const projectsDataDe: CleanroomProject[] = [
  {
    id: "project-biopharma-suite",
    slug: "biopharma-sterile-fill-finish",
    title: "Biopharmazeutische Aseptische Abfüllanlage",
    clientSector: "Pharmazeutische Industrie",
    location: "Bayern, Deutschland",
    area: "650 m²",
    isoClass: "ISO 5 / ISO 7",
    gmpGrade: "GMP-Klasse B & C mit Klasse-A-RABS",
    completionYear: "2025",
    thumbnail: "/images/cleanrooms/project-biopharma.jpg",
    summary: "Schlüsselfertige Planung, Vorfertigung und Qualifizierung einer biopharmazeutischen Abfüllanlage mit integrierten Barrieresystemen (RABS) und automatisierter Umgebungsüberwachung.",
    scopeOfWork: [
      "Monoblock-Wandpaneele mit flächenbündig integrierten Isolierglasscheiben",
      "Kanalisiertes HLK-System mit H14-HEPA-Endfiltern und 45 Luftwechseln/Stunde (LW/h)",
      "Automatische Druckkaskadensteuerung mit 15-Pa-Druckstufen zwischen Reinraumzonen",
      "Dynamische Materialschleusen mit VHP-Dekontaminationsanschlüssen",
      "Vollständiges DQ/IQ/OQ/PQ-Qualifizierungsdossier nach EU-GMP-Leitfaden Anhang 1"
    ],
    results: [
      { metric: "650 m²", label: "Reinraum-Nutzfläche" },
      { metric: "0 KBE", label: "Partikel- und Keimaudits" },
      { metric: "< 12 Min.", label: "Erholzeit der Reinraumklasse" },
      { metric: "14 Wochen", label: "Fertigung bis IQ-Übergabe" }
    ]
  },
  {
    id: "project-semiconductor-fab",
    slug: "semiconductor-photolithography-lab",
    title: "Hochpräziser Photolithographie-Reinraum",
    clientSector: "Halbleiter & Mikroelektronik",
    location: "Dresden Silicon Saxony, Deutschland",
    area: "340 m²",
    isoClass: "ISO-Klasse 4 (Klasse 10)",
    gmpGrade: "N/A",
    completionYear: "2024",
    thumbnail: "/images/cleanrooms/project-semiconductor.jpg",
    summary: "Hochleistungs-Mikroelektronik-Reinraum für Submikron-Lithographie und Wafer-Inspektion mit perforiertem Doppelboden und chemischer Luftfiltration.",
    scopeOfWork: [
      "100 % Deckenbelegung mit schwingungsarmen EC-Ventilator-Filter-Einheiten (FFUs)",
      "Plenum-Doppelboden mit ableitfähigen, antistatischen Vinylfliesen (ESD-geschützt)",
      "Präzisionstemperierung (21,0 °C ± 0,1 °C) und Feuchteregelung (45 % ± 1,5 % r.F.)",
      "Chemisorptionsfilter gegen luftgetragene molekulare Verunreinigungen (AMC)",
      "Schwingungsgedämpfte Fundament-Entkopplung für Lithographie-Stepper"
    ],
    results: [
      { metric: "ISO 4", label: "Zertifizierte Reinraumklasse" },
      { metric: "± 0,1 °C", label: "Thermische Langzeitstabilität" },
      { metric: "10^7 Ω", label: "ESD-Oberflächenwiderstand" },
      { metric: "99,9995 %", label: "U15-ULPA-Abscheidegrad" }
    ]
  },
  {
    id: "project-medtech-facility",
    slug: "orthopedic-implant-manufacturing",
    title: "Präzisionsfertigung für orthopädische Implantate",
    clientSector: "Medizintechnik",
    location: "Tuttlingen, Deutschland",
    area: "480 m²",
    isoClass: "ISO-Klasse 7 (Klasse 10.000)",
    gmpGrade: "GMP-Klasse C konform",
    completionYear: "2025",
    thumbnail: "/images/cleanrooms/project-medtech.jpg",
    summary: "Kontrollierte Reinraumumgebung für robotergestütztes Polieren, Ultraschallreinigung und sterile Blisterverpackung von Titan- und Wirbelsäulenimplantaten.",
    scopeOfWork: [
      "HPL-Hartwand-Modulwand-System mit flächenbündig silikonisierten Fugen",
      "Reinraumdecke mit energieeffizienten LED-Tropfenleuchten (1000 Lux)",
      "3-stufige Personalschleusenkaskade mit Übersteigbänken und Sohlenreinigern",
      "Integrierte Laminar-Flow-Reinstraumarbeitsplätze zur visuellen Blisterprüfung",
      "Vollständige Zertifizierung nach ISO 13485 und DIN EN ISO 14644-1:2015"
    ],
    results: [
      { metric: "480 m²", label: "Schlüsselfertige Gesamtfläche" },
      { metric: "35 LW/h", label: "Luftwechselrate" },
      { metric: "Null Fehler", label: "MDR-Audit-Freigabe" },
      { metric: "11 Wochen", label: "Bauzeit vor Ort" }
    ]
  },
  {
    id: "project-cell-therapy",
    slug: "cell-gene-therapy-modular-facility",
    title: "Modulares Zell- & Gentherapie GMP-Labor",
    clientSector: "Biotechnologie",
    location: "Region Basel, Schweiz",
    area: "220 m²",
    isoClass: "ISO-Klasse 6 / ISO-Klasse 7",
    gmpGrade: "GMP-Klasse B Suite",
    completionYear: "2024",
    thumbnail: "/images/cleanrooms/project-celltherapy.jpg",
    summary: "Modulare Reinraumanlage zur schnellen Inbetriebnahme für autologe Zelltherapie-Prozesse mit integrierten Sicherheitswerkbänken und unabhängiger Zonen-HLK.",
    scopeOfWork: [
      "Vorgefertigte, demontierbare Kassettenwandpaneele mit antimikrobieller Pulverbeschichtung",
      "Eigenständiges Lüftungsgerät mit 100 % Frischluftbetrieb und aktiver Abluftfiltration",
      "Verriegelte Magnetschiebetüren mit berührungslosen Sensoren und Notentriegelung",
      "Kontinuierliche optische Partikelmessung mit Anbindung an das Reinraum-Leitsystem",
      "Vollständige H2O2-Begasungsbeständigkeit (VHP-Resistenz) aller Oberflächen"
    ],
    results: [
      { metric: "220 m²", label: "Zelltherapie-Reinraumfläche" },
      { metric: "GMP-Klasse B", label: "Zertifizierte Reinraumumgebung" },
      { metric: "100 %", label: "VHP-Begasungsbeständigkeit" },
      { metric: "8 Wochen", label: "Projektlaufzeit bis Inbetriebnahme" }
    ]
  },
  {
    id: "project-aerospace-optics",
    slug: "satellite-optics-integration-facility",
    title: "High-Bay-Reinraum für Satellitenoptik & Raumfahrt",
    clientSector: "Luft- & Raumfahrt",
    location: "Friedrichshafen, Deutschland",
    area: "520 m²",
    isoClass: "ISO-Klasse 5 / ISO-Klasse 6",
    gmpGrade: "N/A",
    completionYear: "2023",
    thumbnail: "/images/cleanrooms/project-aerospace.jpg",
    summary: "Spezialreinraum mit großer lichter Höhe für die Montage von Satellitenoptiken mit integriertem Hallenkran und ausgasungsfreien Bauteilen.",
    scopeOfWork: [
      "Modulare Stahltragwerkstruktur mit 7,5 Metern lichter Innenhöhe",
      "Integrierter 5-Tonnen-Hallenkran mit partikeldichten Faltenbälgen",
      "Ausgasungsfreie Paneele und VOC-freie Dichtstoffe nach ESA ECSS-Standards",
      "Laminar-Flow-Deckenhaube über dem zentralen optischen Justiertisch",
      "Kontinuierliches Monitoring für Partikel und luftgetragene Moleküle (AMC)"
    ],
    results: [
      { metric: "7,5 m", label: "Lichte Innenraumhöhe" },
      { metric: "5 Tonnen", label: "Tragkraft des Hallenkrans" },
      { metric: "ISO 5", label: "Zertifizierte Übergabeklasse" },
      { metric: "0 VOC", label: "Oberflächenausgasung" }
    ]
  }
];

export const projectsData = projectsDataDe; // Default German

export function getLocalizedProjects(lang: string = "de"): CleanroomProject[] {
  return lang === "en" ? projectsDataEn : projectsDataDe;
}

export function getProjectBySlug(slug: string, lang: string = "de"): CleanroomProject | undefined {
  const list = getLocalizedProjects(lang);
  return list.find(project => project.slug === slug);
}
