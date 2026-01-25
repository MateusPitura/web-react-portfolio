import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="bg-surface-light dark:bg-surface-dark flex flex-1 flex-col">
      <main className="flex flex-wrap pt-20 max-w-[50rem] m-auto justify-center text-left space-y-3 py-20 text-onSurface-light dark:text-onSurface-dark px-2">
        <h1 className="text-[3.5625rem] w-full">{t("PAGE_NOT_FOUND.TITLE")}</h1>
        <p className="text-[1rem] w-full">{t("PAGE_NOT_FOUND.PARAGRAPH1")}</p>
        <ol className="list-decimal pl-10 w-full">
          <li className="text-[1rem] w-full">
            {t("PAGE_NOT_FOUND.LIST.ITEM1")}
          </li>
          <li className="text-[1rem] w-full">
            {t("PAGE_NOT_FOUND.LIST.ITEM2")}
          </li>
        </ol>
        <p className="text-[1rem] w-full">
          {t("PAGE_NOT_FOUND.PARAGRAPH2")}{" "}
          <Link
            className="text-primary-light underline hover:opacity-50"
            to="/"
            target="_self"
          >
            {t("PAGE_NOT_FOUND.HERE")}
          </Link>
        </p>
      </main>
    </div>
  );
}
