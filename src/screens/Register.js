import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import a from "../pictures/delivery-boy.png";
import axios from "axios";

export default function Register() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [credentialsadmin, setcredentialsadmin] = useState({
    restaurantName: "",
    email: "",
    password: "",
    adminKey: "",
  });
  const [admin, setAdmin] = useState(false);
  const [loginError, setloginError] = useState("");

  const handleSubmissionForAdmin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/register",
        credentials
      );
      if (response.status === 200) {
        console.log("status done");
        localStorage.setItem("authToken", response.data.accessToken);
        localStorage.setItem("adminEmail", credentials.email);
        setloginError("");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setloginError(
          "*User with same email id already exist please try different email id"
        );
      }
    }
  };
  const handleSubmissionForCustomer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/customer/register",
        credentials
      );
      if (response.status === 200) {
        console.log("status done");
        localStorage.setItem("authToken", response.data.accessToken);
        localStorage.setItem("userEmail", credentials.email);
        setloginError("");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setloginError(
          "*User with same email id already exist please try different email id"
        );
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
  const onChange = (e) => {
    const { name, value } = e.target;
    if (admin === false) {
      setcredentials({ ...credentials, [name]: value });
    } else {
      setcredentialsadmin({ ...credentialsadmin, [name]: value });
    }
  };

  const handleAdminToggle = (e) => {
    setAdmin(!admin);
    setcredentialsadmin({
      restaurantName: "",
      email: "",
      password: "",
      adminKey:""
    });
  };

  return (
    <>
      <div className="container entry-container">
        <div className="container logo-container">
          <img src={a} alt="" className="login-image" />
        </div>
        <div className="container login-container">
          <form onSubmit={handleSubmission}>
            <div className="form-group my-3">
              <input
                type="text"
                className="input"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder={!admin ? "Name" : "Restaurant Name"}
                name={!admin ? "name" : "restaurantName"}
                value={
                  !admin ? credentials.name : credentialsadmin.restaurantName
                }
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="email"
                className="input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
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
                placeholder="Password"
                name="password"
                value={
                  !admin ? credentials.password : credentialsadmin.password
                }
                onChange={onChange}
              />
            </div>
            {admin === true ? (
              <div className="form-group my-3">
                <input
                  type="text"
                  className="input"
                  id="exampleInputadminkey1"
                  placeholder=" Admin Key"
                  name="adminkey"
                  value={credentialsadmin.adminkey}
                  onChange={onChange}
                />
              </div>
            ) : (
              ""
            )}
            <div className="container" style={{ color: "red" }}>
              {loginError}
            </div>
            <button type="submit" className="btn my-3">
              Submit
            </button>
            <Link to="/login" className="btn m-3">
              {" "}
              Already have an account{" "}
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
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Admin
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
