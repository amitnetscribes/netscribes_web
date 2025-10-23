import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Insights from "./components/Insights";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <Industries />
      <Insights />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
