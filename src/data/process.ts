export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  deliverables: string[];
  standards: string[];
  duration: string;
  icon: string;
}

export const processStepsDataEn: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Consultation & URS Definition",
    subtitle: "Strategic Requirement Engineering",
    description: "Every successful cleanroom starts with a rigorous assessment of process requirements, contamination risks, personnel flows, and regulatory boundaries. We formulate an auditable User Requirement Specification (URS) and establish the architectural baseline.",
    keyActivities: [
      "Process flow analysis and contamination risk assessment (FMEA)",
      "Zoning of cleanliness grades (ISO 14644-1 and EU-GMP Annex 1)",
      "Formulation of User Requirement Specifications (URS)",
      "Space planning, structural feasibility, and utility connection audits"
    ],
    deliverables: [
      "User Requirement Specification (URS) Dossier",
      "Conceptual Cleanroom Zoning Layout",
      "Classification & Pressure Cascade Matrix",
      "Preliminary Capital Budget & Timeline"
    ],
    standards: ["ISO 14644-4 (Design & Construction)", "ISPE Baseline Guides"],
    duration: "1 - 3 Weeks",
    icon: "compass"
  },
  {
    stepNumber: "02",
    title: "3D BIM Engineering & Simulation",
    subtitle: "Clash-Free Digital Modeling & CFD Airflow",
    description: "Using cutting-edge Building Information Modeling (BIM Level 2) and Computational Fluid Dynamics (CFD), we design the architectural envelope, HVAC ductwork, ceiling grids, and piping in millimeter precision before fabrication.",
    keyActivities: [
      "Multi-disciplinary 3D BIM modeling (LOD 350 / 400)",
      "CFD airflow simulation to identify dead zones and ensure laminar uniformity",
      "Clash detection between structural beams, ductwork, and process piping",
      "Detailed bill of materials (BOM) and fabrication shop drawings"
    ],
    deliverables: [
      "3D BIM Model (Revit / IFC format)",
      "CFD Aerodynamic Airflow Analysis Report",
      "HVAC Thermodynamic Load Calculations",
      "Approved Fabrication & Installation Drawings"
    ],
    standards: ["DIN EN ISO 14644-4", "VDI 2083 Part 1-3", "Eurovent Ductwork Standards"],
    duration: "2 - 4 Weeks",
    icon: "layers"
  },
  {
    stepNumber: "03",
    title: "Off-site Prefabrication & Construction",
    subtitle: "Precision German Manufacturing & Swift Erection",
    description: "Cleanroom components are precision-manufactured under factory-controlled conditions. On-site installation is carried out by certified cleanroom assemblers using non-particulate methods, slashing on-site construction time by up to 50%.",
    keyActivities: [
      "CNC precision fabrication of monobloc and cassette wall panels",
      "Factory assembly of dynamic pass-through boxes and air showers",
      "Rapid on-site installation of wall partitions, walkable ceiling, and doors",
      "Application of seamless coved epoxy or welded static-dissipative vinyl flooring"
    ],
    deliverables: [
      "Factory Acceptance Test (FAT) Certificates",
      "Installed Architectural Cleanroom Shell",
      "Airtight Envelope Pressure Test Report",
      "Clean Construction Protocol Compliance Log"
    ],
    standards: ["EN 13501-1 (Fire Classification)", "EN 12207 (Airtightness)"],
    duration: "4 - 8 Weeks",
    icon: "tool"
  },
  {
    stepNumber: "04",
    title: "HVAC Commissioning & Air Balancing",
    subtitle: "System Integration & Microclimate Calibration",
    description: "With the physical envelope sealed, our mechanical engineers install terminal HEPA/ULPA filters, calibrate airflow velocities, balance room pressure cascades, and tune precision climate controls to achieve stable steady-state conditions.",
    keyActivities: [
      "Installation and leak scanning of terminal H14 HEPA / U15 ULPA filters",
      "Airflow velocity balancing across all supply diffusers and return air grilles",
      "Calibration of room differential pressure cascades (10 to 25 Pa deltas)",
      "Fine-tuning of PID controllers for temperature (±0.2°C) and humidity (±2% RH)"
    ],
    deliverables: [
      "Air Balancing & Flow Rate Report",
      "Differential Pressure Cascade Map",
      "Temperature & Humidity Stability Logs",
      "Terminal Filter DEHS Scan Certificates"
    ],
    standards: ["DIN EN ISO 14644-3 (Test Methods)", "VDI 2083 Part 4"],
    duration: "1 - 2 Weeks",
    icon: "wind"
  },
  {
    stepNumber: "05",
    title: "Validation, Qualification & Handover",
    subtitle: "Audit-Ready DQ / IQ / OQ / PQ Certification",
    description: "Our certified validation engineers conduct comprehensive qualification testing following GAMP 5 and ISO 14644 standards. We provide an audit-ready qualification dossier and hands-on staff training before final operational handover.",
    keyActivities: [
      "Airborne particle count sampling 'at-rest' and 'in-operation' (ISO 14644-1:2015)",
      "Smoke pattern visualization studies (airflow direction and turbulence profiling)",
      "Cleanliness recovery rate testing (measuring 100:1 particle purge time)",
      "Compilation of comprehensive DQ, IQ, OQ, and PQ validation dossiers"
    ],
    deliverables: [
      "Formal Cleanroom ISO 14644-1 Classification Certificate",
      "Complete IQ / OQ / PQ Qualification Dossier",
      "Airflow Visualization Video Documentation",
      "Facility Operation & Preventative Maintenance Manuals"
    ],
    standards: ["DIN EN ISO 14644-1:2015", "EU-GMP Annex 1", "FDA 21 CFR Part 211", "GAMP 5"],
    duration: "1 - 2 Weeks",
    icon: "award"
  }
];

export const processStepsDataDe: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Beratung & URS-Definition",
    subtitle: "Strategische Anforderungsanalyse",
    description: "Jeder erfolgreiche Reinraum beginnt mit einer präzisen Analyse der Prozessanforderungen, Kontaminationsrisiken, Personenströme und regulatorischen Richtlinien. Wir erstellen ein prüffähiges Lastenheft (User Requirement Specification – URS) und legen das architektonische Fundament.",
    keyActivities: [
      "Prozessflussanalyse und Kontaminations-Risikoanalyse (FMEA)",
      "Zonierung der Reinraumklassen (ISO 14644-1 und EU-GMP-Leitfaden Anhang 1)",
      "Erstellung des detaillierten Lastenhefts (URS)",
      "Flächenlayout, bauliche Machbarkeitsprüfung und Medienanschlussanalyse"
    ],
    deliverables: [
      "Prüffähiges URS-Lastenheftdossier",
      "Konzeptionelles Reinraum-Zonierungslayout",
      "Klassifizierungs- und Druckkaskaden-Matrix",
      "Vorläufiges Budget- und Terminrahmenkonzept"
    ],
    standards: ["ISO 14644-4 (Planung & Bau)", "ISPE Baseline Guides"],
    duration: "1 - 3 Wochen",
    icon: "compass"
  },
  {
    stepNumber: "02",
    title: "3D-BIM-Engineering & Strömungssimulation",
    subtitle: "Kollisionsfreie digitale Modellierung & CFD-Strömungsanalyse",
    description: "Mithilfe modernster Building Information Modeling (BIM Level 2) und computergestützter Strömungssimulation (CFD) planen wir Reinraumhülle, Lüftungskanäle, Rasterdecken und Rohrleitungen millimetergenau vor der Fertigung.",
    keyActivities: [
      "Gewerkeübergreifende 3D-BIM-Modellierung (LOD 350 / 400)",
      "CFD-Luftströmungssimulation zur Vermeidung von Totzonen und Verwirbelungen",
      "Kollisionsprüfung zwischen Tragwerk, Lüftungstrassen und Prozessmedien",
      "Detaillierte Stücklisten (BOM) und werkstattgerechte Fertigungszeichnungen"
    ],
    deliverables: [
      "3D-BIM-Modell (Revit- / IFC-Format)",
      "CFD-Strömungsanalysebericht",
      "Thermodynamische HLK-Lastberechnung",
      "Freigegebene Ausführungs- und Montagepläne"
    ],
    standards: ["DIN EN ISO 14644-4", "VDI 2083 Blatt 1-3", "Eurovent-Lüftungsnormen"],
    duration: "2 - 4 Wochen",
    icon: "layers"
  },
  {
    stepNumber: "03",
    title: "Werksfertigung & Reinraummontage",
    subtitle: "Präzise industrielle Fertigung & schnelle Errichtung vor Ort",
    description: "Reinraumkomponenten werden unter kontrollierten Werksbedingungen präzisionsgefertigt. Die Montage vor Ort erfolgt durch zertifizierte Reinraummonteure mit partikelarmer Baustellenführung – das verkürzt die Bauzeit vor Ort um bis zu 50 %.",
    keyActivities: [
      "CNC-Präzisionsfertigung von Monoblock- und Kassettenwandelementen",
      "Werksmontage von dynamischen Materialschleusen und Personen-Luftduschen",
      "Zügige Vor-Ort-Montage von Trennwänden, begehbarer Decke und Schleusentüren",
      "Verlegung nahtloser Hohlkehl-Epoxid- oder leitfähiger ESD-Vinylböden"
    ],
    deliverables: [
      "Werksabnahmeprüfzeugnisse (FAT-Zertifikate)",
      "Vollständig montierte Reinraum-Gebäudehülle",
      "Druckprüfbericht der dichten Raumhülle",
      "Reine Bauprotokolle nach VDI 2083"
    ],
    standards: ["EN 13501-1 (Brandschutz)", "EN 12207 (Luftdichtheit)"],
    duration: "4 - 8 Wochen",
    icon: "tool"
  },
  {
    stepNumber: "04",
    title: "HLK-Inbetriebnahme & Luftabgleich",
    subtitle: "Systemintegration & mikroklimatische Einregulierung",
    description: "Nach Fertigstellung der dichten Hülle installieren unsere Ingenieure endständige Schwebstofffilter (HEPA/ULPA), gleichen Strömungsgeschwindigkeiten und Druckkaskaden ab und kalibrieren die Regelung für stabile Betriebsbedingungen.",
    keyActivities: [
      "Einbau und Integritätsprüfung endständiger H14-HEPA- und U15-ULPA-Filter",
      "Volumenstromabgleich an allen Zuluftauslässen und Rückluftgittern",
      "Einregulierung der Raum-Differenzdruckkaskaden (10 bis 25 Pa Stufen)",
      "Feinabstimmung der PID-Regler für Temperatur (±0,2 °C) und Feuchte (±2 % r.F.)"
    ],
    deliverables: [
      "Luftmengen- und Einregulierungsbericht",
      "Druckstufen- und Kaskadenplan",
      "Temperatur- und Feuchte-Stabilitätsprotokolle",
      "Filter-Integritäts- und DEHS-Prüfzertifikate"
    ],
    standards: ["DIN EN ISO 14644-3 (Prüfverfahren)", "VDI 2083 Blatt 4"],
    duration: "1 - 2 Wochen",
    icon: "wind"
  },
  {
    stepNumber: "05",
    title: "Validierung, Qualifizierung & Übergabe",
    subtitle: "Auditsichere DQ / IQ / OQ / PQ Qualifizierung",
    description: "Zertifizierte Validierungsingenieure führen umfassende Qualifizierungsprüfungen gemäß GAMP 5 und ISO 14644 durch. Sie erhalten ein vollständiges, behördenfestes Dossier sowie praxisnahe Schulungen vor der finalen Freigabe.",
    keyActivities: [
      "Partikelmessungen im Ruhezustand (at-rest) und im Betriebszustand (in-operation)",
      "Rauchstudien zur Strömungsvisualisierung (Erfassung von Strömungsrichtung & Turbulenz)",
      "Erholzeitmessung (Recovery Test) zur Bestimmung der Abreinigungszeit (100:1)",
      "Erstellung der vollständigen DQ-, IQ-, OQ- und PQ-Validierungsdokumentation"
    ],
    deliverables: [
      "Offizielles ISO 14644-1 Reinraum-Klassifizierungszertifikat",
      "Vollständiges IQ / OQ / PQ Qualifizierungsdossier",
      "Videodokumentation der Strömungsvisualisierung",
      "Betriebs- und Wartungshandbücher für die Gesamtanlage"
    ],
    standards: ["DIN EN ISO 14644-1:2015", "EU-GMP-Leitfaden Anhang 1", "FDA 21 CFR Part 211", "GAMP 5"],
    duration: "1 - 2 Wochen",
    icon: "award"
  }
];

export const processStepsData = processStepsDataDe; // Default German

export function getLocalizedProcess(lang: string = "de"): ProcessStep[] {
  return lang === "en" ? processStepsDataEn : processStepsDataDe;
}
