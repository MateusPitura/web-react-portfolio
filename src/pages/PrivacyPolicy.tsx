import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPolicy() {

    const { t } = useTranslation()

    return (
        <div className="bg-surface-light dark:bg-surface-dark">
            <Header />
            <div className='flex flex-wrap pt-20 max-w-[50rem] m-auto justify-center text-left space-y-3 py-20 text-onSurface-ligh dark:text-onSurface-dark px-2'>
                <h1 className="text-[3.5625rem] w-full">
                    {t('PRIVACY_POLICY.TITLE')}
                </h1>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION1.TITLE')}
                </h2>
                <p>
                    {t('PRIVACY_POLICY.SECTION1.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION2.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION2.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION3.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION3.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION4.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION4.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION5.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION5.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION6.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION6.PARAGRAPH1')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION7.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION7.PARAGRAPH1')}
                </p>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION7.PARAGRAPH2')}
                </p>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION8.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION8.PARAGRAPH1')}
                </p>
                <ul className="list-disc pl-10">
                    <li className="text-[1rem] w-full">{t('PRIVACY_POLICY.SECTION8.LIST.ITEM1')}</li>
                    <li className="text-[1rem] w-full">{t('PRIVACY_POLICY.SECTION8.LIST.ITEM2')}</li>
                    <li className="text-[1rem] w-full">{t('PRIVACY_POLICY.SECTION8.LIST.ITEM3')}</li>
                </ul>
                <h2 className="text-[2rem] w-full">
                    {t('PRIVACY_POLICY.SECTION9.TITLE')}
                </h2>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION9.PARAGRAPH1')}
                </p>
                <p className="text-[1rem] w-full">
                    {t('PRIVACY_POLICY.SECTION9.PARAGRAPH2')}
                </p>
            </div>
            <Footer />
        </div>
    )
}