import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Login = () => {

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };


  const onSubmitUsuario = e => {
    e.preventDefault();

    // Validar que no haya campos vacios

    // Enviar datos


  }


  return (
    <div className="form-usuario">
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

         
         <Link to={'/signup'} className="enlace-cuenta">
             Obtener una cuenta
         </Link>
        

        </form>
      </div>
    </div>
  );
};

export default Login;
