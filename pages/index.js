import LayoutMain from "../components/layouts";
import Service from "../components/servicio";
import Clientes from "../components/clientes";
import Image from "next/image";

export default function Home({empresa, hero, servicios, clientes}) {

  const { titulo, contenido } = hero.attributes
   
  return (
    <LayoutMain titulo="Inicio" empresa={empresa}>
      <section className="bg-[url('https://res.cloudinary.com/dgd9b9ulz/image/upload/v1668969758/large_imagenhero_70c4f812f1.jpg')] bg-cover bg-center bg-no-repeat" >
        <div className="h-[32rem] container mx-auto flex justify-center items-center md:justify-start">
          <article className="bg-gris/60 w-1/2 p-6 space-y-4 rounded-md">
            <h2 className="font-primario font-bold text-2xl md:text-5xl text-azul uppercase">{titulo}</h2> 
            <p className="font-secundario text-sm md:text-lg">{contenido}</p>
            <button className="font-secundario font-bold text-md text-white bg-celeste rounded-md px-4 py-2">Conoce más</button>
          </article>
        </div>
      </section>

      <section>
        <h2 className="font-primario font-bold text-3xl md:text-6xl text-center py-10">Nuestros Servicios</h2>
        <div className="p-4 pb-10 gap-6 sm:grid sm:grid-cols-3 container mx-auto">
          {
            servicios.map((servicio ,index) => (
              <Service key={index} servicio={servicio}/>
            ))
          } 
        </div>
      </section>

      <section className="bg-black">
        <div className="container mx-auto px-4 py-10 md:py-20 space-y-6 md:grid md:grid-cols-2 gap-6">
          <Image
              src={empresa.attributes.imagen.data.attributes.formats.medium.url}
              width={800}
              height={800}
              alt={`imagen ${empresa.attributes.nombre}`}
          />
          <div className="space-y-6 text-white">
            <h2 className="font-primario font-bold text-3xl md:text-6xl">¿Quienes Somos?</h2>
            <p className="font-secundario">{empresa.attributes.descripcion}</p>
            <button className="font-secudario font-bold bg-celeste px-6 py-2 rounded-md">Conoce más</button>
          </div>
        </div>
      </section>
        
      <section className="container mx-auto py-10 md:py-20">
        <h2 className="font-primario font-bold text-3xl md:text-6xl text-center py-6">Clientes</h2>
        <div className="md:grid md:grid-cols-3">
          {
            clientes.map((cliente ,index) => (
              <Clientes 
                key={index} 
                cliente={cliente}
              />
            ))
          }
        </div>
      </section>

      <section className="flex justify-center items-center bg-celeste h-96">
          <div className="w-2/3 text-center p-6 space-y-6">
            <p className="font-primario font-bold text-white text-3xl md:text-6xl uppercase">contactanos y resuelve todas tus preguntas acerca de nosotros</p>
            <button className="font-secundario font-bold px-6 py-4 rounded-md bg-white text-celeste">Envianos un mesaje</button>
          </div>
      </section>
    </LayoutMain>
  )
}

export async function getStaticProps () {

  const urlEmpresa = `${process.env.URL_BASE}/api/empresa?populate=imagen`
  const urlHero = `${process.env.URL_BASE}/api/hero?populate=imagen`
  const urlServicios = `${process.env.URL_BASE}/api/tipo-servicios?populate=*`
  const urlClientes = `${process.env.URL_BASE}/api/clientes?populate=imagen`

  const [ resEmpresa, resHero, resServicios, resClientes ] = await Promise.all([
    fetch(urlEmpresa),
    fetch(urlHero),
    fetch(urlServicios),
    fetch(urlClientes)
  ])

  const [ {data: empresa}, {data: hero}, {data: servicios}, {data: clientes} ] = await Promise.all([
    resEmpresa.json(),
    resHero.json(),
    resServicios.json(),
    resClientes.json()
  ])

  return {
    props: {
      empresa,
      hero,
      servicios,
      clientes
    }
  }
}
