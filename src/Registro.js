import React from 'react'
import Footer from './Components/Footer'
import FormRegistro from './Components/FormRegistro'

export default function Registro() {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                    <div class="container-fluid">
                    <a href="#"><img src="img/microscopio2.png" class="d-block  mx-auto" width="40" height="40" alt="img 1"/>
                        <h6 class="text-light text-center font-weight-bold mb-0">INMEDICA</h6></a>                
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bss-hover-animate="pulse" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" data-bss-hover-animate="pulse" href="#">Informacion y Comunicados</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" data-bss-hover-animate="pulse" href="#">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container col-md-12 col-lg-12 mx-auto" style={{"background-image": "url(img/fondo.jpg)"}}> 
                <div id ="registro" className="row p-3 mb-2 text-dark col-md-12 col-lg-6 mx-auto">
                    <div className="col-md-12 col-lg-6 mx-auto">
                        <FormRegistro/>
                    </div>  
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}

