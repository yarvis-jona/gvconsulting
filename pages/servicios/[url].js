import LayoutMain from "../../components/layouts"
import Image from "next/image"
import TipoService from "../../components/tipoService"

const Servicio = ({empresa, servicio, tipoServicios}) => {

    const {nombre, descripcion} = servicio[0].attributes
    const {data: services} = tipoServicios[0].attributes.servicios
    
  return (
    <LayoutMain titulo="servicio" empresa={empresa}>
        <section>
          <div className="container mx-auto md:grid md:grid-cols-2 md:py-20 md:gap-6">
            <div className="md:flex md:items-center">
              <Image
                  src={servicio[0].attributes.imagen.data.attributes.formats.medium.url}
                  alt={`imagen ${nombre}`}
                  width={800}
                  height={800}
              />
            </div>
            <div className="p-4 space-y-4">
              <h1 className="font-primario font-bold uppercase text-2xl md:text-4xl text-center">{nombre}</h1>
              <p className="font-secundario text-lg">{descripcion}</p>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="container mx-auto p-4 space-y-6">
            <h2 className="font-primario font-bold text-2xl md:text-4xl text-center">{`Realizamos los siguientes servicios de ${nombre}`}</h2>
            <div>
              {
                services.map((service ,index) => (
                  <TipoService key={index} service={service} categoria={nombre}/>
                ))
              }
            </div>
          </div>
        </section>
    </LayoutMain>
  )
}

export default Servicio

export async function getStaticPaths () {
    const respuesta = await fetch(`${process.env.URL_BASE}/api/tipo-servicios`)
    const { data } = await respuesta.json()

    const paths = data.map(servicio => ({
        params: {
            url: servicio.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ({params: {url}}) {

    const urlEmpresa = `${process.env.URL_BASE}/api/empresa?populate=imagen`
    const urlServicio = `${process.env.URL_BASE}/api/tipo-servicios?filters[url]=${url}&populate=*`
    const urlTipoServicios = `${process.env.URL_BASE}/api/tipo-servicios?filters[url]=${url}&populate[servicios][populate][0]=imagen`
  
    const [ resEmpresa, resServicio, resTipoServicios ] = await Promise.all([
      fetch(urlEmpresa),
      fetch(urlServicio),
      fetch(urlTipoServicios)
    ])
  
    const [ {data: empresa}, {data: servicio}, {data: tipoServicios} ] = await Promise.all([
      resEmpresa.json(),
      resServicio.json(),
      resTipoServicios.json()
    ])
  
    return {
      props: {
        empresa,
        servicio,
        tipoServicios
      }
    }
  }