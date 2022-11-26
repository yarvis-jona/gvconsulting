import Image from "next/image"
import Link from "next/link"

import Redes from "../redes"

import { SlLocationPin } from 'react-icons/sl'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = ({empresa}) => {
    
    const { direccion, telefonos, email } = empresa.attributes

  return (
    <footer className="bg-black p-4 sm:py-8 md:py-20">
        <div className="container mx-auto md:grid md:grid-cols-4 md:gap-4">
            <div className="space-y-6 mb-10">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo1.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <h1 className="inline-flex font-primario font-bold text-lg text-white underline underline-offset-8">Fast Consulting S.R.L.</h1>                    
                </div>
                <p className="font-secundario text-white text-justify m-3 leading-loose line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae justo eget arcu ullamcorper vehicula quis quis tortor. Nullam finibus diam sapien, sed elementum nunc commodo at. </p>
                <button className="text-white bg-celeste px-4 py-2 rounded-md">Conoce más</button>
            </div>
        
            <div className="text-white mb-4 text-center mb-10">
                <p className="font-primario text-2xl underline underline-offset-8 mb-4">Enlaces</p>
                <ul className="font-secundario space-y-6">
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Noticias</li>
                    <li>Contacto</li>
                </ul>
            </div>

            <div className="text-white mb-4 text-center md:text-left mb-10">
                <p className="font-primario text-2xl underline underline-offset-8 mb-4">Servicios</p>
                <ul className="font-secundario space-y-6">
                    <li>Inventarios</li>
                    <li>Imprenta</li>
                    <li>Digitalización</li>
                </ul>
            </div>

            <div className="text-white text-center md:text-left mb-10">
                <p className="font-primario text-2xl underline underline-offset-8 mb-4">Ubicación</p>
                <div className="font-secundario space-y-5">
                    <p className="flex justify-center md:justify-start">
                        <span className="self-center mr-2"><SlLocationPin /></span>
                        <span>{direccion}</span>
                    </p>

                    <p className="flex justify-center md:justify-start">
                        <span className="self-center mr-2"><AiOutlinePhone /></span>
                        <span>{telefonos}</span>
                    </p>

                    <p className="flex justify-center md:justify-start">
                        <span className="self-center mr-2"><AiOutlineMail /></span>
                        <span>{email}</span>
                    </p>
                </div>
            </div>
        </div>

        <Redes />
    </footer>
  )
}

export default Footer