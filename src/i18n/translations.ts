export type Language = "de" | "en";

export interface Translations {
  meta: {
    titleSuffix: string;
    homeTitle: string;
    homeDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    industriesTitle: string;
    industriesDesc: string;
    projectsTitle: string;
    projectsDesc: string;
    contactTitle: string;
    contactDesc: string;
    quoteTitle: string;
    quoteDesc: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  topbar: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    industries: string;
    projects: string;
    contact: string;
    requestQuote: string;
  };
  common: {
    requestQuote: string;
    contactUs: string;
    ourServices: string;
    learnMore: string;
    readMore: string;
    sendInquiry: string;
    sendMessage: string;
    sending: string;
    submitting: string;
    allRightsReserved: string;
    openQuoteForm: string;
    specifications: string;
    floorArea: string;
    standards: string;
    consultation: string;
  };
  home: {
    heroTitle: string;
    heroDesc: string;
    coreServicesTitle: string;
    coreServicesSubtitle: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
    whyTitle: string;
    why1Title: string;
    why1Desc: string;
    why2Title: string;
    why2Desc: string;
    why3Title: string;
    why3Desc: string;
    why4Title: string;
    why4Desc: string;
    industriesTitle: string;
    industriesSubtitle: string;
    ctaTitle: string;
    ctaDesc: string;
  };
  about: {
    pageTitle: string;
    pageSubtitle: string;
    leadTitle: string;
    leadP1: string;
    leadP2: string;
    overviewTitle: string;
    companyLabel: string;
    companyVal: string;
    expertiseLabel: string;
    expertiseVal: string;
    scopeLabel: string;
    scopeVal: string;
    standardsLabel: string;
    standardsVal: string;
    qualityTitle: string;
    qualityIntro: string;
    isoTitle: string;
    isoDesc: string;
    gmpTitle: string;
    gmpDesc: string;
    gampTitle: string;
    gampDesc: string;
    valuesTitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
  };
  servicesPage: {
    pageTitle: string;
    pageSubtitle: string;
    ctaTitle: string;
    ctaDesc: string;
    reqQuoteModular: string;
    reqQuoteHvac: string;
    reqQuoteEquipment: string;
    reqQuoteValidation: string;
  };
  industriesPage: {
    pageTitle: string;
    pageSubtitle: string;
    ctaTitle: string;
    ctaDesc: string;
  };
  projectsPage: {
    pageTitle: string;
    pageSubtitle: string;
    requestSimilar: string;
    ctaTitle: string;
    ctaDesc: string;
  };
  contactPage: {
    pageTitle: string;
    pageSubtitle: string;
    consultTitle: string;
    consultDesc: string;
    processTitle: string;
    proc1Title: string;
    proc1Desc: string;
    proc2Title: string;
    proc2Desc: string;
    proc3Title: string;
    proc3Desc: string;
    customQuoteTitle: string;
    customQuoteDesc: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    sectorLabel: string;
    sectorPharma: string;
    sectorSemi: string;
    sectorMedtech: string;
    sectorAero: string;
    sectorOther: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
  };
  quotePage: {
    pageTitle: string;
    pageSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    industryLabel: string;
    standardLabel: string;
    areaLabel: string;
    areaPlaceholder: string;
    timelineLabel: string;
    timelineImmediate: string;
    timelineMedium: string;
    timelineLong: string;
    timelineFuture: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    getInTouch: string;
    inquiryText: string;
    contactDesk: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    desc: string;
    backHome: string;
    exploreServices: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    meta: {
      titleSuffix: "REINWERK Reinraum- und Anlagentechnik",
      homeTitle: "Schlüsselfertige Reinräume & Kontrollierte Umgebungen",
      homeDesc: "REINWERK plant, baut und validiert zertifizierte modulare Reinräume, HVAC-Klimatechnik und Materialschleusen nach ISO 14644 und EU-GMP-Standards.",
      aboutTitle: "Über uns - Präzise Reinraum- & Anlagentechnik",
      aboutDesc: "Erfahren Sie mehr über REINWERK Reinraum- und Anlagentechnik, unsere Ingenieurkompetenz, Qualitätsstandards und schlüsselfertige Projektrealisierung.",
      servicesTitle: "Reinraum-Leistungen & Modulare Systeme",
      servicesDesc: "Umfassende Reinraumtechnik: Modulare Wandsysteme, HVAC-Lüftungsanlagen, Materialschleusen, Personen-Luftduschen und DQ/IQ/OQ/PQ-Validierung.",
      industriesTitle: "Branchenlösungen für Reinräume",
      industriesDesc: "Maßgeschneiderte Reinraumsysteme für Pharma, Biotechnologie, Halbleitertechnik, Medizintechnik und Luft- und Raumfahrt.",
      projectsTitle: "Referenzprojekte & Reinraumanlagen",
      projectsDesc: "Einblick in realisierte schlüsselfertige Reinraumprojekte von REINWERK in Deutschland und Europa nach ISO 14644 und GMP.",
      contactTitle: "Kontakt - Ingenieurbüro & Beratung",
      contactDesc: "Nehmen Sie Kontakt mit den Reinraum-Ingenieuren von REINWERK auf für Neubauprojekte, Modernisierungen oder Validierungs-Audits.",
      quoteTitle: "Reinraum-Angebot anfordern & Kostenschätzung",
      quoteDesc: "Konfigurieren Sie Ihre Reinraumparameter: Raummaße, ISO-Klasse, GMP-Grad, Luftführung und Wandsysteme für eine strukturierte Schätzung.",
      notFoundTitle: "404 - Seite nicht gefunden",
      notFoundDesc: "Die gesuchte Seite konnte nicht gefunden werden oder wurde verschoben."
    },
    topbar: {
      title: "REINWERK Reinraum- & Anlagentechnik",
      subtitle: "ISO 14644 & GMP Konformität",
      tagline: "Schlüsselfertige modulare Reinräume & Kontrollierte Umgebungen"
    },
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Leistungen",
      industries: "Branchen",
      projects: "Referenzen",
      contact: "Kontakt",
      requestQuote: "Angebot anfordern"
    },
    common: {
      requestQuote: "Angebot anfordern",
      contactUs: "Kontakt aufnehmen",
      ourServices: "Unsere Leistungen",
      learnMore: "Mehr erfahren",
      readMore: "Weiterlesen",
      sendInquiry: "Anfrage senden",
      sendMessage: "Nachricht senden",
      sending: "Wird gesendet...",
      submitting: "Wird übermittelt...",
      allRightsReserved: "Alle Rechte vorbehalten.",
      openQuoteForm: "Angebotsformular öffnen",
      specifications: "Technische Daten",
      floorArea: "Reinraumfläche",
      standards: "Normen & Standards",
      consultation: "Beratung & Planung"
    },
    home: {
      heroTitle: "Reinraum- & Anlagentechnik-Lösungen",
      heroDesc: "REINWERK Reinraum- und Anlagentechnik liefert schlüsselfertige modulare Reinräume, präzise HVAC-Luftfiltration und regulatorische Validierung nach DIN EN ISO 14644 und EU-GMP-Standards.",
      coreServicesTitle: "Unsere Kernleistungen",
      coreServicesSubtitle: "Zuverlässige Reinraumtechnik, exakt abgestimmt auf Ihre betrieblichen Anforderungen.",
      aboutTitle: "Über REINWERK",
      aboutText1: "REINWERK Reinraum- und Anlagentechnik ist Ihr spezialisierter Partner für anspruchsvolle kontrollierte Umgebungen. Wir begleiten Kunden durch alle Projektphasen – von der ersten Bedarfsanalyse und Planung über die Fertigung und Montage bis zur behördlichen Validierung.",
      aboutText2: "Unsere modulare Bauweise gewährleistet höchste Verarbeitungsqualität, stark verkürzte Bauzeiten vor Ort und lückenlose Konformität mit internationalen Reinraumnormen wie DIN EN ISO 14644 und EU-GMP Annex 1.",
      whyTitle: "Warum REINWERK Ihr Partner ist",
      why1Title: "Schlüsselfertige Gesamtausführung",
      why1Desc: "Ein zentraler Ansprechpartner für Architektur, Mechanik, Klimatechnik und Validierung.",
      why2Title: "Garantierte Normkonformität",
      why2Desc: "Dokumentation nach ISO 14644, EU-GMP Leitfaden und FDA-Anforderungen.",
      why3Title: "Modulare Vorfertigung",
      why3Desc: "Werkseitig vorgefertigte Komponenten minimieren Staubentwicklung und Montagezeit auf der Baustelle.",
      why4Title: "Langfristiger Service",
      why4Desc: "Filterwechsel, zyklische Re-Qualifizierung, Messtechnik und zuverlässiger technischer Support.",
      industriesTitle: "Branchen, die wir beliefern",
      industriesSubtitle: "Spezialisierte Reinraumlösungen für technologisch führende und regulierte Industriezweige.",
      ctaTitle: "Bereit für Ihr Reinraumprojekt?",
      ctaDesc: "Sprechen Sie mit unseren Fachingenieuren für eine technische Erstberatung oder fordern Sie eine schnelle Kostenschätzung an."
    },
    about: {
      pageTitle: "Über REINWERK",
      pageSubtitle: "Präzision, Ingenieurwissen und kontrollierte Reinraumbedingungen nach höchsten Qualitätsstandards.",
      leadTitle: "Deutsche Ingenieurkompetenz in der Reinraumtechnik",
      leadP1: "REINWERK Reinraum- und Anlagentechnik plant und realisiert hochwertige kontrollierte Umgebungen für hochsensible Produktions- und Forschungsprozesse. Unser Leistungsspektrum reicht von flexiblen modularen Reinraumkabinen bis zu komplexen pharmazeutischen Gesamtanlagen.",
      leadP2: "Dank unseres modularen Systemaufbaus und präziser Werksvorfertigung reduzieren wir Montagezeiten vor Ort erheblich und gewährleisten planebene, leicht zu reinigende Oberflächen mit optimaler Strömungsmechanik.",
      overviewTitle: "Unternehmensprofil",
      companyLabel: "Unternehmen:",
      companyVal: "REINWERK Reinraum- und Anlagentechnik GmbH",
      expertiseLabel: "Kompetenz:",
      expertiseVal: "Deutsche Reinraum- & Anlagentechnik",
      scopeLabel: "Leistungsumfang:",
      scopeVal: "Schlüsselfertige Reinräume, HVAC-Klimatechnik, Schleusensysteme, Validierung",
      standardsLabel: "Regelwerke:",
      standardsVal: "DIN EN ISO 14644, EU-GMP Annex 1, VDI 2083, GAMP 5",
      qualityTitle: "Unsere Qualitätsstandards",
      qualityIntro: "Alle unsere Reinrauminstallationen und Qualifizierungsdokumente orientieren sich streng an internationalen Normen:",
      isoTitle: "ISO 14644-1:2015",
      isoDesc: "Klassifizierung der Luftreinheit anhand der Partikelkonzentration von ISO-Klasse 3 bis ISO-Klasse 9.",
      gmpTitle: "EU-GMP Annex 1",
      gmpDesc: "Herstellung steriler Arzneimittel über die Reinheitsgrade A, B, C und D.",
      gampTitle: "GAMP 5 Validierung",
      gampDesc: "Strukturierte Design-, Installations-, Funktions- und Leistungsqualifizierung (DQ/IQ/OQ/PQ).",
      valuesTitle: "Unsere Leitprinzipien",
      val1Title: "Technologische Präzision",
      val1Desc: "Modernste Dichtungskonzepte, strömungsoptimierte Luftführung und partikelfreie Werkstoffe.",
      val2Title: "Transparenz & Partnerschaft",
      val2Desc: "Verbindliche Zeitpläne, feste Ansprechpartner und nachvollziehbare Budgetgestaltung.",
      val3Title: "Langlebigkeit & Wartungsfreundlichkeit",
      val3Desc: "Einfache Zugänglichkeit von Filtern und Technikzentralen für dauerhaft wirtschaftlichen Betrieb."
    },
    servicesPage: {
      pageTitle: "Produkte & Leistungen",
      pageSubtitle: "Schlüsselfertige Reinraumsysteme, Klimatechnik, Schleusenausstattung und Validierungsdienste.",
      ctaTitle: "Haben Sie ein konkretes Reinraumvorhaben?",
      ctaDesc: "Übermitteln Sie uns Ihre gewünschten Raummaße und die Ziel-Reinraumklasse.",
      reqQuoteModular: "Angebot für Modularen Reinraum anfordern",
      reqQuoteHvac: "Angebot für HVAC-Klimatechnik anfordern",
      reqQuoteEquipment: "Angebot für Schleusentechnik anfordern",
      reqQuoteValidation: "Validierungs-Audit anfragen"
    },
    industriesPage: {
      pageTitle: "Branchenlösungen",
      pageSubtitle: "Exakt abgestimmte Reinraumumgebungen für die regulatorischen Anforderungen Ihrer Branche.",
      ctaTitle: "Suchen Sie einen branchenspezifischen Reinraum?",
      ctaDesc: "Unser Ingenieurteam berät Sie gerne bezüglich der optimalen Reinheitsklasse und Anordnung."
    },
    projectsPage: {
      pageTitle: "Unsere Referenzen",
      pageSubtitle: "Eine Auswahl von REINWERK entwickelter, montierter und qualifizierter Reinraumanlagen.",
      requestSimilar: "Ähnliches Projekt anfragen",
      ctaTitle: "Planen Sie einen Reinraumbau oder eine Umrüstung?",
      ctaDesc: "Kontaktieren Sie unsere Fachingenieure für eine erste Begehung oder Beratung."
    },
    contactPage: {
      pageTitle: "Kontakt aufnehmen",
      pageSubtitle: "Wenden Sie sich für Projektanfragen oder technische Auskünfte direkt an unser Ingenieurbüro.",
      consultTitle: "Ingenieurberatung & Projektanfragen",
      consultDesc: "Bitte übermitteln Sie uns Ihre Projektanforderungen über das nachfolgende Kontaktformular. Unser Fachteam prüft Ihre Angaben und meldet sich innerhalb eines Werktages.",
      processTitle: "Ablauf der Beratung",
      proc1Title: "Bedarfsanalyse:",
      proc1Desc: "Ermittlung der erforderlichen Reinheitsklasse (ISO 14644 / GMP Annex 1) und Luftwechselraten.",
      proc2Title: "Konzeptplanung:",
      proc2Desc: "Beratung zu Wand- und Deckensystemen, Druckkaskaden, Schleusenkonzepten und HVAC-Filterung.",
      proc3Title: "Angebot & Zeitplan:",
      proc3Desc: "Transparente Kostenschätzung und verlässliche Rahmenterminplanung für die schlüsselfertige Übergabe.",
      customQuoteTitle: "Strukturierte Angebotskalkulation",
      customQuoteDesc: "Liegen Ihnen bereits konkrete Raumabmessungen, Reinheitsklassen und Vorgaben vor? Nutzen Sie unseren Online-Angebotskonfigurator.",
      formTitle: "Nachricht senden",
      formSubtitle: "Füllen Sie bitte das Formular aus – ein Ingenieur wird sich umgehend mit Ihnen in Verbindung setzen.",
      nameLabel: "Ihr Name *",
      namePlaceholder: "z.B. Dr. Thomas Keller",
      emailLabel: "E-Mail-Adresse *",
      emailPlaceholder: "name@unternehmen.de",
      phoneLabel: "Telefonnummer",
      phonePlaceholder: "+49 ...",
      companyLabel: "Unternehmen / Institution",
      companyPlaceholder: "z.B. BioTech Solutions GmbH",
      sectorLabel: "Branche / Einsatzbereich",
      sectorPharma: "Pharmazeutische Industrie & Biotech",
      sectorSemi: "Halbleitertechnik & Elektronik",
      sectorMedtech: "Medizintechnik",
      sectorAero: "Luft- und Raumfahrt & Optik",
      sectorOther: "Sonstiger Anwendungsbereich",
      messageLabel: "Ihre Nachricht *",
      messagePlaceholder: "Beschreiben Sie bitte kurz Ihr Vorhaben oder Ihre Fragestellung...",
      submitBtn: "Nachricht absenden"
    },
    quotePage: {
      pageTitle: "Reinraum-Angebot anfordern",
      pageSubtitle: "Geben Sie Ihre Rahmendaten ein, um eine unverbindliche technische Einschätzung zu erhalten.",
      formTitle: "Angaben zum Reinraumprojekt",
      formSubtitle: "Bitte füllen Sie die nachfolgenden Felder aus. Unsere Ingenieure erstellen eine Ersteinschätzung.",
      nameLabel: "Vollständiger Name *",
      namePlaceholder: "z.B. Dr. Andrea Wagner",
      companyLabel: "Unternehmen / Organisation *",
      companyPlaceholder: "z.B. Novartis Pharma AG",
      emailLabel: "E-Mail-Adresse *",
      emailPlaceholder: "name@unternehmen.de",
      phoneLabel: "Telefonnummer *",
      phonePlaceholder: "+49 ...",
      industryLabel: "Branchensektor *",
      standardLabel: "Angestrebte Reinheitsklasse *",
      areaLabel: "Geschätzte Reinraumfläche (m²)",
      areaPlaceholder: "z.B. 100 m²",
      timelineLabel: "Gewünschter Realisierungszeitraum",
      timelineImmediate: "Dringend (< 3 Monate)",
      timelineMedium: "3 - 6 Monate",
      timelineLong: "6 - 12 Monate",
      timelineFuture: "Langfristige Planung",
      notesLabel: "Projektbeschreibung & Besondere Anforderungen",
      notesPlaceholder: "Beschreiben Sie Raumgeometrie, eingebaute Prozessanlagen, Temperatur-/Feuchteanforderungen oder Schleusenwünsche...",
      submitBtn: "Angebotsanfrage absenden"
    },
    footer: {
      description: "REINWERK Reinraum- und Anlagentechnik bietet Reinraumplanung, modularen Anlagenbau, HVAC-Klimatechnik und Validierungsdienstleistungen nach ISO 14644 und EU-GMP-Standards.",
      quickLinks: "Navigation",
      services: "Leistungen",
      getInTouch: "Kontakt & Beratung",
      inquiryText: "Haben Sie Fragen zu unseren modularen Reinraumlösungen oder benötigen Sie eine technische Beratung?",
      contactDesk: "Ingenieurbüro kontaktieren"
    },
    notFound: {
      eyebrow: "Fehler 404",
      title: "Reinraumgrenze überschritten",
      desc: "Die von Ihnen angeforderte Seite befindet sich nicht in dieser Reinraumzone oder wurde verschoben.",
      backHome: "Zur Startseite zurückkehren",
      exploreServices: "Leistungen ansehen"
    }
  },
  en: {
    meta: {
      titleSuffix: "REINWERK Cleanroom & Plant Engineering",
      homeTitle: "German-Engineered Turnkey Cleanrooms & Controlled Environments",
      homeDesc: "REINWERK engineers, manufactures, and validates certified modular cleanrooms, HVAC air handling systems, and material airlocks compliant with ISO 14644 and EU-GMP standards.",
      aboutTitle: "About Us - Precision Cleanroom & Facility Engineering",
      aboutDesc: "Learn about REINWERK Reinraum- und Anlagentechnik, our German engineering heritage, core values, quality assurance standards, and turnkey project delivery.",
      servicesTitle: "Cleanroom Engineering Services & Modular Systems",
      servicesDesc: "Comprehensive cleanroom services: Modular hardwall and monobloc envelopes, HVAC air filtration, airlocks, dynamic pass-throughs, and DQ/IQ/OQ/PQ validation.",
      industriesTitle: "Cleanroom Solutions by Industry & Sector",
      industriesDesc: "Tailored contamination control solutions for Pharmaceuticals, Biotech, Semiconductor, Medical Devices, Aerospace, and Healthcare laboratories.",
      projectsTitle: "Turnkey Cleanroom Projects & Case Studies",
      projectsDesc: "Explore REINWERK's portfolio of completed turnkey cleanroom facilities across Europe, from GMP Grade B biopharma suites to ISO Class 4 semiconductor labs.",
      contactTitle: "Contact Cleanroom Engineering Desk",
      contactDesc: "Get in touch with REINWERK's cleanroom consultants and technical engineers for new facility inquiries, revamps, or validation audits.",
      quoteTitle: "Request a Cleanroom Quotation & Specification Estimator",
      quoteDesc: "Configure your cleanroom parameters: room dimensions, target ISO classification or GMP grade, airflow design, and wall finishes for an instant preliminary estimate.",
      notFoundTitle: "404 - Page Not Found",
      notFoundDesc: "The requested page could not be found or has been moved."
    },
    topbar: {
      title: "REINWERK Cleanroom & Plant Engineering",
      subtitle: "ISO 14644 & GMP Compliance",
      tagline: "Turnkey Modular Cleanrooms & Controlled Environments"
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      industries: "Industries",
      projects: "Projects",
      contact: "Contact",
      requestQuote: "Request Quote"
    },
    common: {
      requestQuote: "Request a Quote",
      contactUs: "Contact Us",
      ourServices: "Our Services",
      learnMore: "Learn More About Us",
      readMore: "Read More",
      sendInquiry: "Send an Inquiry",
      sendMessage: "Send Message",
      sending: "Sending...",
      submitting: "Submitting...",
      allRightsReserved: "All rights reserved.",
      openQuoteForm: "Open Quote Request Form",
      specifications: "Specifications",
      floorArea: "Floor Area",
      standards: "Standards & Compliance",
      consultation: "Engineering Consultation"
    },
    home: {
      heroTitle: "Cleanroom & Plant Engineering Solutions",
      heroDesc: "REINWERK Reinraum- und Anlagentechnik delivers turnkey modular cleanrooms, precision HVAC air filtration, and regulatory validation compliant with ISO 14644 and EU-GMP standards.",
      coreServicesTitle: "Our Core Services",
      coreServicesSubtitle: "Reliable cleanroom engineering solutions tailored to your operational requirements.",
      aboutTitle: "About REINWERK",
      aboutText1: "REINWERK Reinraum- und Anlagentechnik is an engineering firm focused on providing controlled environment solutions. We assist clients through every phase of their project—from initial consultation and design to fabrication, installation, and formal validation.",
      aboutText2: "Our modular approach ensures high quality, reduced construction timelines, and complete compliance with international cleanroom standards including DIN EN ISO 14644 and EU-GMP Annex 1.",
      whyTitle: "Why Partner with REINWERK",
      why1Title: "Turnkey Execution",
      why1Desc: "A single point of contact for architectural, mechanical, and validation scopes.",
      why2Title: "Compliance Assurance",
      why2Desc: "Documentation aligned with ISO 14644, EU-GMP, and FDA expectations.",
      why3Title: "Modular Construction",
      why3Desc: "Factory pre-finished components reduce on-site dust and assembly time.",
      why4Title: "Ongoing Support",
      why4Desc: "Filter replacement, periodic re-certification, and emergency servicing.",
      industriesTitle: "Industries We Serve",
      industriesSubtitle: "Supplying specialized cleanroom solutions across key technical and regulated industries.",
      ctaTitle: "Ready to Discuss Your Cleanroom Project?",
      ctaDesc: "Contact our engineering desk today for technical advice or request a fast project estimate."
    },
    about: {
      pageTitle: "About REINWERK",
      pageSubtitle: "Precision, engineering rigor, and controlled environmental conditions built to the highest quality standards.",
      leadTitle: "German Engineering Rigor in Cleanroom Construction",
      leadP1: "REINWERK Reinraum- und Anlagentechnik designs and builds high-performance controlled environments for critical contamination control. Our systems range from compact modular clean booths to large-scale pharmaceutical suites.",
      leadP2: "Our modular construction methodology and precision off-site prefabrication significantly reduce on-site assembly time, delivering flush, cleanable surfaces and optimized aerodynamic performance.",
      overviewTitle: "Corporate Overview",
      companyLabel: "Company:",
      companyVal: "REINWERK Reinraum- und Anlagentechnik GmbH",
      expertiseLabel: "Expertise:",
      expertiseVal: "German Cleanroom & Plant Engineering",
      scopeLabel: "Scope:",
      scopeVal: "Turnkey Cleanrooms, HVAC Systems, Pass-Through Airlocks, Validation Services",
      standardsLabel: "Standards:",
      standardsVal: "DIN EN ISO 14644, EU-GMP Annex 1, VDI 2083, GAMP 5",
      qualityTitle: "Our Quality Standards",
      qualityIntro: "All our cleanroom installations and qualification dossiers strictly adhere to recognized international standards:",
      isoTitle: "ISO 14644-1:2015",
      isoDesc: "Classification of air cleanliness by particle concentration from ISO Class 3 to ISO Class 9.",
      gmpTitle: "EU-GMP Annex 1",
      gmpDesc: "Manufacture of sterile medicinal products across Grades A, B, C, and D.",
      gampTitle: "GAMP 5 Validation",
      gampDesc: "Structured Design, Installation, Operational, and Performance Qualification (DQ/IQ/OQ/PQ).",
      valuesTitle: "Core Principles",
      val1Title: "Technological Precision",
      val1Desc: "State-of-the-art gasket sealing, aerodynamic airflow modeling, and particulate-free materials.",
      val2Title: "Transparency & Partnership",
      val2Desc: "Reliable schedules, dedicated technical leads, and transparent budget management.",
      val3Title: "Longevity & Maintainability",
      val3Desc: "Seamless accessibility to filter housings and mechanical rooms for long-term operational efficiency."
    },
    servicesPage: {
      pageTitle: "Products & Services",
      pageSubtitle: "Turnkey cleanroom systems, precision ventilation, airlocks, and testing services.",
      ctaTitle: "Have a Specific Cleanroom Inquiry?",
      ctaDesc: "Submit your room dimensions and target classification to our technical team.",
      reqQuoteModular: "Request Quote for Modular Cleanroom",
      reqQuoteHvac: "Request Quote for HVAC System",
      reqQuoteEquipment: "Request Equipment Quote",
      reqQuoteValidation: "Request Validation Audit"
    },
    industriesPage: {
      pageTitle: "Industries We Serve",
      pageSubtitle: "Engineered cleanroom environments tailored to the regulatory demands of each sector.",
      ctaTitle: "Looking for an Industry-Specific Cleanroom?",
      ctaDesc: "Our engineering team can guide you on the right classification and layout for your project."
    },
    projectsPage: {
      pageTitle: "Our Projects",
      pageSubtitle: "A selection of cleanroom installations designed, constructed, and validated by REINWERK.",
      requestSimilar: "Request Similar Project",
      ctaTitle: "Have a Facility Requiring Cleanroom Construction?",
      ctaDesc: "Speak to our engineers to schedule a preliminary site assessment."
    },
    contactPage: {
      pageTitle: "Contact Us",
      pageSubtitle: "Get in touch with our cleanroom engineering desk for project inquiries or technical support.",
      consultTitle: "Engineering Consultation & Inquiries",
      consultDesc: "Please submit your project specifications or technical questions using the contact form. Our engineering team reviews all submissions and responds within one business day.",
      processTitle: "Consultation Process",
      proc1Title: "Requirement Analysis:",
      proc1Desc: "Review of target classification (ISO 14644 / GMP Annex 1) and airflow requirements.",
      proc2Title: "Technical Architecture:",
      proc2Desc: "Guidance on modular wall systems, differential pressure cascades, and HVAC filtration.",
      proc3Title: "Quotation & Timeline:",
      proc3Desc: "Preliminary budget estimates and production scheduling for turnkey installation.",
      customQuoteTitle: "Custom Project Quotation",
      customQuoteDesc: "Have room dimensions, cleanroom tier, and operational parameters ready? Use our online quotation request form to receive a structured estimate.",
      formTitle: "Send a Message",
      formSubtitle: "Fill in your details below and an engineer will get back to you promptly.",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Dr. Thomas Keller",
      emailLabel: "Email Address *",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+49 ...",
      companyLabel: "Company / Institution",
      companyPlaceholder: "e.g. BioTech Solutions GmbH",
      sectorLabel: "Industry Sector",
      sectorPharma: "Pharmaceutical & Biotech",
      sectorSemi: "Semiconductor & Electronics",
      sectorMedtech: "Medical Devices",
      sectorAero: "Aerospace & Optics",
      sectorOther: "Other Application",
      messageLabel: "Message *",
      messagePlaceholder: "Please describe your cleanroom requirements or question...",
      submitBtn: "Send Message"
    },
    quotePage: {
      pageTitle: "Request a Cleanroom Quote",
      pageSubtitle: "Provide your preliminary project details below to receive a non-binding quotation and technical assessment.",
      formTitle: "Cleanroom Project Information",
      formSubtitle: "Please complete the fields below. An engineer will review your criteria and contact you within 24 hours.",
      nameLabel: "Full Name *",
      namePlaceholder: "e.g. Dr. Andrea Wagner",
      companyLabel: "Company / Organization *",
      companyPlaceholder: "e.g. Novartis Pharma AG",
      emailLabel: "Email Address *",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "+49 ...",
      industryLabel: "Industry Sector *",
      standardLabel: "Target Cleanliness Class *",
      areaLabel: "Estimated Floor Area (m²)",
      areaPlaceholder: "e.g. 100 m²",
      timelineLabel: "Target Completion Timeline",
      timelineImmediate: "Immediate (< 3 Months)",
      timelineMedium: "3 - 6 Months",
      timelineLong: "6 - 12 Months",
      timelineFuture: "Future Planning",
      notesLabel: "Project Description & Special Requirements",
      notesPlaceholder: "Describe the layout, process equipment to be housed, temperature/humidity requirements, or specific airlock needs...",
      submitBtn: "Submit Quote Request"
    },
    footer: {
      description: "REINWERK Reinraum- und Anlagentechnik provides cleanroom design, modular construction, HVAC filtration, and validation services according to ISO 14644 and EU-GMP standards.",
      quickLinks: "Quick Links",
      services: "Services",
      getInTouch: "Get in Touch",
      inquiryText: "Have questions about modular cleanrooms or need technical guidance? Send an inquiry directly to our engineering desk.",
      contactDesk: "Contact Desk"
    },
    notFound: {
      eyebrow: "Error 404",
      title: "Cleanroom Perimeter Exceeded",
      desc: "The page or specification document you requested is not located within this cleanroom zone or has been moved to another classification tier.",
      backHome: "Return to Homepage",
      exploreServices: "Explore Cleanroom Services"
    }
  }
};

export function getTranslation(lang: Language, pathKey: string): any {
  const keys = pathKey.split(".");
  let current: any = translations[lang] || translations.de;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return pathKey;
    }
  }
  return current;
}
