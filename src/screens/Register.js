import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmission = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/customer/register",
      credentials
    );
    console.log(response);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmission}>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
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
            Submit
          </button>
          <Link to="/login" className="btn btn-danger m-3">
            {" "}
            Already have an account{" "}
          </Link>
        </form>
      </div>
    </>
  );
}
