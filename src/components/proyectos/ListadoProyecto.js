import React, { useContext, useEffect } from "react";
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
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyecto;
