import {
  REGISTRO_ERROR,
  LOGIN_EXITOSO,
  CERRAR_SESION,
  LOGIN_ERROR,
  REGISTRO_EXITOSO,
  OBTENER_DATOS,
} from "../../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
      // console.log(action.payload)
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticacion: true,
        mensaje: null,
        cargando: false,
      };

    case OBTENER_DATOS:
      return {
        ...state,
        autenticacion: true,
        usuario: action.payload,
        cargando: false,
      };

    case CERRAR_SESION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        autenticacion: null,
        token: null,
        usuario: null,
        mensaje: action.payload,
        cargando: false,
      };

    default:
      return state;
  }
};

export default authReducer;