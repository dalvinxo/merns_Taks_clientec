import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import BarraTop from "../layout/BarraTop";
import FormTarea from "../tareas/FormTarea";
import ListadoTarea from "../tareas/ListadoTarea";
import AuthContext from "../../context/autenticacion/authContext";

const Project = () => {

  //extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />
      <section className="seccion-principal">
        <BarraTop />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTarea />
          </div>
        </main>
      </section>
    </div>
  );

};

export default Project;
