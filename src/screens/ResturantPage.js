import React from "react";
import MidSection from "../components/MidSection";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Search from "../helpers.js/Search";
export default function () {
  const {id} = useParams() ;
  return (
    <div>
      <Navbar/>
      <span></span>
      <span><Search /></span>
      <div className="container">
        <MidSection id={id}/>
      </div>
    </div>
  );
}
