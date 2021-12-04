import React from 'react'

export default function NavUpDashboard() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline position-relative d-inline-block my-2">
                            <input className="form-control" type="text" placeholder="Buscar" aria-label="Buscar"/>
                            <button className ="btn position-absolute btn-search" type ="submit"><i className ="icon ion-md-search"></i></button>
                        </form>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="icon ion-md-person mr-2"></i>Administrador
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Perfil</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Cerrar sesión</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}