import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Menu = () => {

    const [ show, setShow ] = useState(false)

    const mostrar = () => {
        setShow(!show)
    }

  return (
    
    <nav className="bg-morado py-2">
        <div className="container mx-auto flex justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logo1.png"
                        alt="logo"
                        width={60}
                        height={60}
                    />
                </Link>
                <h1 className="inline-flex font-primario font-bold text-2xl text-azul">FAST CONSULTING S.R.L.</h1>
                    
            </div>
            
            <button 
                onClick={ () => mostrar() }
                type="button" className="sm:hidden inline-flex items-center justify-center rounded-md p-2 hover:text-azul hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white" aria-controls="mobile-menu" aria-expanded="false">

                {show === true ?
                    <svg className="h-6 w-6 text-white hover:font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> :
                    
                    <svg className="h-6 w-6 text-white hover:font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                }

            </button>

            <div className="sm:block hidden" id="mobile-menu">
                <div className="flex space-x-1 py-2 pr-2 pl-3">
                    <Link href="/nosotros" legacyBehavior>
                        <a className="font-secundario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-lg" aria-current="page">Nosotros</a>
                    </Link>

                    <Link href="/servicios" legacyBehavior>
                        <a className="font-secundario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-lg">Servicios</a>
                    </Link>

                    <Link href="/noticias" legacyBehavior>
                        <a className="font-secundario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-lg">Noticias</a>
                    </Link>

                    <Link href="/contacto" legacyBehavior>
                        <a className="font-secundario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-lg">Contacto</a>
                    </Link>

                </div>
            </div>
        </div>

        <div className={show === true ? "block sm:hidden" : "hidden"} id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
                <Link href="/nosotros" legacyBehavior>
                    <a className="font-sencudario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-base" aria-current="page">Nosotros</a>
            </Link>
                
                <Link href="/servicios" legacyBehavior>
                    <a className="font-sencudario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-base">Servicios</a>
                </Link>

                <Link href="/noticias" legacyBehavior>
                    <a className="font-sencudario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-base">Noticias</a>
                </Link>

                <Link href="/contacto" legacyBehavior>
                    <a className="font-sencudario text-white block hover:bg-gris hover:text-azul hover:font-bold px-3 py-2 rounded-md text-base">Contacto</a>
                </Link>

            </div>
        </div>
    </nav>

    )
}

export default Menu