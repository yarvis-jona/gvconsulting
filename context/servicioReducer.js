
import {
    AGREGAR_NOMBRE_SERVICIO,
    LIMPIAR_STATE
} from '../type'

const servicioReducer = (state, action) => {
    switch (action.type) {
        case AGREGAR_NOMBRE_SERVICIO:
            const {nombre, categoria} = action.payload
            return {
                ...state,
                nameServicio: nombre,
                categoria
            }
        
        case LIMPIAR_STATE:
            return {
                ...state,
                nameServicio: null,
                categoria: null
            }
            
        default:
            return state
    }
}

export default servicioReducer