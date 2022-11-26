import Link from "next/link"

import { FaFacebookSquare, FaInstagramSquare, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Redes = () => {
  return (
    <nav className="container mx-auto flex justify-center gap-2 col-span-4 border-t-2 border-gris pt-4">
        <Link href="" legacyBehavior>
            <a className="text-white text-4xl hover:text-blue-500"><FaFacebookSquare /></a>
        </Link>

        <Link href="" legacyBehavior>
            <a className="text-white text-4xl hover:text-gris"><FaInstagramSquare /></a>
        </Link>

        <Link href="" legacyBehavior>
            <a className="text-white text-4xl hover:text-red-500"><FaYoutube /></a>
        </Link>

        <Link href="" legacyBehavior>
            <a className="text-white text-4xl hover:text-green-500"><FaWhatsapp /></a>
        </Link>
    </nav>
  )
}

export default Redes