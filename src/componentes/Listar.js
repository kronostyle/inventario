import React from 'react';
import {Link} from "react-router-dom";
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados:false,
        empleados:[]
 }
            }
    state = {  }

    cargarDatos(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>
        {
            console.log(datos)
            this.setState({ datosCargados:true, empleados:datosRespuesta})
        
        })
        .catch(console.log)


    }


    componentDidMount(){
        this.cargarDatos();
    }
    render() { 

        const{datosCargados, empleados}=this.state
        if(!datosCargados){return(<div>Cargando...</div>);}
        else{
        return ( <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                
                empleados.map(

                (empleado)=>(
                    
                <tr key={empleado.id}>
                    <td>{empleado.id}</td>
                    <td>{empleado.name}</td>
                    <td>{empleado.email}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link class="btn btn-warning" to={"/editar"}>Editar</Link>
                            <button type="button" class="btn btn-danger">Borrar</button>

                        </div>
                    </td>
                </tr>
                )
                )
                
                }
            </tbody>
        </table> 
        );
    }
 }
}
export default Listar;