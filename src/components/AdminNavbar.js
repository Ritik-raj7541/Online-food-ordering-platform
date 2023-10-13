import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const handleAdminLogout = () => {
    localStorage.removeItem("authTokenAdmin");
    localStorage.removeItem("adminEmail");
    navigate("/");
  };
  return (
    <div
      className="container my-2"
      style={{ textAlign: "right", cursor: "pointer" }}
      onClick={handleAdminLogout}
    >
      <i
        className="fa-solid fa-right-from-bracket"
        style={{ color: "#176B87" }}
      ></i>
    </div>
  );
}
