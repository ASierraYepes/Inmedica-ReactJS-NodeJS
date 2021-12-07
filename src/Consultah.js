import logo from './logo.svg';
import './App.css';
//Consulta agenda establecida por el usuario para exmaente de laboratorio
function consultah() {
  return (
  <body>
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container-fluid">
                <h2><a className="navbar-brand" href="#"><b>LABORATORIOS INMEDICA</b></a></h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                        <li className="nav-item">
                            <a className="nav-link active" data-bss-hover-animate="pulse" id="iniciarsesion" href="#">Iniciar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div className="container"> 
      <div className="row p-3 mb-2 bg-info text-dark">
          <div className="col-md-12 col-lg-4 mx-auto">
              <form action="">
                  <div className="form-group"> 
                    <h3>Agenda de Examen</h3>
                    <img src="img/microscopio.png" className="d-block w-50 h-25" alt="img 1"/>
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
                      <input type="number" className="form-control" id="doc" placeholder="# Documento"/> 
                  </div>
                  <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary" type="button" >Buscar Paciente</button>
                  </div>
              </form>                                                            
              <div className="form-group">
                   <table>
                      <td><tr>    
                          <label for="" className="form-label">Nombre Completo</label>
                      </tr><tr>    
                          <input type="text" className="form-control" id="nom" placeholder="Nombre Completo" readonly/>
                      </tr></td>  
                   </table>
              </div>
              <form action="">
                  <div className="d-grid gap-2 d-md-block">
                     <button className="btn btn-primary" type="button" >Buscar Examen</button>
                  </div>
              </form>         
          </div>
      </div>    
      <div className="row p-3 mb-2 bg-info text-dark">
          <div className="col-md-12 col-lg-4 mx-auto">
              <form action="">                                                       
                <div className="form-group">              
                    <table>
                        <tr>
                            <th>Numero</th>                       
                            <th>Descripcion</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                        <tr><td>                           
                            <input type="number" className="form-control" id="numero1" placeholder="Numero" readonly/>
                        </td><td>
                            <input type="text" className="form-control" id="descripcion1" placeholder="Descripcion" readonly/>                            
                        </td><td>
                            <input type="date" className="form-control" id="Fecha1" placeholder="Fecha Examen" readonly/>                                                        
                        </td><td>                            
                            <input type="text" className="form-check" id="hora1" value="Hora1"/>                    
                        </td></tr>
                        <tr><td>                           
                            <input type="number" className="form-control" id="numero2" placeholder="Numero" readonly/>
                        </td><td>
                            <input type="text" className="form-control" id="descripcion2" placeholder="Descripcion" readonly/>
                        </td><td>
                            <input type="date" className="form-control" id="Fecha2" placeholder="Fecha Examen" readonly/>
                        </td><td>                            
                            <input type="text" className="form-check" id="hora2" value="hora2"/>
                        </td></tr>
                    </table>                            
                </div>                  
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary" type="button" >Volver</button>
                </div>                                                    
              </form>
        </div>  
      </div>
  </div>    
    <footer className="text-center text-lg-start bg-light text-muted">
      {/*<!-- Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
        {/*<!-- Right -->*/}
        <div className="col-lg-12">
          <a href="#" className="me-4 col-sm-6">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 col-sm-6">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 col-sm-6">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 col-sm-6">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        {/*<!-- Right -->*/}
      </section>
      {/*<!-- Section: Social media -->*/}
    
      {/*<!-- Section: Links  -->*/}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/*<!-- Grid row -->*/}
          <div className="row mt-3">
            {/*<!-- Grid column -->*/}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/*<!-- Content -->*/}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-microscope me-3"></i> Inmedica
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/*<!-- Grid column -->*/}
    
            {/*<!-- Grid column -->*/}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/*<!-- Links -->*/}
              <h6 className="text-uppercase fw-bold mb-4">
                Productos
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div>
            {/*<!-- Grid column -->*/}
    
            {/*<!-- Grid column -->*/}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/*<!-- Links -->*/}
              <h6 className="text-uppercase fw-bold mb-4">
                Trabaje con nosotros
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            {/*<!-- Grid column -->*/}
    
            {/*<!-- Grid column -->*/}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/*<!-- Links -->*/}
              <h6 className="text-uppercase fw-bold mb-4">
                Contactanos
              </h6>
              <p><i className="fas fa-home me-3"></i> Barranquilla/Colombia</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@inmedica.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/*<!-- Grid column -->*/}
          </div>
          {/*<!-- Grid row -->*/}
        </div>
      </section>
      {/*<!-- Section: Links  -->*/}
    
      {/*<!-- Copyright -->*/}
      <div className="text-center p-4" style={{'background-color': 'rgba(0, 0, 0, 0.05)'}} >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">www.inmedica.com</a>
      </div>
      {/*<!-- Copyright -->*/}
    </footer>
</body>
  );
}
export default consultah;

