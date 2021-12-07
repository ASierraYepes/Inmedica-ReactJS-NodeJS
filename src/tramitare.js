import logo from './logo.svg';
import './App.css';

function tramitare(){
  return (
  <body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div class="container-fluid">
                <h2><a class="navbar-brand" href="#"><b>LABORATORIOS INMEDICA</b></a></h2>
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
                        <li class="nav-item">
                            <a class="nav-link active" data-bss-hover-animate="pulse" id="iniciarsesion" href="#">Iniciar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container"> 
      <div class="row p-3 mb-2 bg-info text-dark">
          <div class="col-md-12 col-lg-4 mx-auto">
              <div class="form-group"> 
                <form action="">
                    <h3>Tramitar Examen</h3>
                    <img src="img/microscopio.png" class="d-block w-50 h-25" alt="img 1">
                    <table>
                      <tr><td>                    
                          <label for="" class="form-label">Tipo de Documento</label>
                      </td><td>
                          <select class="form-control" name="tipo">
                            <option selected>Elija el Tipo de Documento</option>
                            <option value="1">Cedula Ciudadania</option>
                            <option value="2">Tarjeta de Identidad</option>
                            <option value="3">Registro Civil</option>
                            <option value="4">Pasaporte</option>
                            <option value="5">Extranjeria</option>
                          </select>
                      </td></tr>
                      <tr><td>                                         
                          <label for="" class="form-label">No. Documento</label>
                      </td><td>    
                          <input type="number" class="form-control" id="doc" placeholder="# Documento" readonly> 
                      </td><tr>    
                       <tr><td>    
                           <label for="" class="form-label">Nombre Completo</label>
                       </td><td>    
                           <input type="text" class="form-control" id="nom" placeholder="Nombre Completo" readonly>
                       </td></tr>                       
                    </table>
                    <div class="d-grid gap-2 d-md-block">
                      <button class="btn btn-primary" type="button" >Buscar Paciente</button>
                    </div>                      
                </form>  
              </div>
          </div>
      </div>    
      <div class="row p-3 mb-2 bg-info text-dark">
        <div class="col-md-12 col-lg-4 mx-auto">
            <form action="">                                                       
              <div class="form-group">              
                  <table>
                      <tr>
                          <th>Elegir</th>
                          <th>Numero</th>                       
                          <th>Descripcion</th>
                          <th>Fecha</th>
                      </tr>
                      <tr><td>
                          <input type="checkbox" class="form-check" id="checkbox1" value="Numero1"> 
                      </td><td>                           
                          <input type="number" class="form-control" id="numero1" placeholder="Numero" readonly>
                      </td><td>
                          <input type="text" class="form-control" id="descripcion1" placeholder="Descripcion" readonly>                            
                      </td><td>
                          <input type="date" class="form-control" id="Fecha1" placeholder="Fecha Examen" readonly>                            
                      </td></tr>
                      <tr><td>
                          <input type="checkbox" id="checkbox1" value="Numero2"> 
                      </td><td>                           
                          <input type="number" class="form-control" id="numero2" placeholder="Numero" readonly>
                      </td><td>
                          <input type="text" class="form-control" id="descripcion2" placeholder="Descripcion" readonly>                            
                      </td><td>
                          <input type="date" class="form-control" id="Fecha2" placeholder="Fecha Examen" readonly>
                      </td></tr>                        
                  </table>                            
              </div>                  
              <div class="d-grid gap-2 d-md-block">
                  <button class="btn btn-primary" type="button" >Elegir</button>
                  <button class="btn btn-primary" type="button" >Volver</button>
              </div>                                                    
            </form>
      </div>  
    </div>
  </div>    
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
        <!-- Right -->
        <div class="col-lg-12">
          <a href="#" class="me-4 col-sm-6">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="me-4 col-sm-6">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="me-4 col-sm-6">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="me-4 col-sm-6">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->
    
      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-microscope me-3"></i> Inmedica
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Productos
              </h6>
              <p>
                <a href="#!" class="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Laravel</a>
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Trabaje con nosotros
              </h6>
              <p>
                <a href="#!" class="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Contactanos
              </h6>
              <p><i class="fas fa-home me-3"></i> Barranquilla/Colombia</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@inmedica.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->
    
      <!-- Copyright -->
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="#">www.inmedica.com</a>
      </div>
      <!-- Copyright -->
    </footer>
  </body>
    );
}
export default tramitare;