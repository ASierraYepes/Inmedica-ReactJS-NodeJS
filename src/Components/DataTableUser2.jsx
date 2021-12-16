import React from 'react';
import { Link } from 'react-router-dom';

const DataTableUser2 = (props) => {
    const { data } = props;
    return (
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
                            <div className="tabla">
                                <table className="text-dark table-bordered tablasim table table-striped table-hover" >
                                    <thead className="font-weight-bold">
                                        <td>Tipo de documento</td>
                                        <td>Documento</td>
                                        <td>Nombre</td>
                                        <td>Correo</td>
                                        <td>Telefono</td>
                                        <td>Dirección</td>
                                        <td>Fecha de nacimiento</td>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(user => {
                                                return (
                                                    <tr>
                                                        <td> {user.typeDoc }</td>
                                                        <td> {user.doc }</td>
                                                        <td> {user.nom }</td>
                                                        <td> {user.mail }</td>
                                                        <td> {user.tel }</td>
                                                        <td> {user.dir }</td>
                                                        <td> {user.datetime }</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>      
    );                  

}
export default DataTableUser2