import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from './components/Services/Services'
import Materials from './components/Materials/Materials';
import "./App.scss";
import Contact from "./components/Contact/Contact";

function App() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Header />
      {/* <main> */}
        <Hero />
        <About /> 
         <Services />
         <Materials /> 
         <Contact />
        {/* About, Services, Contact, Footer will follow */}
      {/* </main> */}
    </div>
  );
}

export default App;
