import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoProyecto = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = proyectoContext;

  //Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0) return <p>No hay proyectos, ¡Agregar uno!</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} className="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyecto;
