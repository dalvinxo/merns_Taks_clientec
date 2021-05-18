import React, { useReducer } from "react";

import TareasContext from "./TareasContext";
import TareasReducer from "./TareasReducer";

import clienteAxios from "../../config/axios";

import {
  TAREA_PROYECTOS,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ACTUAL_TAREA,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareasState = (props) => {
  const stateInicial = {
    tareasProyectos: [],
    errorTarea: false,
    tareaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(TareasReducer, stateInicial);

  const seleccionarTareaProyecto = async (proyecto) => {
    try {
      const resultado = await clienteAxios.get("/api/tareas", {
        params: { proyecto },
      });

      dispatch({
        type: TAREA_PROYECTOS,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarTarea = async (tareaobj) => {
    try {
      const resultado = await clienteAxios.post("/api/tareas", tareaobj);
      // console.log(resultado.data.tarea,tareaobj);

      dispatch({
        type: AGREGAR_TAREA,
        payload: resultado.data.tarea,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = async (tareaId, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${tareaId}`, {
        params: { proyecto },
      });

      dispatch({
        type: ELIMINAR_TAREA,
        payload: tareaId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarTarea = async (tarea) => {
    try {
      const resultado = await clienteAxios.put(
        `/api/tareas/${tarea._id}`,
        tarea
      );
      //console.log(resultado.data.tareaExists);

      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: resultado.data.tareaExists,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const guardarTarea = (tarea) => {
    dispatch({
      type: ACTUAL_TAREA,
      payload: tarea,
    });
  };

  const limpiarTareaSeleccionada = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareasContext.Provider
      value={{
        errorTarea: state.errorTarea,
        tareasProyectos: state.tareasProyectos,
        tareaSeleccionada: state.tareaSeleccionada,
        seleccionarTareaProyecto,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        guardarTarea,
        actualizarTarea,
        limpiarTareaSeleccionada,
      }}
    >
      {props.children}
    </TareasContext.Provider>
  );
};

export default TareasState;
