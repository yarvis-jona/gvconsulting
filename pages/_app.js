import ServicioState from '../context/servicioState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ServicioState>
      <Component {...pageProps} />
    </ServicioState>
  )
}

export default MyApp
