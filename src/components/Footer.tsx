import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='p-10 flex bg-secondary-light w-full min-h-[15.625rem] justify-center flex-wrap' >
        <div className='flex-1 p-2 items-center justify-center'>
          <div className='p-2 flex items-center justify-center'>
            <span className='text-onSecondary-light'>
              {t('FOOTER.COPYRIGHT')}
            </span>
          </div>
          <div className="flex flex-wrap flex-1 items-center justify-center">
            <div className='p-2 flex items-center justify-center'>
              <Link className="text-primary-light font-normal underline hover:opacity-50" to="/web-react-portfolio/terms" target='_self'>
              {t('FOOTER.TERMS')}
              </Link>
            </div>
            <div className='p-2 flex items-center justify-center'>
              <Link className="text-primary-light font-normal underline hover:opacity-50" to="/web-react-portfolio/privacypolicy" target='_self'>
                {t('FOOTER.PRIVACYPOLICY')} 
              </Link>
            </div>
          </div>
        </div>
    </footer>
  )
}