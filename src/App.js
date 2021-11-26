import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
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
                              <a class="nav-link active" data-bss-hover-animate="pulse" href="#Comunicado">Informacion y Comunicados</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link active" data-bss-hover-animate="pulse" href="#Contactanos">Contacto</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link active" data-bss-hover-animate="pulse" id="iniciarsesion" href="#">Iniciar Sesión</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav><br/>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../img/img1.jpg" class="d-block w-100 h-50" alt="img 1"/>
                </div>
                <div class="carousel-item">
                  <img src="../img/img2.jpg" class="d-block w-100" alt="img 2"/>
                </div>
                <div class="carousel-item">
                  <img src="../img/img3.jpg" class="d-block w-100" alt="img 3"/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
      </header>
      <main>
          <div class="row">
              <div class="col-sm-6">
                <div class="card" id="Comunicado">
                  <img src="../img/img5.jpg" class="card-img-top" alt="imagen 5"/>
                  <div class="card-body">
                    <h5 class="card-title"><b>COMUNICADO</b></h5>
                    <p class="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="#" class="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card" id="Comunicado">
                  <img src="../img/img4.jpg" class="card-img-top" alt="imagen 4"/>
                  <div class="card-body">
                    <h5 class="card-title"><b>MEDIDAS DE SEGURIDAD</b></h5>
                    <p class="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor  (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="#" class="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-sm-6">
                <div class="card" id="Comunicado">
                  <img src="../img/img6.jpg" class="card-img-top" alt="imagen 6"/>
                  <div class="card-body">
                    <h5 class="card-title"><b>NOTICIAS</b></h5>
                    <p class="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card" id="Contactanos">
                  <div class="card-body">
                    <h5 class="card-title"><b>CONTACTANOS</b></h5>
                    <label for="exampleFormControlInput1">Correo</label>
                    <input class="form-control" type="email" placeholder="email@example.com"/>
                    <label for="exampleFormControlInput1">Mensaje</label>
                    <textarea class="form-control" type="text" placeholder="Ingrese aqui su mensaje..."></textarea>
                    <br/>
                    <a href="#" class="btn btn-primary btn-block">Enviar</a>
                  </div>
                </div>
              </div>
          </div>
          
      </main><br>
  {/* <!-- Footer --> */}
      <footer class="text-center text-lg-start bg-light text-muted">
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          {/* <!-- Right --> */}
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
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-microscope me-3"></i> Inmedica
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
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
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
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
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
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
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.05)"}}>
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="#">www.inmedica.com</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}</br>
    </div>
  );
}

export default App;
