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
const columnas = ( clickDelete => [
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
        cell: (row) => <button onClick={clickDelete} id={ row.doc } className="btn btn-outline-primary"><i className="icon ion-md-trash"></i></button>,      
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

    /* Agregas funciones para el CRUD */



    
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
                                                <i className="icon ion-md-add"></i>
                                        </button>{" "}

                                        <button type="button" 
                                            className="btn btn-outline-primary" 
                                            data-toggle="modal" 
                                            data-target="#exampleModaledit">
                                                <i className="ion-md-refresh"></i>
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
                    <div class="modal fade" id="exampleModaladd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title " id="exampleModalLabel">Agregar usuario</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                <form action="">
                                    <div class="form-group ">
                                        <label for="" class="form-label">Tipo de Documento</label>
                                        <select id="typeDoc" class="form-control">
                                            <option selected>Elija el Tipo de Documento</option>
                                            <option value="1">Cedula Ciudadania</option>
                                            <option value="2">Tarjeta de Identidad</option>
                                            <option value="3">Registro Civil</option>
                                            <option value="4">DNI(Pasaporte)</option>
                                            <option value="5">Cedula Extranjeria</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">No. Documento</label>
                                        <input type="number" class="form-control" id="doc" placeholder="# Documento" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Nombre Completo</label>
                                        <input type="text" class="form-control" id="nom" placeholder="Nombre Completo" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Correo</label>
                                        <input type="email" class="form-control" id="mail" placeholder="name@example.com" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Telefono</label>
                                        <input type="number" class="form-control" id="tel" placeholder="# Telefono" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Direccion Residencia</label>
                                        <input type="number" class="form-control" id="dir" placeholder="Direccion Residencia" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Fecha Nacimiento</label>
                                        <input type="date" class="form-control" id="datetime" placeholder="yyyy-mm-dd" />
                                    </div>
                                </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal edit*/}
                    <div class="modal fade" id="exampleModaledit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title " id="exampleModalLabel">Agregar usuario</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                <form action="">
                                    <div class="form-group ">
                                        <label for="" class="form-label">Tipo de Documento</label>
                                        <select id="typeDoc" class="form-control">
                                            <option selected>Elija el Tipo de Documento</option>
                                            <option value="1">Cedula Ciudadania</option>
                                            <option value="2">Tarjeta de Identidad</option>
                                            <option value="3">Registro Civil</option>
                                            <option value="4">DNI(Pasaporte)</option>
                                            <option value="5">Cedula Extranjeria</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">No. Documento</label>
                                        <input type="number" class="form-control" id="doc" placeholder="# Documento" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Nombre Completo</label>
                                        <input type="text" class="form-control" id="nom" placeholder="Nombre Completo" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Correo</label>
                                        <input type="email" class="form-control" id="mail" placeholder="name@example.com" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Telefono</label>
                                        <input type="number" class="form-control" id="tel" placeholder="# Telefono" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Direccion Residencia</label>
                                        <input type="number" class="form-control" id="dir" placeholder="Direccion Residencia" />
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Fecha Nacimiento</label>
                                        <input type="date" class="form-control" id="datetime" placeholder="yyyy-mm-dd" />
                                    </div>
                                </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Consultar</button>
                                    <button type="button" class="btn btn-primary">Editar</button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>                                   
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