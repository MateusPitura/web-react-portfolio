import { AppBar, Divider } from "@mui/material";
import { Translate, DarkMode, LightMode } from "@mui/icons-material";
import "../i18n";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../store/globalStore";
import { useEffect } from "react";

export default function Header() {
  const { i18n } = useTranslation();
  const { isDarkMode, toggleIsDarkMode, language, toggleLanguage } =
    useGlobalStore();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      return;
    }
    document.body.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    if (language === "pt") {
      i18n.changeLanguage("en");
      return;
    }
    i18n.changeLanguage("pt");
  }, [language]);

  return (
    <AppBar
      position="sticky"
      style={{
        boxShadow: "none",
        backgroundColor: "light-gray",
        zIndex: 1501,
      }}
    >
      <header className="flex p-2 sm:px-10 items-center min-h-[5rem] space-x-1 bg-surface-light dark:bg-surface-dark">
        <Link to="/" className="hover:opacity-50">
          <img
            src={Logo}
            alt="Page logo"
            width={150}
            height={45}
            loading="lazy"
          />
        </Link>
        <div className="flex-1 flex justify-end items-center text-center gap-5">
          <button
            onClick={toggleLanguage}
            className="hover:opacity-50"
            aria-label="Change page language"
          >
            <span className="text-onSurface-light dark:text-onSurface-dark font-bold text-[1rem]">
              {i18n.language == "pt" ? "PT" : "EN"}
            </span>
            <Translate className="text-onSurface-light dark:text-onSurface-dark m-1" />
          </button>
          <button
            aria-label="LightMode change"
            onClick={toggleIsDarkMode}
            className="hover:opacity-50"
          >
            {isDarkMode ? (
              <LightMode className="text-onSurface-light dark:text-onSurface-dark m-1" />
            ) : (
              <DarkMode className="text-onSurface-light dark:text-onSurface-dark m-1" />
            )}
          </button>
        </div>
      </header>
      <Divider className="bg-surface-light dark:bg-outline-light" />
    </AppBar>
  );
}
