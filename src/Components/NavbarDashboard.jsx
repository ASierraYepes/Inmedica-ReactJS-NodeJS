import React from 'react'

export default function NavbarDashboard() {
    return (
        <>
            <div id="sidebar-container" className="bg-primary">
                <div className="logo">
                    <a href="#"><img src="img/microscopio2.png" className="d-block  mx-auto" width="90" height="90" alt="img 1"/>
                        <h4 className ="text-light text-center font-weight-bold mb-0">INMEDICA</h4></a>
                </div>
                <div className="menu">
                    <a href="#" className="d-block text-light p-3 border-0"><i className="icon ion-md-speedometer lead mr-2"></i>Dashboard</a>
                    <a href="#" className="d-block text-light p-3 border-0"><i className="icon ion-md-today lead mr-2"></i>Agenda</a>
                    <a href="#" className="d-block text-light p-3 border-0"><i className="icon ion-md-eye lead mr-2"></i>Exámenes</a>
                    <a href="#" className="d-block text-light p-3 border-0"><i className="icon ion-md-done-all lead mr-2"></i>Resultados</a>
                    <a href="#" className="d-block text-light p-3 border-0"> <i className="icon ion-md-person  lead mr-2"></i>Usuarios</a>
                </div>
            </div>
        </>
    )
}
