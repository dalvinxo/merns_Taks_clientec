import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import AlertaContext from "../../context/alertas/alertaContext";

const ListadoProyecto = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectoContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //Obtener proyectos cuando carga el componente
  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
    // eslint-disable-next-line

  }, [mensaje, mostrarAlerta,obtenerProyectos]);

  if (proyectos.length === 0) return <p>No hay proyectos, ¡Agregar uno!</p>;

  return (
    <ul className="listado-proyectos">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      {proyectos.map((proyecto) => (
        <TransitionGroup  key={proyecto._id} >
          <CSSTransition timeout={200} className="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        </TransitionGroup>
      ))}
    </ul>
  );
};

export default ListadoProyecto;
