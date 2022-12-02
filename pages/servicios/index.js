import LayoutMain from "../../components/layouts"
import Image from "next/image"
import Service from "../../components/servicio"


const Servicios = ({empresa, servicios}) => {

  console.log(servicios)
  return (
    <LayoutMain titulo="Servicios" empresa={empresa}>
      <main>
        <h1 className="font-primario font-bold text-azul text-3xl md:text-6xl text-center py-10">Nuestros Servicios</h1>
        <section className="p-4 pb-10 gap-6 sm:grid sm:grid-cols-3 container mx-auto">

          {
            servicios.map((servicio ,index) => (
              <Service key={index} servicio={servicio}/>
            ))
          }   
          
        </section>
      </main>
    </LayoutMain>
  )
}

export default Servicios

export async function getStaticProps () {

  const urlEmpresa = `${process.env.URL_BASE}/api/empresa?populate=imagen`
  const urlServicios = `${process.env.URL_BASE}/api/tipo-servicios?populate=*`

  const [ resEmpresa, resServicios ] = await Promise.all([
    fetch(urlEmpresa),
    fetch(urlServicios)
  ])

  const [ {data: empresa}, {data: servicios} ] = await Promise.all([
    resEmpresa.json(),
    resServicios.json()
  ])

  return {
    props: {
      empresa,
      servicios
    }
  }
}