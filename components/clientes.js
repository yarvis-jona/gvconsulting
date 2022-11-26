import Image from "next/image"

const Clientes = ({cliente}) => {

    console.log(cliente.attributes.imagen.data.attributes.formats.thumbnail.url)

  return (
    <div className="space-y-4 border border-celeste m-4 p-4 rounded-md">
        <div className="flex justify-center">
            <Image
                src={cliente.attributes.imagen.data.attributes.formats.thumbnail.url}
                width={300}
                height={200}
                alt={`imagen ${cliente.attributes.nombre}`}
            />
        </div>
        <p className="font-secundario font-bold text-3xl text-center uppercase bg-gris p-4">{cliente.attributes.nombre}</p>
    </div>
  )
}

export default Clientes