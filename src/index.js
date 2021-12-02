import Footer from "./Components/Footer";


function Index() {
  return (
    <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
              <div className="container-fluid">
                <a href="#"><img src="img/microscopio2.png" className="d-block  mx-auto" width="40" height="40" alt="img 1"/>
                  <h6 className="text-light text-center font-weight-bold mb-0">INMEDICA</h6></a>                
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse" href="#">Inicio</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse" href="#Comunicado">Informacion y Comunicados</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse" href="#Contactanos">Contacto</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" data-bss-hover-animate="pulse"  href="#">
                                <i className="icon ion-md-log-in mr-2"></i>iniciar sesión
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav><br/>
          {/* <!--Carousel Wrapper--> */}
          <div className="container">
            <div id="carousel-example-1z" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
              {/* <!--Indicators--> */}
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
              </ol>
              {/* <!--/.Indicators--> */}
              {/* <!--Slides--> */}
              <div className="carousel-inner" role="listbox">
                {/* <!--First slide--> */}
                <div className="carousel-item active">
                  <img className="d-block w-100" src="img/img1.jpg" alt="First slide"/>
                </div>
                {/* <!--/First slide--> */}
                {/* <!--Second slide--> */}
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/img2.jpg" alt="Second slide"/>
                </div>
                {/* <!--/Second slide--> */}
                {/* <!--Third slide--> */}
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/img3.jpg" alt="Third slide"/>
                </div>
                {/* <!--/Third slide--> */}
              </div>
              {/* <!--/.Slides--> */}
              {/* <!--Controls--> */}
              <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
              {/* <!--/.Controls--> */}
            </div>
            {/* <!--/.Carousel Wrapper--> */}
          </div>
      </header>

      <main>
        <div className="container">
          <div className="row">
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img5.jpg" className="card-img-top" alt="imagen 5"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>COMUNICADO</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="#" className="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img4.jpg" className="card-img-top" alt="imagen 4"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>MEDIDAS DE SEGURIDAD</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor  (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="#" className="btn btn-primary">leer mas ...</a>
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
                    <a href="#" className="btn btn-primary btn-block">Enviar</a>
                  </div>
                </div>
              </div>
          </div>
        </div>  
      </main>
      <Footer/>
    </div>
  );
}

export default Index;
