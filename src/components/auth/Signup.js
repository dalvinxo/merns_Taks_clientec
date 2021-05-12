import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Signup = () => {

  const [newusuario, setNewUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  const {nombre, email, password, confirmar } = newusuario;

  const onChange = (e) => {
    setNewUsuario({
      ...newusuario,
      [e.target.name]: e.target.value,
    });
  };


  const onSubmitNewUsuario = e => {
    e.preventDefault();

    // Validar que no haya campos vacios
    

    // Password minimo de 6 caracteres

    // Verificacion de password

    // Enviar datos


  }


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Registrar Cuenta</h1>

        <form>
            
        <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Ingresar el Nombre"
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="password">Contrase</label>
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
            <label htmlFor="confirmar">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Repetir su Contraseña"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Registrar"
            />
          </div>

         
         <Link to={'/Login'} className="enlace-cuenta">
         Iniciar Sesión
         </Link>
             
        

        </form>
      </div>
    </div>
  );
};

export default Signup
