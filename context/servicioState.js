import { useReducer } from 'react'
import servicioContext from './servicioContext'
import servicioReducer from './servicioReducer'

import {
    AGREGAR_NOMBRE_SERVICIO,
    LIMPIAR_STATE
} from '../type'

const INITIAL_STATE = {
    nameServicio: null,
    categoria: null
}

const ServicioState = ({children}) => {
    const [ state, dispatch] = useReducer(servicioReducer, INITIAL_STATE)
    const { nameServicio, categoria } = state

    const añadirServicio = (data) => {
        try {
            dispatch({
                type: AGREGAR_NOMBRE_SERVICIO,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const limpiarServicio = () => {
        try {
            dispatch({
                type: LIMPIAR_STATE
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <servicioContext.Provider
            value={{
                nameServicio,
                categoria,
                añadirServicio,
                limpiarServicio
            }}
        >
            {children}
        </servicioContext.Provider>
    )
}

export default ServicioState