import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["uz", "ru", "en"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/languages/{{lng}}/translation.json",
    },
  });

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h2>Loading...</h2>
    </div>
  )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Suspense>
);
