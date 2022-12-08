import { useContext } from 'react'
import { useRouter } from 'next/router'
import servicioContext from '../context/servicioContext'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineInventory, MdOutlinePrint, MdOutlineCloudUpload } from 'react-icons/md'

const TipoService = ({service, categoria}) => {

    const ServicioState = useContext(servicioContext)
    const { añadirServicio } = ServicioState

    const router = useRouter()
    
    const { nombre, descripcion } = service.attributes
    const { url } = router.query

    const elemento = (name) => {
        switch (name) {
            case 'inventario':
                return <MdOutlineInventory />
            
            case 'imprenta':
                return <MdOutlinePrint />

            case 'digitalizacion':
                return <MdOutlineCloudUpload />

            default:
                console.log('no existe')
        }
    }

    const handleServicio = (servicio) => {

        añadirServicio(servicio)

        router.push('/contacto')
    }

  return (
    <article className='space-y-4 border-4 border-gris md:rounded-md mb-4 md:flex md:flex-row'>
        <div className={service.id%2 === 0 ? "bg-gris md:basis-1/3 md:order-last" : "bg-gris md:basis-1/3"}>
            <div className='font-primario font-bold text-6xl text-celeste p-2 flex justify-center'><span>{elemento(url)}</span></div>
            <div className='flex justify-center items-center'>
                <Image
                    src={service.attributes.imagen.data.attributes.formats.medium.url}
                    width={300}
                    height={300}
                    alt={`imagen servicio ${nombre}`}
                />
            </div>
        </div>
        <div className='md:basis-2/3'>
            <div className='space-y-4 md:space-y-8 md:p-4'>
                <h2 className='font-primario font-bold text-2xl text-azul text-center capitalize'>{nombre}</h2>
                <p className='font-secundario text-base text-justify'>{descripcion}</p>
                <button 
                    onClick={ () => handleServicio({nombre, categoria})  }
                    className='font-secundario font-bold text-xl text-white bg-celeste w-full py-2 capitalize'>
                    cotizar servicio
                </button>
            </div>
        </div>
    </article>
  )
}

export default TipoService