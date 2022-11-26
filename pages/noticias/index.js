import LayoutMain from "../../components/layouts"
import CardNoticia from "../../components/cardNoticia"

const Noticias = ({empresa, posts}) => {

  return (
    <LayoutMain titulo="Noticias" empresa={empresa}>
      <main>
        <h1 className="font-primario font-bold text-azul text-4xl text-center py-10">Noticias</h1>
        <section className="container mx-auto space-y-4 p-4">
          {
            posts.map((post ,index) => (
              <CardNoticia key={index} post={post}/>
            ))
          }
        </section>
      </main>
    </LayoutMain>
  )
}

export default Noticias

export async function getStaticProps () {

  const urlEmpresa = `${process.env.URL_BASE}/api/empresa?populate=imagen`
  const urlNoticias = `${process.env.URL_BASE}/api/noticias?populate=imagen`

  const [ resEmpresa, resNoticias ] = await Promise.all([
    fetch(urlEmpresa),
    fetch(urlNoticias)
  ])

  const [ {data: empresa}, {data: posts} ] = await Promise.all([
    resEmpresa.json(),
    resNoticias.json()
  ])

  return {
    props: {
      empresa,
      posts
    }
  }
}