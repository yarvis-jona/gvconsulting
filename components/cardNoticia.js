import Image from "next/image"
import Link from "next/link"

const CardNoticia = ({post}) => {
  console.log(post)
  return (
    <div className="bg-gris md:flex md:gap-4 border-2 border-gris">
      <Image
        src={post.attributes.imagen.data.attributes.formats.medium.url}
        width={300}
        height={300}
        alt={`imagen ${post.attributes.titulo}`}
        className="w-full md:w-auto"
      />
      <div className="space-y-4 p-4">
        <h3 className="font-primario font-bold text-2xl capitalize">{post.attributes.titulo}</h3>
        <p className="line-clamp-3 font-secundario text-lg">{post.attributes.descripcion}</p>
        <Link href={`/noticias/${post.attributes.url}`}>
          <button className="bg-celeste w-1/4 py-2 font-secundario font-bold text-white">Leer más</button>
        </Link>
      </div>
    </div>
  )
}

export default CardNoticia