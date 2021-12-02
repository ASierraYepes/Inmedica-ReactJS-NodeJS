import React from 'react'
import Footer from './Components/Footer'

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
            <div class="container"> 
                <div id ="registro" class="row p-3 mb-2 text-dark">
                    <div class="col-md-12 col-lg-4 mx-auto">
                        <form action="">
                            <div class="form-group "> 
                                <h3>Registro de Usuario</h3>
                                <img src="img/microscopio2.png" class="d-block w-50 h-25 mx-auto" alt="img 1"/>
                                <label for="" class="form-label">Tipo de Documento</label>
                                <select class="form-control">
                                    <option selected>Elija el Tipo de Documento</option>
                                    <option value="1">Cedula Ciudadania</option>
                                    <option value="2">Tarjeta de Identidad</option>
                                    <option value="3">Registro Civil</option>
                                    <option value="4">Pasaporte</option>
                                    <option value="5">Extranjeria</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">No. Documento</label>
                                <input type="number" class="form-control" id="doc" placeholder="# Documento"/>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Nombre Completo</label>
                                <input type="text" class="form-control" id="nom" placeholder="Nombre Completo"/>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Correo</label>
                                <input type="email" class="form-control" id="mail" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Telefono</label>
                                <input type="number" class="form-control" id="tel" placeholder="# Telefono"/>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Direccion Residencia</label>
                                <input type="number" class="form-control" id="dir" placeholder="Direccion Residencia"/>
                            </div>
                            <div class="form-group">                    
                                <label for="" class="form-label">Fecha Nacimiento</label>
                                <input type="date" class="form-control" id="datetime" placeholder="yyyy-mm-dd"/>
                            </div>                                  
                            
                            <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-primary btn-block" type="button" >Registrar</button>
                                <button class="btn btn-primary btn-block" type="button" >Volver</button>
                            </div>
                            <br/>
                        </form>
                    </div>  
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}

