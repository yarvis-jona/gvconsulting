import Head from "next/head"
import Menu from "../header/menu"
import Footer from "../footer"

import { SlLocationPin } from 'react-icons/sl'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'


const LayoutMain = ({children, titulo, empresa}) => {
    const { direccion, telefonos, email } = empresa.attributes
  return (
    <>
        <Head>
            <title>{`G&VFASTCONSULTING - ${titulo}`}</title>
        </Head>

        <header>
            <div className="bg-black">
                <div className="container mx-auto font-secundario font-bold text-md text-gris p-4 md:flex md:justify-between">
                    <p className="flex items-center gap-2"><span><AiOutlineMail /></span><span>{email}</span></p>
                    <p className="flex items-center gap-2"><span><AiOutlinePhone /></span><span>{telefonos}</span></p>
                    <p className="flex items-center gap-2"><span><SlLocationPin /></span><span>{direccion}</span></p>
                </div>
            </div>
            
            <Menu />
            
        </header>

        {children}

        <Footer empresa={empresa}/>
    </>
  )
}

export default LayoutMain