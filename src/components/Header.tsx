import { AppBar, Divider } from '@mui/material'
import { Translate, DarkMode, LightMode } from '@mui/icons-material'
import "../i18n"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const { i18n } = useTranslation();
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

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
                backgroundColor: 'light-gray',
            }}
        >
            <header className='flex p-2 px-10 items-center min-h-[5rem] space-x-1 bg-surface-light dark:bg-surface-dark'>
                <nav className='flex-2 flex justify-start items-center'>
                    <Link to="/" className='hover:opacity-50'>
                        <span className='text-primary-light under font-medium text-[2rem] font-[caveat]'>
                            Mateus Pitura
                        </span>
                    </Link>
                </nav>
                <div className='flex-1 flex justify-end items-center text-center gap-5'>
                    <button onClick={toggleLanguage} className='hover:opacity-50' name="Change page language">
                        <span className='text-onSurface-light dark:text-onSurface-dark font-medium text-[1rem]'>
                            {i18n.language == "pt" ? 'PT' : 'EN'}
                        </span>
                        <Translate className='text-onSurface-light dark:text-onSurface-dark m-1' />
                    </button>
                    <button onClick={darkModeHandler} className='hover:opacity-50' name="Change page theme">
                        {!dark && <DarkMode className='text-onSurface-light dark:text-onSurface-dark m-1' />}
                        {dark && <LightMode className='text-onSurface-light dark:text-onSurface-dark m-1' />}
                    </button>
                </div>
            </header>
            <Divider className='bg-surface-light dark:bg-outline-light' />
        </AppBar>
    )
}