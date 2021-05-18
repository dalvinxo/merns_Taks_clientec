import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const Login = (props) => {


  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const {autenticacion, mensaje, iniciarSesion} = authContext;

  const [usuarioState, setUsuario] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{

    if(autenticacion){
      props.history.push('/project');
    }

    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  // eslint-disable-next-line
  },[mensaje, autenticacion, props.history]);


  const { email, password } = usuarioState;

  const onChange = (e) => {
    setUsuario({
      ...usuarioState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitUsuario = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
      return;
    }

    // Enviar datos
    iniciarSesion({email, password})


  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}

      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmitUsuario}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Ingresar el Email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Ingresar el Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Iniciar Sesión"
            />
          </div>

          <Link to={"/signup"} className="enlace-cuenta">
            Obtener una cuenta
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
