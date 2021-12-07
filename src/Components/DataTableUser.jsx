import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
// import users from "../API/users.json";


export function getApiData() {
    return fetch('http://localhost:3000/users')
        .then((data) => data.json())
        .then((res) => res)
}

getApiData().then(res => {
    console.log(data);
    this.setState({ result: data })
});


// const tablaUsuarios = users.users;
const columnas = [
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
];

const paginationOpciones = {
    rowsPerPageTex: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
}

class DataTableUser extends Component {
    state = {
        busquedas: ""
    }
    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    filtrarElementos = () => {
        var search = tablaUsuarios.filter(item => {
            if (item.doc.toString().includes(this.state.busqueda) ||
                item.nom.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda) || /*(Normalize): es para quitar la expresion de los acentos*/
                item.mail.toLowerCase().includes(this.state.busqueda) ||
                item.tel.toLowerCase().includes(this.state.busqueda)
            ) {
                return item;
            }
        });
        this.setState({ usuarios: search });
    }

    componentDidMount() {
        this.setState({ usuarios: tablaUsuarios });
    }



    
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
                                    <div className="dropdown btn-action">
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
                                            columns={columnas}
                                            data={this.state.usuarios}
                                            pagination
                                            paginationComponentOptions={paginationOpciones}
                                            fixedHeader
                                            fixedHeaderScrollHeight="600px"
                                            noDataComponent={<span>No se encontró ningún elemento</span>}
                                        />
                                    </div>
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