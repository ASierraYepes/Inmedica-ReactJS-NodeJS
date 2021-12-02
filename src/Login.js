import React from 'react'
import Footer from './Components/Footer'

export default function Login() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                    <div className="container-fluid">
                    <a href="#"><img src="img/microscopio2.png" className="d-block  mx-auto" width="40" height="40" alt="img 1"/>
                        <h6 className="text-light text-center font-weight-bold mb-0">INMEDICA</h6></a>                
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bss-hover-animate="pulse" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-bss-hover-animate="pulse" href="#">Informacion y Comunicados</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-bss-hover-animate="pulse" href="#">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{"background-image": "url(img/fondo.jpg)"}}>
                <div id="registro" className="row p-3 mb-2 text-dark">
                    <div className="col-md-12 col-lg-4 mx-auto">
                        <form action="">
                            <div className="form-group ">
                                <h3>Iniciar sesión</h3>
                                <img src="img/microscopio2.png" className="d-block w-50 h-25 mx-auto" alt="img 1"/>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="mail" placeholder="Ingrese tu contraseña"/>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="tel" placeholder="Ingrese tu contraseña"/>
                            </div>
                            <div className="align-items-center">
                                <div>
                                    <label className="checkbox m-1">
                                        <input type="checkbox" name=""/>
                                        <span></span>Recuérdame</label>
                                </div>
                                <a href="">¿Has olvidado tu contraseña?</a>
                            </div><br/>
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary btn-block" type="button">Iniciar</button>
                                <button className="btn btn-primary btn-block" type="button">Volver</button>
                            </div>
                            <div>
                                <span>¿No tienes cuenta?</span>
                                <a href="">¡Registrate!</a>
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
