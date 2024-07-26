import { AppBar, Divider } from '@mui/material'
import { Translate, DarkMode } from '@mui/icons-material'
import "../i18n"
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        if (i18n.language === 'pt') {
            i18n.changeLanguage('en')
            return
        }
        i18n.changeLanguage('pt')
    }

    return (
        <AppBar
            position="sticky"
            style={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
            }}
        >
            <div className='flex p-2 px-10 items-center min-h-[5rem] space-x-1 bg-surface-light'>
                <div className='flex-1 flex justify-start items-center'>
                    {/* <img src={PhotoAvatarMe} className='max-h-[4rem]' />
            <span className='text-primary-light font-medium text-[1.5rem] font-'>
              MP
            </span> */}
                </div>
                <div className='flex-1 flex justify-end items-center text-center gap-5'>
                    <button onClick={toggleLanguage} className='hover:opacity-50'>
                        <span className='text-onSurface-light font-medium text-[1rem]'>
                            {i18n.language == "pt" ? 'PT' : 'EN'}
                        </span>
                        <Translate className='text-onSurface-light m-1' />
                    </button>
                    <button className=''>
                        <DarkMode className='text-onSurface-light m-1 hover:opacity-50' />
                    </button>
                </div>
            </div>
            <Divider className='border-red-50' />
        </AppBar>
    )
}