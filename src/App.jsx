import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import{Navigate} from "react-router-dom";

function App()
{
  const token = localStorage.getItem("token");
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);
  const isAdmin = localStorage.getItem("token");
  return (
    
    <Routes>

      {/* USER ROUTES WITH NAVBAR */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/contact-form"
        element={
          <>
            <Navbar />
            <ContactForm />
          </>
        }
      />

      {/* ADMIN ROUTES (NO NAVBAR) */}
      <Route
        path="/admin" element={token? <Admin/>:<Navigate to ="/"/>}
      />
      
        
      
      {/*Hidden Login Route*/}
      <Route path="/nx-panel-portal" element={<Login/>}/>

    </Routes>
  );
}


export default App;