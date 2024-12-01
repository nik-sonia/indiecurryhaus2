import { Link } from "react-router-dom";
import Herosection from "../pages/herosection/Herosection";

export default function Navbar() {
  return (
    <>
      <div className="container nav-bar  ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-1 border-bottom border-black  text-black nav ">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <p className="fs-3 text-black ">
                All Welcome 
                <br />
                <span className= "text-danger">स</span>
                <span className="text-danger">भी</span>
                <span className="text-danger">का</span>
                <span className="text-danger">स्वा</span>
                <span className="text-danger">गत</span>
               
              </p>
            </Link>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="/"
                className="d-inline-flex link-body-emphasis text-decoration-none"
              >
                <img src="./logo/logo2.svg" alt="" height={120} width={120} />
              </Link>
            </li>
          </ul>
          <div className="col-md-3 text-end ">
            <p className=" branch fs-2 text-black"> <a className="restaurants" href="https://indiecurryhaus.de/">Restaurants</a></p>
          </div>
        </header>
        {/* 2nd nav start */}
        <nav class="navbar navbar-expand-lg px-1   ">
          <div class="container-fluid ">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 text-center ">
                <li class="nav-item mx-4">
                  <Link
                    class="nav-link text-black  "
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item  mx-4">
                  <Link class="nav-link text-black   " to="/contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-item mx-4">
                  <Link class="nav-link text-black " to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li class="nav-item mx-4">
                  <Link class="nav-link text-black " to="/menu">
                    Menu
                  </Link>
                </li>

                <li class="nav-item mx-4">
                  <Link class="nav-link text-black " to="/reservation">
                    Reservation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* 3rd nav */}
        {/* <nav class="navbar navbar-expand-lg px-5   ">
          <div class="container-fluid">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 text-center ">
              <li class="nav-item mx-1">
                <a class="nav-link active welcome " aria-current="page" href="#home">
                  Welcome To Indie Curry Haus
                </a>
              </li>
            </ul>
          </div>
        </nav> */}
      </div>
      

      {/* <li>
              <a href="#" className="nav-link px-2">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                About
              </a>
            </li> */}
    </>
  );
}
