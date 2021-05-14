import React, { useReducer } from "react";
import * as uuid from "uuid";

import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  ACTUAL_PROYECTO,
  ELIMINAR_PROYECTO
} from "../../types";

const ProyectoState = (props) => {

  const proyectosOBJ = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Internet" },
    { id: 3, nombre: "Hogar" },
    { id: 4, nombre: "Paciencia" },
  ];

  const initialState = {
    proyectos: [],
    nuevoProyecto: false,
    errorProyecto: false,
    proyectoActual: null
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
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectosOBJ,
    });
  };

  // Agregar nuevo proyecto
  const agregarProyecto = (project) => {
    project.id = uuid.v4();

    // Insertar el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTOS,
      payload: project,
    });
  };

  // Validar formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  // Seleccionar proyecto actual
  const seleccionarProyecto = projectId => {
    dispatch({
      type: ACTUAL_PROYECTO,
      payload: projectId
    });
  };


  // Eliminar proyecto 
  const eliminarProyecto = projectId =>{
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: projectId
    })
  }

  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        proyectoActual: state.proyectoActual,
        nuevoProyecto: state.nuevoProyecto,
        errorProyecto: state.errorProyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        seleccionarProyecto,
        eliminarProyecto
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
