import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../helpers.js/Carousel";
import MidSection from "../components/MidSection";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        {/* {console.log("again came")} */}
        {!localStorage.getItem("authToken") ? ("") : (<MidSection />)}
      </div>
      <hr className="hr my-4"/>
      <AboutUs/>
      <hr className="hr my-4" />
      <Footer />
    </div>
  );
}
