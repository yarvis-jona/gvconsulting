import Image from "next/image"
import Link from "next/link"

const Service = ({servicio}) => {
  return (
    <div className="space-y-6 text-center border-2 border-gris pb-6">
        <Image
            src={servicio.attributes.imagen.data.attributes.formats.medium.url}
            width={800}
            height={800}
            alt={`imagen ${servicio.attributes.nombre}`}
        />
        <h3 className="font-secundario font-bold text-3xl text-center capitalize pb-4">{servicio.attributes.nombre}</h3>
        <Link href={`/servicios/${servicio.attributes.nombre}`}>
          <button className="bg-celeste font-secundario font-bold text-white text-lg w-3/4 rounded-md py-2">Conoce más</button>
        </Link>
  </div>
  )
}

export default Service