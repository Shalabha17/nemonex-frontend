import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import"../styles/Home.css"
import Hero from "../components/Hero";
import Services from "../components/Services"
import About from"../components/About"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
 function Home(){
     const location = useLocation();

      useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
    return(
        <> 
        <Hero/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/> 
        
        
    </>
        
    );
}

export default Home;