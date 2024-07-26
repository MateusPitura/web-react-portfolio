import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='p-10 flex bg-secondary-light w-full min-h-[15.625rem] justify-center flex-wrap' >
          <div className='flex flex-1 flex-wrap min-w-full items-center justify-center gap-2'>
            <div className='flex-1 p-2'/>
            <div className='flex-1 p-2 flex flex-wrap items-center justify-center'>
              <div className='p-2 flex items-center justify-center'>
                <span className='text-onSecondary-light'>
                  Copyright © 2024 Mateus Pitura. Todos os direitos reservados
                </span>
              </div>
              <div className='p-2 flex items-center justify-center'>
                <Link className="text-primary-light font-normal underline hover:opacity-50" to="/web-react-portfolio/terms" target='_self'>
                  Termos
                </Link>
              </div>
              <div className='p-2 flex items-center justify-center'>
                <Link className="text-primary-light font-normal underline hover:opacity-50" to="/web-react-portfolio/privacypolicy" target='_self'>
                  Política de privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}