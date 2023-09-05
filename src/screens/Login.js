import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate() ;
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };
  const handleSubmission = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/customer/login",
      credentials
    );
    if(response.status === 200){
      localStorage.setItem("authToken",response.data.accessToken) ;
      localStorage.setItem("userEmail", credentials.email) ;
      navigate('/') ;
    }
  };
 

  return (
    <div className="container">
      <form onSubmit={handleSubmission}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary my-3">
          Login
        </button>
        <Link to="/register" className="btn btn-danger m-3">
          {" "}
          I have no account{" "}
        </Link>
      </form>
    </div>
  );
}
