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
                                    <h1 className="font-weight-bold mb-0">Agendar horarios tomas de muestras</h1>
                                </div>
                            </div>
                        </div>
                    </section>       
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Agenda</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Lo que va</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Lo que va 2</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <section>
                                <div className="container">
                                    <div className="row" id="GraficoDash">
                                        <div className="col-lg-4 my-3">
                                            <div className="card rounded-1">
                                                <div className="card-header bg-light">
                                                    <h6 className="font-weight-bold mb-0">Agendar horario</h6>
                                                </div>
                                                <HorariosExamenes />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 my-3">
                                            <div className="card rounded-1">
                                                <div className="card-header bg-light">
                                                    <h6 className="font-weight-bold mb-0">Horarios agendados</h6>
                                                </div>
                                                <AgendaTabla />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Lo que vamos a meter</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Lo que vamos a meter</div>
                    </div>
 
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    </>
    )
}