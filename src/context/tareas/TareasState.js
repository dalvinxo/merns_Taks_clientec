import React, { useReducer } from "react";
import * as uuid from "uuid";

import TareasContext from "./TareasContext";
import TareasReducer from "./TareasReducer";

import {
  TAREA_PROYECTOS,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  ACTUAL_TAREA,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA
} from "../../types";

const TareasState = (props) => {
  const stateInicial = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: true, proyectoId: 2 },
      { id: 3, nombre: "Elegir Iterar", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Seleccionar Desayuno", estado: false, proyectoId: 4 },
      { id: 5, nombre: "Peatonal", estado: true, proyectoId: 1 },
      { id: 6, nombre: "Elegir Fuente", estado: true, proyectoId: 2 },
      { id: 7, nombre: "Imagen", estado: false, proyectoId: 2 },
      { id: 8, nombre: "Todo bien", estado: false, proyectoId: 3 },
    ],
    tareasProyectos: null,
    errorTarea: false,
    tareaSeleccionada: null
  };

  const [state, dispatch] = useReducer(TareasReducer, stateInicial);

  const seleccionarTareaProyecto = (proyectoId) => {
    dispatch({
      type: TAREA_PROYECTOS,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tareaobj) => {
    tareaobj.id = uuid.v4();

    dispatch({
      type: AGREGAR_TAREA,
      payload: tareaobj,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = (tareaId) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tareaId
    });
  };

  const estadoTarea = tarea =>{
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea
    });
  };

  const guardarTarea = tarea =>{
    dispatch({
      type: ACTUAL_TAREA,
      payload: tarea
    })
  }

  const actualizarTarea = tarea =>{
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    })
  }

  const limpiarTareaSeleccionada = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareasContext.Provider
      value={{
        tareas: state.tareas,
        errorTarea: state.errorTarea,
        tareasProyectos: state.tareasProyectos,
        tareaSeleccionada: state.tareaSeleccionada,
        seleccionarTareaProyecto,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        estadoTarea,
        guardarTarea,
        actualizarTarea,
        limpiarTareaSeleccionada
      }}
    >
      {props.children}
    </TareasContext.Provider>
  );
};

export default TareasState;
