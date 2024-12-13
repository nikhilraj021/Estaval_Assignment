import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import Footer from "./Footer";
import LatestBlog from "./LatestBlog";
import Clients from "./Clients";

const HomePage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f0f4f8, #d9e2ec, #bcccdc)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Carousel />
      <About />
      <Clients />
      <LatestBlog />
      <Footer />
    </div>
  );
};

export default HomePage;
