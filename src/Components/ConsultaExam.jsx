import React from 'react'

export default function AgendaExam() {
    return (
        <>
            <div>
                <div className="row mb-2 text-dark">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <label for="" className="form-label">Tipo de Documento</label>
                                <select className="form-control" name="tipo">
                                    <option selected>Elija el Tipo de Documento</option>
                                    <option value="1">Cedula Ciudadania</option>
                                    <option value="2">Tarjeta de Identidad</option>
                                    <option value="3">Registro Civil</option>
                                    <option value="4">Pasaporte</option>
                                    <option value="5">Extranjeria</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">No. Documento</label>
                                <input type="number" className="form-control" id="doc" placeholder="# Documento" />
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary" type="button" >Buscar Paciente</button>
                            </div><br />
                        </form>
                        <div className="col-md-13">
                            <form>
                                <div className="form-group">
                                    <label for="" className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" id="nom" placeholder="Nombre Completo" readonly />
                                </div>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-primary" type="button" >Buscar Examen</button>
                                </div><br /><br />
                            </form>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}