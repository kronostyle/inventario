import './App.css';
import Listar from "./componentes/Listar.js";
import Crear from "./componentes/Crear.js";
import Editar from "./componentes/Editar.js";
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  return (
    <Router>
          <nav className="navbar navbar-expand navbar-light bg-light">
              <div className="nav navbar-nav">
                  <Link className="nav-item nav-link active" to={"/"}>Sistema <span class="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link" to={"/crear"}>Crear Empleado</Link>
                  <Link className="nav-item nav-link" to={"/editar"}>Editar Empleado</Link>
              </div>
          </nav>
         <div className="container">
          <br></br>
          </div>
<div className="container">
     
      <Route exact path="/" component={Listar}></Route>
      <Route path="/crear" component={Crear}></Route>
      <Route path="/editar" component={Editar}></Route>
        
        
    </div>
    </Router>
    
  );
}

export default App;
