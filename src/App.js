

function App() {
  return (
    <div>
      <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
              <div className="container-fluid">
                  <h2><a className="navbar-brand" href="https://www.google.com/"><b>LABORATORIOS INMEDICA</b></a></h2>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse" href="https://www.google.com/">Inicio</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse" href="#Comunicado">Informacion y Comunicados</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse" href="#Contactanos">Contacto</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse" id="iniciarsesion" href="https://www.google.com/">Iniciar Sesión</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="../img/img1.jpg" className="d-block w-100 h-50" alt="img 1"/>
                </div>
                <div className="carousel-item">
                  <img src="../img/img2.jpg" className="d-block w-100" alt="img 2"/>
                </div>
                <div className="carousel-item">
                  <img src="../img/img3.jpg" className="d-block w-100" alt="img 3"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
      </header>
      <main>
          <div className="row">
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img5.jpg" className="card-img-top" alt="imagen 5"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>COMUNICADO</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="https://www.google.com/" className="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img4.jpg" className="card-img-top" alt="imagen 4"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>MEDIDAS DE SEGURIDAD</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor  (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="https://www.google.com/" className="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img6.jpg" className="card-img-top" alt="imagen 6"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>NOTICIAS</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" id="Contactanos">
                  <div className="card-body">
                    <h5 className="card-title"><b>CONTACTANOS</b></h5>
                    <label for="exampleFormControlInput1">Correo</label>
                    <input className="form-control" type="email" placeholder="email@example.com"/>
                    <label for="exampleFormControlInput1">Mensaje</label>
                    <textarea className="form-control" type="text" placeholder="Ingrese aqui su mensaje..."></textarea>
                    <br/>
                    <a href="https://www.google.com/" className="btn btn-primary btn-block">Enviar</a>
                  </div>
                </div>
              </div>
          </div>
          
      </main>
      <br/>
  {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          {/* <!-- Right --> */}
          <div className="col-lg-12">
            <a href="https://www.google.com/" className="me-4 col-sm-6">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.google.com/" className="me-4 col-sm-6">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com/" className="me-4 col-sm-6">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.google.com/" className="me-4 col-sm-6">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-microscope me-3"></i> Inmedica
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
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
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
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
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
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
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.05)"}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://www.google.com/">www.inmedica.com</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}

export default App;
