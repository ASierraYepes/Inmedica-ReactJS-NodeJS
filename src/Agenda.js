import React from 'react'
import AgendaExam from './Components/AgendaExam'
import AgendaExamTable from './Components/AgendaExamTable'
import Footer from './Components/Footer'
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
                                        <h1 className="font-weight-bold mb-0">Agenda</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section>
                            <div className="container">
                                <div className="row" id="GraficoDash">
                                    <div className="col-lg-5 my-3">
                                        <div className="card rounded-1">
                                            <div className="card-header bg-light">
                                                <h6 className="font-weight-bold mb-0">Agenda de examenes</h6>
                                            </div>
                                            <AgendaExam/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 my-3">
                                        <div className="card rounded-1">
                                            <div className="card-header bg-light">
                                                <h6 className="font-weight-bold mb-0">Tabla de examenes por paciente</h6>
                                            </div>
                                            <AgendaExamTable/>
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
