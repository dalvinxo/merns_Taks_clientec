import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Project from "./components/proyectos/Project";
import { BrowserRouter as RouterAdmin, Switch, Route } from "react-router-dom";

import ProyectoState from "./context/proyectos/ProyectoState";
import TareasState from "./context/tareas/TareasState";

function App() {
  return (
    <ProyectoState>
      <TareasState>
      <RouterAdmin>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/project" component={Project}></Route>
        </Switch>
      </RouterAdmin>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
