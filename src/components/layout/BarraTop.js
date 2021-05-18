import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/autenticacion/authContext";

const BarraTop = () => {
  //esxtraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    
  }, [usuarioAutenticado]);

  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Bienvenido <span>{usuario.nombre}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sessión
        </button>
      </nav>
    </header>
  );
};

export default BarraTop;
