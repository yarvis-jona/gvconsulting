import Image from "next/image"

const CardNoticia = ({post}) => {
  console.log(post)
  return (
    <div className="bg-gris flex gap-4 border-2 border-gris">
      <Image
        src={post.attributes.imagen.data.attributes.formats.medium.url}
        width={300}
        height={300}
        alt={`imagen ${post.attributes.titulo}`}
      />
      <div className="space-y-4 p-4">
        <h3 className="font-primario font-bold text-2xl capitalize">{post.attributes.titulo}</h3>
        <p className="line-clamp-3 font-secundario text-lg">{post.attributes.descripcion}</p>
        <button className="bg-celeste w-1/4 py-2 font-secundario font-bold text-white">Leer más</button>
      </div>
    </div>
  )
}

export default CardNoticia