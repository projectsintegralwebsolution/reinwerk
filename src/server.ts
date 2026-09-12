import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import { pagesRouter } from "./routes/pages.js";
import { apiRouter } from "./routes/api.js";
import { getLocalizedServices } from "./data/services.js";
import { getLocalizedIndustries } from "./data/industries.js";
import { Language, translations, getTranslation } from "./i18n/translations.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Determine root directory (handles both tsx execution and compiled dist execution)
const parentDir = path.resolve(__dirname, "..");
const rootDir = fs.existsSync(path.join(parentDir, "views")) ? parentDir : process.cwd();

// Set View Engine
app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

// Static Assets
app.use(express.static(path.join(rootDir, "public")));

// Bilingual Language Resolution Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const queryLang = (req.query.lang as string)?.toLowerCase();
  const cookieMatch = (req.headers.cookie || "").match(/(?:^|;\s*)lang=([a-z]{2})/i);
  const cookieLang = cookieMatch ? cookieMatch[1].toLowerCase() : null;

  // Default language is German ("de"), switchable to English ("en")
  let lang: Language = "de";
  if (queryLang === "en" || queryLang === "de") {
    lang = queryLang;
    res.cookie("lang", lang, { maxAge: 365 * 24 * 60 * 60 * 1000, path: "/" });
  } else if (cookieLang === "en" || cookieLang === "de") {
    lang = cookieLang;
  }

  res.locals.lang = lang;
  res.locals.currentLang = lang;
  res.locals.t = (pathKey: string) => getTranslation(lang, pathKey);
  res.locals.translations = translations[lang];
  res.locals.servicesList = getLocalizedServices(lang);
  res.locals.industriesList = getLocalizedIndustries(lang);
  res.locals.currentYear = new Date().getFullYear();
  res.locals.currentPath = req.path;

  next();
});

// Mount Routes
app.use("/", pagesRouter);
app.use("/api", apiRouter);

// 404 Not Found Handler
app.use((req: Request, res: Response) => {
  const lang = (res.locals.lang || "de") as Language;
  const isEn = lang === "en";

  res.status(404).render("pages/404", {
    activeRoute: "404",
    metaTitle: isEn ? "404 - Page Not Found | REINWERK" : "404 - Seite nicht gefunden | REINWERK",
    metaDescription: isEn
      ? "The page you are looking for does not exist or has been moved."
      : "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    servicesList: getLocalizedServices(lang),
    industriesList: getLocalizedIndustries(lang),
    currentYear: new Date().getFullYear()
  });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("[REINWERK Server Error]:", err);
  const lang = (res.locals.lang || "de") as Language;
  const isEn = lang === "en";

  res.status(500).render("pages/404", {
    activeRoute: "500",
    metaTitle: isEn ? "500 - Server Error | REINWERK" : "500 - Serverfehler | REINWERK",
    metaDescription: isEn
      ? "An internal server error occurred."
      : "Ein interner Serverfehler ist aufgetreten.",
    servicesList: getLocalizedServices(lang),
    industriesList: getLocalizedIndustries(lang),
    currentYear: new Date().getFullYear()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`  REINWERK Cleanroom & Plant Engineering Web App `);
  console.log(`  Live URL: http://localhost:${PORT}             `);
  console.log(`  Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`=================================================`);
});
