import React from "react";
import Navbar from "../Navbar/navbar"; // Ensure the correct path and filename casing
import Background from "../Background/background";
import About from "../About/about";
import Visuals from "../Visuals/visuals";
import Academy from "../Academy/academy";
import Footer from "../Footer/footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Background/>
      <About/>
      <Visuals/>
      <Academy/>
      <Footer/>
    </div>
  );
};

export default Home;
