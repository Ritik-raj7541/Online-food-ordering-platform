import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import a from "../pictures/delivery-boy.png";
import axios from "axios";
import userEvent from "@testing-library/user-event";

export default function Login() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const [credentialsadmin, setcredentialsadmin] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState(false);
  const [loginError, setloginError] = useState("");

  const handleSubmissionForCustomer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/customer/login",
        credentials
      );
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.accessToken);
        localStorage.setItem("userEmail", credentials.email);
        setloginError("");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setloginError("*enter the valid credentials");
      }
    }
  };
  const handleSubmissionForAdmin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        credentialsadmin
      );
      if (response.status === 200) {
        localStorage.setItem("authTokenAdmin", response.data.accessToken);
        localStorage.setItem("adminEmail", credentialsadmin.email);
        setloginError("");
        const restUrl = "/landingPageAdmin/"+ response.data.response.id ;
        navigate(restUrl);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setloginError("*enter the valid credentials");
      }
    }
  };
  const handleSubmission = async (e) => {
    e.preventDefault();
    if (admin) {
      handleSubmissionForAdmin();
    } else {
      handleSubmissionForCustomer();
    }
  };

  const handleAdminToggle = (e) => {
    setAdmin(!admin);
    setcredentialsadmin({
      email: "",
      password: "",
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (admin === false) {
      setcredentials({ ...credentials, [name]: value });
    } else {
      setcredentialsadmin({ ...credentialsadmin, [name]: value });
    }
  };

  return (
    <div className="container entry-container">
      <div className="container logo-container">
        <img src={a} alt="" className="login-image" />
      </div>
      <div className="container login-container ">
        <form onSubmit={handleSubmission}>
          <div className="form-group my-3">
            {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
            <input
              type="email"
              className="input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=" Email Id"
              name="email"
              value={!admin ? credentials.email : credentialsadmin.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="password"
              className="input"
              id="exampleInputPassword1"
              placeholder=" Password"
              name="password"
              value={!admin ? credentials.password : credentialsadmin.password}
              onChange={onChange}
            />
          </div>
          <div className="container" style={{ color: "red" }}>
            {loginError}
          </div>
          <button type="submit" className="btn  m-3">
            Login
          </button>
          <Link to="/register" className="btn  m-3">
            {" "}
            I have no account{" "}
          </Link>
        </form>
      </div>
      <div className="container admin-container my-4">
        <div className="form-check form-switch ">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleAdminToggle}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Admin
          </label>
        </div>
      </div>
    </div>
  );
}
