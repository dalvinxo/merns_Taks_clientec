import React, { useReducer } from "react";

import AuthContext from "../../context/autenticacion/authContext";
import authReducer from "../../context/autenticacion/authReducer";

import {
  REGISTRO_ERROR,
  LOGIN_EXITOSO,
  CERRAR_SESION,
  LOGIN_ERROR,
  REGISTRO_EXITOSO,
  OBTENER_DATOS,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticacion: null,
    usuario: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticacion: state.autenticacion,
        usuario: state.usuario,
        mensaje: state.mensaje,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
