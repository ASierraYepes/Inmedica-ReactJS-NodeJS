import React from 'react'
import AgendaTabla from './Components/AgendaTabla'
import Footer from './Components/Footer'
import HorariosExamenes from './Components/HorariosExamenes'
import NavbarDashboard from './Components/NavbarDashboard'
import NavUpDashboard from './Components/NavUpDashboard'

export default function Agenda() {
    return (
        <>
        <div id="body-dashboard">
        <div className="d-flex" id="content-wrapper">
            <NavbarDashboard/>
            <div className="w-100">
                <NavUpDashboard/>
                <div id="Contenido" className="bg-grey w-100">
                    <section className="bg-light py-3">
                        <div className="">
                            <div className="row" id="TituloDash">
                                <div className="col-lg-9 col-md-8">
                                    <h1 className="font-weight-bold mb-0">Agenda de horarios de exámenes</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className="container">
                            <div className="row" id="GraficoDash">
                                <div className="col-lg-4 my-3">
                                    <div className="card rounded-1">
                                        <div className="card-header bg-light">
                                            <h6 className="font-weight-bold mb-0">Agendar horario</h6>
                                        </div>
                                        <HorariosExamenes/>
                                    </div>
                                </div>
                                <div className="col-lg-8 my-3">
                                    <div className="card rounded-1">
                                        <div className="card-header bg-light">
                                            <h6 className="font-weight-bold mb-0">Horarios agendados</h6>
                                        </div>
                                        <AgendaTabla/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    </>
    )
}