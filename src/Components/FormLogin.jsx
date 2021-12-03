import React from 'react'
import { Link } from 'react-router-dom'

export default function FormLogin() {
    return (
        <>
            <form action="">
                <div className="form-group ">
                    <h3>Iniciar sesión</h3>
                    <img src="img/microscopio2.png" className="d-block w-50 h-25 mx-auto" alt="img 1"/>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="mail" placeholder="Ingrese su correo"/>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="tel" placeholder="Ingrese su contraseña"/>
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
                    <Link to="/">
                        <button className="btn btn-primary btn-block" type="button">Iniciar</button>
                    </Link>
                    <Link to="/">
                        <button className="btn btn-primary btn-block" style = {{"margin-top":"4px"}}type="button">Volver</button>
                    </Link> 
                </div>
                <div>
                    <span>¿No tienes cuenta?</span>
                    <Link to="/Registro">
                        <a >¡Registrate!</a>
                    </Link>
                </div>
                <br/>
            </form>
        </>
    )
}