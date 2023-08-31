import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/App.css";
import{CartContext} from './ContextReducer'

export default function Navbar() {
  const navigate = useNavigate() ;
  const handleLogout = () =>{
    localStorage.removeItem("authToken") ;
    console.log("deleted");
    navigate('/') ;
  }
  const {cart} = useContext(CartContext) ;
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong navstyle">
        <div className="container-fluid">
          <Link className="navbar-brand navfont" to="/">
            mandato
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="nav-link mx-3" to="/login">
                  <i
                    className="fa-solid fa-right-to-bracket"
                    style={{ color: "#e3e7ed" }}
                  ></i>
                </Link>
                <Link className="nav-link mx-3" to="/register">
                  <i
                    className="fa-solid fa-user-plus"
                    style={{ color: "#e3e7ed" }}
                  ></i>
                </Link>
              </div>
            ) : (
              <div className="nav-item d-flex">
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle mx-3 notification"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"   
                  >
                    <i className="fa-solid fa-user" style={{ color: "#e3e7ed" }}></i>
                    {cart.length !==0 ?(<span className="badge">{cart.length}</span>):""}
                    
                  </Link>
                  <ul className="dropdown-menu btn btn-secondary " style={{ '--bs-dropdown-min-width': '1rem' }}>
                    <li className="notification">
                      <Link className="dropdown-item" to="/myCart">
                      <i className="fa-solid fa-cart-shopping" style={{ color: "#ee3d3d" }}></i>
                      {cart.length !==0 ?(<span className="badge">{cart.length}</span>):""}
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {/* logout */}
                      <i className="fa-solid fa-right-from-bracket" style={{ color: "#ee3d3d" }} onClick={handleLogout} ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
