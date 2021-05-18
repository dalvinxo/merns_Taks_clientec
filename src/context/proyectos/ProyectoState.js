import React, { useReducer } from "react";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";

import clienteAxios from "../../config/axios";

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  ACTUAL_PROYECTO,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR
} from "../../types";

const ProyectoState = (props) => {

  const initialState = {
    proyectos: [],
    nuevoProyecto: false,
    errorProyecto: false,
    proyectoActual: null,
    mensaje: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtener los proyectos
  const obtenerProyectos = async () => {
    try {
      const resultado = await clienteAxios.get("/api/proyectos");

      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Agregar nuevo proyecto
  const agregarProyecto = async (project) => {
    try {
      const resultado = await clienteAxios.post("/api/proyectos", project);

      // Insertar el proyecto en el state
      dispatch({
        type: AGREGAR_PROYECTOS,
        payload: resultado.data,
      });
    } catch (error) {
      
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }


      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });
    }
  };

  // Validar formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  // Seleccionar proyecto actual
  const seleccionarProyecto = async projectId => {

    try {
      dispatch({
        type: ACTUAL_PROYECTO,
        payload: projectId,
      });
    } catch (error) {
      
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }


      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });

    }
  };

  // Eliminar proyecto
  const eliminarProyecto = async (projectId) => {
    
    //console.log(projectId);
    try {
      await clienteAxios.delete(`/api/proyectos/${projectId}`)
      
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: projectId,
      });

    } catch (error) {

      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }


      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });

    }

    
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        proyectoActual: state.proyectoActual,
        nuevoProyecto: state.nuevoProyecto,
        errorProyecto: state.errorProyecto,
        mensaje: state.mensaje,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        seleccionarProyecto,
        eliminarProyecto,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
