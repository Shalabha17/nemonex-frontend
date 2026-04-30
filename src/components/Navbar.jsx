import{useLocation} from "react-router-dom";
import{Link} from "react-router-dom";
import {useState,useEffect} from "react";
import "../styles/Navbar.css";

function Navbar(){
  const[menuOpen,setMenuOpen]=useState(false); 
  const[active,setActive]=useState("home")
  const location=useLocation();
  const isContactPage=location.pathname==="/contact-form";
   
  useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "services", "about", "contact"];
    let current = "home";

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          current = id;
        }
      }
    });

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      current = "contact";
    }

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
        
  return(
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <h2 className="logo">
          <span>N</span> Nemonex Technologies
        </h2>

        {/*Hamburger*/}
        <div className="menu-icon"
        onClick={()=>setMenuOpen(!menuOpen )}>
            {menuOpen ? "✖" : "☰"}
        </div>

        {/* Links */}
        
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
       
          <Link to="/#home"  className={active === "home" ? "active" : ""}
           onClick={()=>setMenuOpen(false)}>
            Home
            </Link>
          
          <Link to="/#services"  className={active === "services" ? "active" : ""}
          onClick={()=>setMenuOpen(false)}>
            Services
            </Link>
          <Link to = "/#about"  className={active === "about" ? "active" : ""}
           onClick={()=>setMenuOpen(false)}>
            About
            </Link>
          <a href="#contact" className={active === "contact" ? "active" : ""}
          onClick={()=>setMenuOpen(false)}>
            Contact
            </a>
          </div>
           
        

        {/* Button 
        <button className="nav-btn">
          Get Started
        </button>*/}

      </div>

    </nav>
  );
}

export default Navbar; 