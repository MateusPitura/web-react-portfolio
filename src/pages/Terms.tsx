import { useTranslation } from "react-i18next";

export default function Terms() {

    const { t } = useTranslation()

    return (
        <div className="bg-surface-light dark:bg-surface-dark flex-1">
            <main className='flex flex-wrap pt-20 max-w-[50rem] m-auto justify-center text-left space-y-3 py-20 text-onSurface-light dark:text-onSurface-dark px-2'>
                <h1 className="text-[3.5625rem] w-full">
                    {t('TERMS_OF_USE.TITLE')}
                </h1>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION1.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION1.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION2.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION2.PARAGRAPH1')}
                </p>
                <ol className="list-decimal pl-10 w-full">
                    <li className="text-[1rem] w-full">{t('TERMS_OF_USE.SECTION2.LIST.ITEM1')}</li>
                    <li className="text-[1rem] w-full">{t('TERMS_OF_USE.SECTION2.LIST.ITEM2')}</li>
                    <li className="text-[1rem] w-full">{t('TERMS_OF_USE.SECTION2.LIST.ITEM3')}</li>
                    <li className="text-[1rem] w-full">{t('TERMS_OF_USE.SECTION2.LIST.ITEM4')}</li>
                    <li className="text-[1rem] w-full">{t('TERMS_OF_USE.SECTION2.LIST.ITEM5')}</li>
                </ol>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION2.PARAGRAPH2')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION3.TITLE')}
                </h2>
                <ol className="list-decimal pl-10 w-full">
                    <li className="text-[1rem] w-full">{t('TERMS_OF_USE.SECTION3.LIST.ITEM1')}</li>
                    <li className="text-[1rem] w-full">{t('TERMS_OF_USE.SECTION3.LIST.ITEM2')}</li>
                </ol>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION4.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION4.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION5.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION5.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION6.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION6.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION7.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION7.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('TERMS_OF_USE.SECTION8.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('TERMS_OF_USE.SECTION8.PARAGRAPH1')}
                </p>
            </main>
        </div>
    )
}