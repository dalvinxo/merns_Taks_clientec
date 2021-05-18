import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  ACTUAL_PROYECTO,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR
} from "../../types";

const ProyectoReducer = (state, action) => {
  switch (action.type) {

    case FORMULARIO_PROYECTO:
      return {
        ...state,
        nuevoProyecto: true
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload
      };

    case AGREGAR_PROYECTOS:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        nuevoProyecto: false,
        errorProyecto: false
      };

    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorProyecto:true
      };
    
    case ACTUAL_PROYECTO:
        return {
            ...state,
            proyectoActual: state.proyectos.filter(project => project._id === action.payload)
        }
    
    case ELIMINAR_PROYECTO:
        return {
                ...state,
                proyectos: state.proyectos.filter(project => project._id !== action.payload),
                proyectoActual: null
        }

        case PROYECTO_ERROR:
          return {
            ...state,
            mensaje: action.payload
          }

    default:
      return state;
  }
};

export default ProyectoReducer;