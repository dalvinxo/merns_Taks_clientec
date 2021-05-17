import React, { useReducer } from "react";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

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

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      console.log(respuesta.data);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });

      //Obtener el usuario autentificacion
      usuarioAutenticado();
    } catch (error) {
      //console.log(error.response);

      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  const usuarioAutenticado = async () => {

    const token = localStorage.getItem('token');
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      //console.log(respuesta);

      dispatch({
        type: OBTENER_DATOS,
        payload: respuesta.data
      });
    } catch (error) {
      //console.log(error.response);

      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const iniciarSesion = async datos => {
    try {

      const respuesta = await clienteAxios.post('/api/auth', datos);
      //console.log(respuesta);

      dispatch({
        type:LOGIN_EXITOSO,
        payload: respuesta
      })

      usuarioAutenticado();

    } catch (error) {
      //console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      });

    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticacion: state.autenticacion,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
