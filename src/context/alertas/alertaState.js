import React, { useReducer } from "react";
import alertaContext from "../../context/alertas/alertaContext";
import alertaReducer from "../../context/alertas/alertaReducer";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";

const AlertaState = (props) => {
  const stateInitial = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(alertaReducer, stateInitial);

  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg:msg,
        categoria,
      },
    });

    //limpiar alerta despues de 5seg.
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 5000);
  };

  return (
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta
      }}
    >
      {props.children}
    </alertaContext.Provider>
  );
};

export default AlertaState;
