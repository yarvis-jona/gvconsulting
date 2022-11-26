import LayoutMain from "../components/layouts"
import Image from "next/image"

import { GoDiffAdded } from 'react-icons/go'

const Nosotros = ({empresa, gerente}) => {

  console.log(empresa)
  console.log(gerente)

  const { descripcion, mision, vision, imagen} = empresa.attributes
  const { nombres, descripcion: descGerente, profesion, imagen: imgGerente } = gerente.attributes

  return (
    <LayoutMain titulo="Nosotros" empresa={empresa}>
      <main className="">
        <h1 className="font-primario text-6xl text-center text-azul py-10">Nosotros</h1>
        <section className="px-4 py-20 sm:grid sm:grid-cols-2 gap-x-10 gap-y-8 space-y-6 container mx-auto">
          <div className="flex items-center">
            <Image 
              src={imagen.data.attributes.formats.medium.url} 
              width={800}
              height={800}
              alt="imagen nosotros"
            />
          </div>
          <div className="space-y-6">
            <p className="font-primario font-bold text-2xl">Descripción</p>
            <p className="font-secundario text-lg">{descripcion}</p>
          </div>
          <div className="space-y-6">
            <p className="font-primario font-bold text-2xl">Misión</p>
            <p className="font-secundario text-lg">{mision}</p>
          </div>
          <div className="space-y-6">
            <p className="font-primario font-bold text-2xl">Visión</p>
            <p className="font-secundario text-lg">{vision}</p>
          </div>
        </section>

        <section className="bg-gris py-20">
          <h2 className="font-primario font-bold text-4xl text-center mb-4">Nuestros Valores</h2>
          <div className="container mx-auto md:grid md:grid-cols-3">
            <div className="space-y-4 p-4">
              <p className="text-center font-bold text-celeste text-4xl"><GoDiffAdded /></p>
              <h4 className="font-primario text-2xl font-bold">Compromiso</h4>
              <p className="font-secundario text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum ac diam sed lacinia. Nam tristique tortor ac est molestie vestibulum. Quisque posuere arcu id massa varius,</p>
            </div>

            <div className="space-y-4 p-4">
              <p className="text-center font-bold text-celeste text-4xl"><GoDiffAdded /></p>
              <h4 className="font-primario text-2xl font-bold">Responsabildad</h4>
              <p className="font-secundario text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum ac diam sed lacinia. Nam tristique tortor ac est molestie vestibulum. Quisque posuere arcu id massa varius,</p>
            </div>

            <div className="space-y-4 p-4">
              <p className="text-center font-bold text-celeste text-4xl"><GoDiffAdded /></p>
              <h4 className="font-primario text-2xl font-bold">Servicio</h4>
              <p className="font-secundario text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum ac diam sed lacinia. Nam tristique tortor ac est molestie vestibulum. Quisque posuere arcu id massa varius,</p>
            </div>

            <div className="space-y-4 p-4">
              <p className="text-center font-bold text-celeste text-4xl"><GoDiffAdded /></p>
              <h4 className="font-primario text-2xl font-bold">Confidencialidad</h4>
              <p className="font-secundario text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum ac diam sed lacinia. Nam tristique tortor ac est molestie vestibulum. Quisque posuere arcu id massa varius,</p>
            </div>

            <div className="space-y-4 p-4">
              <p className="text-center font-bold text-celeste text-4xl"><GoDiffAdded /></p>
              <h4 className="font-primario text-2xl font-bold">Honestidad</h4>
              <p className="font-secundario text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum ac diam sed lacinia. Nam tristique tortor ac est molestie vestibulum. Quisque posuere arcu id massa varius,</p>
            </div>

            <div className="space-y-4 p-4">
              <p className="text-center font-bold text-celeste text-4xl"><GoDiffAdded /></p>
              <h4 className="font-primario text-2xl font-bold">Etica</h4>
              <p className="font-secundario text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum ac diam sed lacinia. Nam tristique tortor ac est molestie vestibulum. Quisque posuere arcu id massa varius,</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:grid sm:grid-cols-2 gap-x-10 gap-y-8 space-y-6 container mx-auto">
          <div className="flex items-center">
            <Image 
              src={imgGerente.data.attributes.formats.medium.url} 
              width={800}
              height={800}
              alt="imagen nosotros"
            />
          </div>
          <div className="space-y-6">
            <p className="font-primario font-bold text-lg text-celeste">Gerente General</p>
            <p className="font-primario font-bold text-4xl">{nombres}</p>
            <p className="font-primario font-bold text-2xl">{profesion}</p>
            <p className="font-secundario text-lg">{descGerente}</p>
          </div>
          
        </section>
      </main>
    </LayoutMain>
  )
}

export default Nosotros

export async function getStaticProps () {

  const urlEmpresa = `${process.env.URL_BASE}/api/empresa?populate=imagen`
  const urlGerente = `${process.env.URL_BASE}/api/gerente?populate=imagen`

  const [ resEmpresa, resGerente ] = await Promise.all([
    fetch(urlEmpresa),
    fetch(urlGerente)
  ])

  const [ {data: empresa}, {data: gerente} ] = await Promise.all([
    resEmpresa.json(),
    resGerente.json()
  ])

  return {
    props: {
      empresa,
      gerente
    }
  }
}