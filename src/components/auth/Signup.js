import React, { useContext, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";


const Signup = (props) => {

  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext);
  const {registrarUsuario, autenticacion, mensaje} = authContext;

  //En caso de que el usuario este autentificado o registrado  o este registrado duplicado
  useEffect(() => {
    
    if(autenticacion){
      props.history.push('./project');
    }

    if(mensaje){
      mostrarAlerta(mensaje.msg, 'alerta-error');
    }
// eslint-disable-next-line
  }, [mensaje, autenticacion])

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
    if(nombre.trim() === '' || 
    email.trim() === '' ||
    password.trim() === '' ||
    confirmar.trim() === ''){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    // Password minimo de 6 caracteres
    if(password.length < 6){
      mostrarAlerta('La contraseña debe tener minimo 6 caráctares', 'alerta-error');
      return;
    }

    // Verificacion de password
    if(password !== confirmar) {
      mostrarAlerta('Las contraseña no son iguales.', 'alerta-error');
    }

    // Enviar datos
    registrarUsuario({
      nombre,
      email,
      password
    })

  }


  return (
    <div className="form-usuario">
      {alerta? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ):null}
      <div className="contenedor-form sombra-dark">
        <h1>Registrar Cuenta</h1>

        <form onSubmit={onSubmitNewUsuario}>
            
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

         
         <Link to={'/'} className="enlace-cuenta">
         Iniciar Sesión
         </Link>
             
        

        </form>
      </div>
    </div>
  );
};

export default Signup
