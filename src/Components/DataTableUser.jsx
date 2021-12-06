import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'

const tablaUsuarios = [
    { "typeDoc": "Cedula Ciudadania", "doc": 65432, "nom": "Andres Sierra", "mail": "andres@example.com", "tel": "345678", "dir": "cl 100 34-54", "datetime": "30/03/94" },
    { "typeDoc": "Cedula Ciudadania", "doc": 12345, "nom": "Eldildo Mercado", "mail": "edildo@example.com", "tel": "536368", "dir": "cra 56 4-3", "datetime": "12/02/95" },
    { "typeDoc": "Cedula Ciudadania", "doc": 76532, "nom": "Harold Combita", "mail": "harold@example.com", "tel": "986555", "dir": "cra 3 4-66", "datetime": "1/06/64" },
    { "typeDoc": "Cedula Ciudadania", "doc": 13456, "nom": "Jose Martinez", "mail": "jose@example.com", "tel": "456573", "dir": "cl 34 5-65", "datetime": "5/10/80" },
    { "typeDoc": "Cedula Ciudadania", "doc": 96566, "nom": "Oscar Barajas", "mail": "oscar@example.com", "tel": "345578", "dir": "cra 3 5-14", "datetime": "23/04/76" },
    { "typeDoc": "Cedula Ciudadania", "doc": 12357, "nom": "Alexandra Camargo", "mail": "alex@example.com", "tel": "444222", "dir": "cra 34 65-655", "datetime": "12/12/94" },
    { "typeDoc": "Tarjeta de identidad", "doc": 59800, "nom": "Miguel Gutierrez", "mail": "miguel@example.com", "tel": "234567", "dir": "cra 123 345-345", "datetime": "30/03/94" },
    { "typeDoc": "Tarjeta de identidad", "doc": 76767, "nom": "Rosa Guerrero", "mail": "rosa@example.com", "tel": "986754", "dir": "cl 43 23-66", "datetime": "04/03/20" },
    { "typeDoc": "Tarjeta de identidad", "doc": 54778, "nom": "Felipe Yepes", "mail": "felipe@example.com", "tel": "977554", "dir": "dig 45 55-322", "datetime": "30/02/19" },
    { "typeDoc": "Cedula Ciudadania", "doc": 53266, "nom": "Juan Rojas", "mail": "juan@example.com", "tel": "224678", "dir": "cl 99 67-44", "datetime": "06/03/80" },
    { "typeDoc": "Cedula Extranjeria", "doc": 12333, "nom": "Raul Simanca", "mail": "Raul@example.com", "tel": "886543", "dir": "cra 33 67-86", "datetime": "08/11/86" },
    { "typeDoc": "Cedula Extranjeria", "doc": 69645, "nom": "Vanessa Roa", "mail": "vane@example.com", "tel": "555788", "dir": "cra 86 35-67", "datetime": "26/09/60" },
    { "typeDoc": "Cedula Ciudadania", "doc": 12131, "nom": "Ivan Char", "mail": "ivan@example.com", "tel": "245679", "dir": "cl 13 56-234", "datetime": "37/01/94" },
    { "typeDoc": "Cedula Ciudadania", "doc": 65421, "nom": "Pablo Bosé", "mail": "pablo@example.com", "tel": "765654", "dir": "cl 64 21-67", "datetime": "28/06/95" },
    { "typeDoc": "Cedula Ciudadania", "doc": 68764, "nom": "Jhony Perez", "mail": "jhony@example.com", "tel": "345689", "dir": "cl 34 5-63", "datetime": "17/05/99" },
];

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