import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import a from "../pictures/delivery-boy.png" ;
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();
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
    if (response.status === 200) {
      localStorage.setItem("authToken", response.data.accessToken);
      localStorage.setItem("userEmail", credentials.email);
      navigate("/");
    }
  };

  return (
    <div className="container entry-container">
      <div className="container logo-container">
        <img src={a} alt="" className="login-image"/>
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
              value={credentials.email}
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
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn  m-3">
            Login
          </button>
          <Link to="/register" className="btn  m-3">
            {" "}
            I have no account{" "}
          </Link>
        </form>
        {/* <div className="">pic</div> */}
      </div>
    </div>
  );
}
