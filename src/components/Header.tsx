import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import Translate from "@mui/icons-material/Translate";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.webp";
import "../i18n";
import { useGlobalStore } from "../store/globalStore";
import Image from "./Image";

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
    <header className="flex p-2 sm:px-10 items-center min-h-[5rem] gap-1 bg-surface-light dark:bg-surface-dark sticky border-b border-neutral-200 dark:border-neutral-600 top-0 z-20">
      <Link to="/" className="hover:opacity-50">
        <Image
          alt="Page logo"
          width={150}
          aspectRatio="4/1"
          loading="eager"
          src={Logo}
          className="!shadow-none"
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
  );
}
