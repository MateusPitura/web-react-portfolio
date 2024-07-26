import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <div className="flex min-h-[100vh] flex-col">
            <div className='flex flex-wrap pt-20 max-w-[50rem] m-auto justify-center text-left space-y-3 py-20 text-onSurface-light px-2'>
                <h1 className="text-[3.5625rem] w-full">
                    Página não encontrada
                </h1>
                <p className="text-[1rem] w-full">
                    Não conseguimos encontrar a página que você está procurando. Isso pode ter ocorrido por um dos seguintes motivos:
                </p>
                <ol className="list-decimal pl-10 w-full">
                    <li className="text-[1rem] w-full">A URL digitada está incorreta. Verifique se há erros e tente novamente.</li>
                    <li className="text-[1rem] w-full">A página foi movida ou removida.</li>
                </ol>
                <p className="text-[1rem] w-full">
                    Você pode voltar para a página inicial clicando <Link className="text-primary-light font-normal underline hover:opacity-50" to="/web-react-portfolio/" target='_self'>aqui</Link>
                </p>
            </div>
            <Footer />
        </div>
    )
}