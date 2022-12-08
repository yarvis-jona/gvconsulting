import LayoutMain from "../../components/layouts"
import { formatearFecha } from "../../utils/helpers"

const Noticia = ({empresa, noticia}) => {

  const imagenUrl = noticia[0].attributes.imagen.data.attributes.formats.medium.url
  
  const { titulo, descripcion, publishedAt } = noticia[0].attributes

  return (
    <LayoutMain titulo="noticia" empresa={empresa}>
      <section style={{ backgroundImage : `url(${imagenUrl})` }} className="bg-cover bg-center bg-no-repeat">
        <div className="h-[20rem] md:h-[32rem] flex justify-center items-center">
          <h1 className="bg-gris/60 w-2/3 text-center font-primario font-bold text-2xl md:text-6xl text-azul capitalize py-4 rounded-md">{titulo}</h1>
        </div>
      </section>

      <section className="container mx-auto bg-gris p-4 space-y-4 font-secundario">
        <div className="text-red-500 text-sm">
          <span className="font-bold">Publicado: </span> {formatearFecha(publishedAt)}
        </div>
        <div className="text-xl text-justify leading-loose">{descripcion}</div>
      </section>
    </LayoutMain>
  )
}

export default Noticia

export async function getStaticPaths () {

  const respuesta = await fetch(`${process.env.URL_BASE}/api/noticias`)
  const { data } = await respuesta.json()

  const paths = data.map(noticia => ({
    params: {
      url: noticia.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({params: {url}}) {

  const urlEmpresa = `${process.env.URL_BASE}/api/empresa?populate=imagen`
  const urlNoticia = `${process.env.URL_BASE}/api/noticias?filters[url]=${url}&populate=*`

  const [ resEmpresa, resNoticia ] = await Promise.all([
    fetch(urlEmpresa),
    fetch(urlNoticia)
  ])

  const [ {data: empresa}, {data: noticia} ] = await Promise.all([
    resEmpresa.json(),
    resNoticia.json()
  ])

  return {
    props: {
      empresa,
      noticia
    }
  }
}