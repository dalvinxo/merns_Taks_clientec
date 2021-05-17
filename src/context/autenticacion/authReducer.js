import React from "react";

import {
  REGISTRO_ERROR,
  LOGIN_EXITOSO,
  CERRAR_SESION,
  LOGIN_ERROR,
  REGISTRO_EXITOSO,
  OBTENER_DATOS,
} from "../../types";

export default (state, action) => {
  switch (action.type) {

    case REGISTRO_EXITOSO:
      case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        autenticacion: true,
        mensaje: null,
      };
    case CERRAR_SESION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        autenticacion:null,
        token: null,
        usuario: null,
        mensaje: action.payload
      };

    case OBTENER_DATOS:
      return{
      ...state,
      autenticacion:true,
      usuario: action.payload
      }

      
    default:
      return state;
  }
};
