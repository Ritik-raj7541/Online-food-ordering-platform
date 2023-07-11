import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../helpers.js/Carousel";
import Items from "../helpers.js/Items";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <Items />
        <Items/>
        <Items/>
        <Items/>
      </div>

      <Footer />
    </div>
  );
}
