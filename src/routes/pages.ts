import { Router, Request, Response } from "express";
import { getLocalizedServices, getServiceBySlug } from "../data/services.js";
import { getLocalizedIndustries } from "../data/industries.js";
import { getLocalizedProjects } from "../data/projects.js";
import { getLocalizedProcess } from "../data/process.js";
import { Language, translations } from "../i18n/translations.js";

export const pagesRouter = Router();

// Helper to inject common layout data with active language
function getCommonData(req: Request, res: Response, activeRoute: string, title: string, description: string) {
  const lang = (res.locals.lang || "de") as Language;
  const servicesList = getLocalizedServices(lang);
  const industriesList = getLocalizedIndustries(lang);

  return {
    activeRoute,
    lang,
    metaTitle: `${title} | REINWERK Reinraum- und Anlagentechnik`,
    metaDescription: description,
    servicesList,
    industriesList,
    currentYear: new Date().getFullYear()
  };
}

// 1. Home Page
pagesRouter.get("/", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const t = translations[lang];

  res.render("pages/index", {
    ...getCommonData(
      req,
      res,
      "home",
      t.meta.homeTitle,
      t.meta.homeDesc
    ),
    services: getLocalizedServices(lang),
    industries: getLocalizedIndustries(lang),
    featuredProjects: getLocalizedProjects(lang).slice(0, 3),
    processSteps: getLocalizedProcess(lang)
  });
});

// 2. About Us Page
pagesRouter.get("/about", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const t = translations[lang];

  res.render("pages/about", {
    ...getCommonData(
      req,
      res,
      "about",
      t.meta.aboutTitle,
      t.meta.aboutDesc
    )
  });
});

// 3. Products / Services Overview
pagesRouter.get("/services", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const t = translations[lang];

  res.render("pages/services", {
    ...getCommonData(
      req,
      res,
      "services",
      t.meta.servicesTitle,
      t.meta.servicesDesc
    ),
    services: getLocalizedServices(lang)
  });
});

// 4. Product / Service Details (Modular, HVAC, Equipment, Validation)
pagesRouter.get("/services/:slug", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const service = getServiceBySlug(req.params.slug, lang);

  if (!service) {
    const isEn = lang === "en";
    return res.status(404).render("pages/404", {
      ...getCommonData(
        req,
        res,
        "404",
        isEn ? "Service Not Found" : "Dienstleistung nicht gefunden",
        isEn ? "The requested cleanroom service could not be found." : "Die angeforderte Reinraum-Dienstleistung konnte nicht gefunden werden."
      )
    });
  }

  res.render("pages/service-detail", {
    ...getCommonData(
      req,
      res,
      "services",
      service.title,
      service.shortDescription
    ),
    service,
    allServices: getLocalizedServices(lang)
  });
});

// 5. Industries / Applications
pagesRouter.get("/industries", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const t = translations[lang];

  res.render("pages/industries", {
    ...getCommonData(
      req,
      res,
      "industries",
      t.meta.industriesTitle,
      t.meta.industriesDesc
    ),
    industries: getLocalizedIndustries(lang)
  });
});

// 6. Why Choose Us / Quality & Compliance
pagesRouter.get("/why-choose-us", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const isEn = lang === "en";

  res.render("pages/why-choose-us", {
    ...getCommonData(
      req,
      res,
      "why-choose-us",
      isEn ? "Why Choose REINWERK - German Engineering & Regulatory Compliance" : "Warum REINWERK - Deutsche Ingenieurskunst & GMP-Konformität",
      isEn
        ? "Discover the REINWERK advantage: Off-site precision prefabrication, strict ISO 14644 & cGMP compliance, GAMP 5 validation protocols, and turnkey single-source accountability."
        : "Entdecken Sie den REINWERK-Vorteil: Industrielle Vorfertigung, strenge ISO 14644- und cGMP-Konformität, GAMP 5-Validierung und schlüsselfertige Gesamtabwicklung aus einer Hand."
    )
  });
});

// 7. Projects / Solutions Showcase
pagesRouter.get("/projects", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const t = translations[lang];

  res.render("pages/projects", {
    ...getCommonData(
      req,
      res,
      "projects",
      t.meta.projectsTitle,
      t.meta.projectsDesc
    ),
    projects: getLocalizedProjects(lang)
  });
});

// 8. Process & Technology
pagesRouter.get("/process", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const isEn = lang === "en";

  res.render("pages/process", {
    ...getCommonData(
      req,
      res,
      "process",
      isEn ? "Our 5-Stage Cleanroom Engineering Methodology" : "Unsere 5-Phasen-Reinraumentwicklung",
      isEn
        ? "From conceptual URS formulation and 3D BIM clash detection to off-site prefabrication, air balancing, and formal DQ/IQ/OQ/PQ validation."
        : "Vom Lastenheft (URS) und digitaler 3D-BIM-Kollisionsprüfung bis zu industrieller Vorfertigung, Luftabgleich und DQ/IQ/OQ/PQ-Qualifizierung."
    ),
    steps: getLocalizedProcess(lang)
  });
});

// 9. Contact Us
pagesRouter.get("/contact", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const t = translations[lang];

  res.render("pages/contact", {
    ...getCommonData(
      req,
      res,
      "contact",
      t.meta.contactTitle,
      t.meta.contactDesc
    )
  });
});

// 10. Request a Quote / Specification Estimator
pagesRouter.get("/quote", (req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const t = translations[lang];

  res.render("pages/quote", {
    ...getCommonData(
      req,
      res,
      "quote",
      t.meta.quoteTitle,
      t.meta.quoteDesc
    ),
    services: getLocalizedServices(lang),
    industries: getLocalizedIndustries(lang)
  });
});
