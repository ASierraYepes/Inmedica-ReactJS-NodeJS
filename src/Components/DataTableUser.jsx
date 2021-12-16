import React from 'react';
import DataTable from 'react-data-table-component';



// import users from "../API/users.json";


// export function getApiData() {
//     return fetch('http://localhost:3000/users')
//         .then((data) => data.json())
//         .then((res) => res)
// }

// getApiData().then(res => {
//     console.log(data);
//     this.setState({ result: data })
// });


// const tablaUsuarios = users.users;
const columnas = ( handleClick => [
    {
        name: "Tipo de documento",
        selector: "typeDoc",
        sortable: true
    },
    {
        name: "Numero de documento",
        selector: "doc",
        sortable: true
    },
    {
        name: "Nombre completo",
        selector: "nom",
        sortable: true
    },
    {
        name: "Correo",
        selector: "mail",
        sortable: true
    },
    {
        name: "Contraseña",
        selector: "pass",
        sortable: true
    },
    {
        name: "Telefono",
        selector: "tel",
        sortable: true
    },
    {
        name: "Dirección",
        selector: "dir",
        sortable: true
    },
    {
        name: "Fecha de nacimiento",
        selector: "datetime",
        sortable: true
    },
    {
        cell: (row) => 
            <div>
                <button onClick={" "} id={ row.doc } 
                    type="button"
                    className="btn btn-outline-primary">                  
                        <i className="ion-ios-refresh"></i>
                </button>{" "}
                <button onClick={" "} id={ row.doc } 
                    className="btn btn-outline-primary">
                        <i className="icon ion-md-trash"></i>
                </button>
            </div>,      
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
	},
]);

const paginationOpciones = {
    rowsPerPageTex: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
}

class DataTableUser extends React.Component {

    state = {
        busquedas: ""
    }
    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    filtrarElementos = () => {
        var search = this.state.usuarios.filter(item => {
            if (item.doc.toString().includes(this.state.busqueda) ||
                item.nom.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda) || /*(Normalize): es para quitar la expresion de los acentos*/
                item.mail.toLowerCase().includes(this.state.busqueda) ||
                item.tel.toLowerCase().includes(this.state.busqueda)
            ) {
                return item;
            }
        });
        this.setState({ usuariosTabla: search });
    }

    componentDidMount() {
        fetch("users.json")
        .then(res => res.json())
        .then(data => this.setState({ usuarios: data.users, usuariosTabla : data.users }));   
    }

    handleButtonClick = (state) => {
        console.log('clicked');
    };
    handleChange = state => {
        console.log('state', state.selectedRows);

        this.setState({ selectedRows: state.selectedRows });
    };

    /*--------- CRUD ---------*/

    
    
    /*--------- FIN CRUD ---------*/

    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <div className="row" id="GraficoDash">
                            <div className="col-lg-12 my-3">
                                <div className="card rounded-1">

                                    {/* <Link to="">
                                        <button className="btn btn-add" type="submit"><i className="icon ion-md-add"></i> Agregar</button>
                                    </Link> */}
                                    {/* <div className="dropdown btn-action">
                                        <a className="text-dark dropdown-toggle" href="#" id=""
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon ion-ios-settings"></i> Acción
                                        </a>
                                        
                                        <div className="dropdown-menu btn-action" aria-labelledby="navbarDropdown">
                                            <Link to="/Dashboard" className="dropdown-item">
                                                <a><i className="icon ion-md-person-add"></i> Agregar</a>
                                            </Link>
                                            <Link to="" className="dropdown-item">
                                                <a><i className="icon ion-ios-refresh"></i> Actualizar</a>
                                            </Link>
                                            <Link to="" className="dropdown-item">
                                                <a><i className="icon ion-ios-trash"></i> Eliminar</a>
                                            </Link>                                        
                                        </div>
                                    </div> */}

                                    <div>
                                        <button type="button" 
                                            className="btn btn-outline-primary modaladd" 
                                            data-toggle="modal" 
                                            data-target="#exampleModaladd">
                                                <i className="ion-md-add"></i>
                                        </button>{" "}

                                        <button type="button" 
                                            className="btn btn-outline-primary" 
                                            data-toggle="modal" 
                                            data-target="#exampleModaledit">
                                                <i className="ion-ios-refresh"></i>
                                        </button>
                                        
                                    </div>

                                    <div className="card-header bg-light">
                                        <h6 className="font-weight-bold mb-0">Tabla general de usuarios registrados</h6>
                                    </div>
                                    <div className="table-responsive">
                                        <div className="barraBusqueda">
                                            <input type="text"
                                                placeholder="Filtrar"
                                                className="form-control"
                                                name="busqueda"
                                                value={this.state.busqueda}
                                                onChange={this.onChange}
                                            />
                                        </div>
      
                                        <DataTable
                                            columns={columnas (this.handleButtonClick)}
                                            data={this.state.usuariosTabla}
                                            pagination
                                            paginationComponentOptions={paginationOpciones}
                                            fixedHeader
                                            fixedHeaderScrollHeight="600px"
                                            noDataComponent={<span>No se encontró ningún elemento</span>}
                                            highlightOnHover
		                                    pointerOnHover
                                            onRowSelected={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal add*/}
                    <div className="modal fade" 
                        id="exampleModaladd" 
                        tabindex="-1" 
                        role="dialog" 
                        aria-labelledby="exampleModalLabel" 
                        aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title " id="exampleModalLabel">Agregar usuario</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <form action="">                      
                                    <div className="form-group">
                                        <label for="" className="form-label">No. Documento</label>
                                        <input type="number" className="form-control" id="doc" placeholder="# Documento" />
                                    </div>
                                    <div className="form-group ">
                                        <label for="" className="form-label">Tipo de Documento</label>
                                        <select id="typeDoc" className="form-control">
                                            <option selected>Elija el Tipo de Documento</option>
                                            <option value="Cedula de Ciudadania">Cedula Ciudadania</option>
                                            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                            <option value="Registro Civil">Registro Civil</option>
                                            <option value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                                            <option value="Cedula Extranjeria">Cedula Extranjeria</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Nombre Completo</label>
                                        <input type="text" className="form-control" id="nom" placeholder="Nombre Completo" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Correo</label>
                                        <input type="email" className="form-control" id="mail" placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Contraseña</label>
                                        <input type="password" className="form-control" id="pass" placeholder="Ingrese su contraseña" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Telefono</label>
                                        <input type="number" className="form-control" id="tel" placeholder="# Telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Direccion Residencia</label>
                                        <input type="text" className="form-control" id="dir" placeholder="Direccion Residencia" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Fecha Nacimiento</label>
                                        <input type="date" className="form-control" id="datetime" placeholder="yyyy-mm-dd" />
                                    </div>
                                    <div className="form-group ">
                                        <label for="" className="form-label">Rol</label>
                                        <select id="rol" className="form-control">
                                            <option selected>Elija rol</option>
                                            <option value="Administrador">Administrador</option>
                                            <option value="Paciente">Paciente</option>
                                            <option value="Usuario Interno">Usuario Interno</option>
                                        </select>
                                    </div>
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-primary" onClick={""}>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal edit*/}
                    <div className="modal fade" 
                        id="exampleModaledit" 
                        tabindex="-1" 
                        role="dialog" 
                        aria-labelledby="exampleModalLabel" 
                        aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title " id="exampleModalLabel">Editar usuario</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <form action="">
                                    <div className="form-group">
                                        <label for="" className="form-label">Consultar No. Documento</label>
                                        <input type="number" className="form-control" id="doc" placeholder="# Documento" />
                                    </div>
                                    <div className="form-group ">
                                        <label for="" className="form-label">Tipo de Documento</label>
                                        <select id="typeDoc" className="form-control">
                                        <option selected>Elija el Tipo de Documento</option>
                                            <option value="Cedula de Ciudadania">Cedula Ciudadania</option>
                                            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                            <option value="Registro Civil">Registro Civil</option>
                                            <option value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                                            <option value="Cedula Extranjeria">Cedula Extranjeria</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Nombre Completo</label>
                                        <input type="text" className="form-control" id="nom" placeholder="Nombre Completo" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Correo</label>
                                        <input type="email" className="form-control" id="mail" placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Telefono</label>
                                        <input type="number" className="form-control" id="tel" placeholder="# Telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Direccion Residencia</label>
                                        <input type="text" className="form-control" id="dir" placeholder="Direccion Residencia" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="form-label">Fecha Nacimiento</label>
                                        <input type="date" className="form-control" id="datetime" placeholder="yyyy-mm-dd" />
                                    </div>
                                    <div className="form-group ">
                                        <label for="" className="form-label">Rol</label>
                                        <select id="rol" className="form-control">
                                            <option selected>Elija rol</option>
                                            <option value="Administrador">Administrador</option>
                                            <option value="Paciente">Paciente</option>
                                            <option value="Usuario Interno">Usuario Interno</option>
                                        </select>
                                    </div>
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={""}>Consultar</button>
                                    <button type="button" className="btn btn-primary" onClick={""}>Editar</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default DataTableUser;