import { useContext } from "react"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import LayoutMain from "../components/layouts"
import servicioContext from "../context/servicioContext"

const Contacto = ({empresa}) => {

  const router = useRouter()

  const ServicioState = useContext(servicioContext)
  const { nameServicio, categoria, limpiarServicio } = ServicioState

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const { nombre, correo, mensaje } = data

    const url = `https://api.whatsapp.com/send?phone=51986382385&text=Mi nombre es *${nombre}*, mi correo es *${correo}*, solicito informes sobre *${categoria} (${nameServicio})*, ${mensaje}`

    window.open(url)

    limpiarServicio()

    router.push('/servicios')
  }


  return (
    <LayoutMain titulo="Contacto" empresa={empresa}>
    
      <section className="container mx-auto md:grid md:grid-cols-2 py-16">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl md:text-6xl font-bold font-primario text-azul">Contacto</h2>
            <p className="mt-2 font-secundario text-center text-lg text-gray-600">
              Envianos un mensaje, en breve nos comunicaremos con usted.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6" action="#" method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-2 rounded-md shadow-sm">
              <div>
                <label for="nombre-apellido" className="sr-only">Ingrese su nombre y apellido</label>
                <input id="nombre-apellido" name="nombre" type="text" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Ingrese su nombre y apellido"
                {...register('nombre')}
                />
              </div>
              <div>
                <label for="email-address" className="sr-only">Ingrese su correo electronico</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Ingrese su correo electronico"
                {...register('correo')}
                />
              </div>
              <div>
                <label for="password" className="sr-only">Escriba un mensaje</label>
                <textarea id="password" name="password" type="password" autocomplete="current-password" className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Mensaje"
                {...register('mensaje')}
                ></textarea>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-celeste py-2 px-4 text-md font-secundario font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
        </div>

        <div className="flex justify-center md:justify-end p-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.8424747412796!2d-76.95066743538824!3d-12.191119691371258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b913734332db%3A0xaf47018ae38e466!2sVilla%20De%20Salvador%20Sector%20I%20Grupo%207%2C%20Cercado%20de%20Lima%2015828!5e0!3m2!1ses!2spe!4v1668950124341!5m2!1ses!2spe" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

    </LayoutMain>
  )
}

export default Contacto

export async function getStaticProps () {
  const respuesta = await fetch(`${process.env.URL_BASE}/api/empresa`)
  const {data: empresa} = await respuesta.json()
  console.log(empresa)

  return {
    props: {
      empresa
    }
  }
}