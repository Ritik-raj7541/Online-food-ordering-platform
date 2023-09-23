import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import a from "../pictures/delivery-boy.png"
import axios from "axios";


export default function Register() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginError, setloginError] = useState("")
  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/customer/register",
        credentials
      );
      // console.log(response.status);
      if (response.status === 200) {
        console.log("status done");
        localStorage.setItem("authToken", response.data.accessToken);
        localStorage.setItem("userEmail", credentials.email);
        setloginError("") ;
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setloginError("*User with same email id already exist please try different email id");
      }
    }
    
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };
  return (
    <>
      <div className="container entry-container">
        <div className="container logo-container">
        <img src={a} alt="" className="login-image"/>
        </div>
        <div className="container login-container">
          <form onSubmit={handleSubmission}>
            <div className="form-group my-3">
              {/* <label htmlFor="exampleInputEmail1">Name</label> */}
              <input
                type="text"
                className="input"
                id="exampleInputName1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                name="name"
                value={credentials.name}
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3">
              {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
              <input
                type="email"
                className="input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3">
              {/* <label htmlFor="exampleInputPassword1">Password</label> */}
              <input
                type="password"
                className="input"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div className="container" style={{color:"red"}}>{loginError}</div>
            <button type="submit" className="btn my-3">
              Submit
            </button>
            <Link to="/login" className="btn m-3">
              {" "}
              Already have an account{" "}
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
