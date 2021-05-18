import {
  TAREA_PROYECTOS,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ACTUAL_TAREA,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareasReducer = (state, action) => {

  switch (action.type) {
    case TAREA_PROYECTOS:
      return {
        ...state,
        tareasProyectos: action.payload
      };

    case AGREGAR_TAREA:
      return {
        ...state,
        tareasProyectos: [action.payload, ...state.tareasProyectos],
        errorTarea: false
      };

    case VALIDAR_TAREA:
      return {
        ...state,
        errorTarea: true,
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareasProyectos: state.tareasProyectos.filter((tarea) => tarea._id !== action.payload),
      };

    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tareasProyectos: state.tareasProyectos.map((tarea) =>
          tarea._id === action.payload._id ? action.payload : tarea
        ),
      };

    case ACTUAL_TAREA:
      return {
        ...state,
        tareaSeleccionada: action.payload,
      };

    case LIMPIAR_TAREA:
      return {
        ...state,
        tareaSeleccionada: null,
      };

    default:
      return state;
  }
};

export default TareasReducer;