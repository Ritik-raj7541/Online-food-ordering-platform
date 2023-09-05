import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <i style={{color:"white"}}>M</i>
          </a>
          <span className="mb-3 mb-md-0 footer-custom">
            © 2023 Mandato, India
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="#"> <i className="fa-brands fa-facebook fa-xl" style={{color: "white"}}></i> </a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"> <i className="fa-brands fa-instagram fa-xl" style={{color: "white"}}></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"> <i className="fa-brands fa-twitter fa-xl" style={{color: "white"}}></i> </a></li>

        </ul>
      </footer>
    </div>
  );
}
