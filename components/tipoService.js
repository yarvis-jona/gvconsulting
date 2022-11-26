import { useRouter } from 'next/router'
import { MdOutlineInventory, MdOutlinePrint, MdOutlineCloudUpload } from 'react-icons/md'

const TipoService = ({service}) => {

    const router = useRouter()
    
    const { nombre } = service.attributes
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

  return (
    <article className='space-y-4 border-4 border-gris md:rounded-md py-4'>
        <div className='text-celeste text-6xl flex justify-center'>
            { elemento(url) }
        </div>
        <div className='capitalize text-2xl text-center'>{nombre}</div>
    </article>
  )
}

export default TipoService