import { useTranslation } from "react-i18next";
import { BASENAME } from "../constants";

export default function ErrorBoundaryContainer() {
  const { t } = useTranslation();

  return (
    <div className="bg-surface-light dark:bg-surface-dark">
      <div className="flex h-screen flex-col">
        <main className="flex flex-wrap pt-20 max-w-[50rem] m-auto justify-center text-left space-y-3 py-20 text-onSurface-light dark:text-onSurface-dark px-2">
          <h1 className="text-[3.5625rem] w-full">
            {t("ERROR_BOUNDARY.TITLE")}
          </h1>
          <p className="text-[1rem] w-full">{t("ERROR_BOUNDARY.PARAGRAPH1")}</p>
          <ol className="list-decimal pl-10 w-full">
            <li className="text-[1rem] w-full">
              {t("ERROR_BOUNDARY.LIST.ITEM1")}
            </li>
            <li className="text-[1rem] w-full">
              {t("ERROR_BOUNDARY.LIST.ITEM2")}
            </li>
          </ol>
          <p className="text-[1rem] w-full">
            {t("PAGE_NOT_FOUND.PARAGRAPH2")}{" "}
            <span
              className="text-primary-light underline hover:opacity-50 cursor-pointer"
              onClick={() => {
                window.location.href = BASENAME;
              }}
            >
              {t("PAGE_NOT_FOUND.HERE")}
            </span>
          </p>
        </main>
      </div>
    </div>
  );
}
