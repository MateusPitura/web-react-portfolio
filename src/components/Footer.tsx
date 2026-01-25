import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../store/globalStore";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [navigatePath, setNavigatePath] = useState<boolean | string>(false);

  const { showTooltip, toggleShowTooltip } = useGlobalStore();

  function handleNavigate(path: string) {
    toggleShowTooltip(false);
    setNavigatePath(path);
  }

  useEffect(() => {
    if (typeof navigatePath === "string" && !showTooltip) {
      navigate(navigatePath);
      setNavigatePath(false);
    }
  }, [showTooltip, navigatePath]);

  return (
    <footer className="p-10 flex bg-secondary-light w-full min-h-[15.625rem] justify-center flex-wrap">
      <div className="flex-1 p-2 items-center justify-center">
        <div className="p-2 flex items-center justify-center">
          <span className="text-onSecondary-light text-center">
            {t("FOOTER.COPYRIGHT", { currentYear: new Date().getFullYear() })}
          </span>
        </div>
        <div className="flex flex-wrap flex-1 items-center justify-center">
          <div className="p-2 flex items-center justify-center">
            <button
              className="text-primary-light underline hover:opacity-50"
              onClick={() => handleNavigate("/terms")}
            >
              {t("FOOTER.TERMS")}
            </button>
          </div>
          <div className="p-2 flex items-center justify-center">
            <button
              className="text-primary-light underline hover:opacity-50"
              onClick={() => handleNavigate("/privacypolicy")}
            >
              {t("FOOTER.PRIVACYPOLICY")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
