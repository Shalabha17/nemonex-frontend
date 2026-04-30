import {useNavigate} from "react-router-dom";
import{FaTelegramPlane}from "react-icons/fa";


function Contact (){
  const  navigate=useNavigate();
    return(
        <section id="contact" className="cta" >
                 <div className="cta-content" data-aos="zoom-in">
        
                  <div className="cta-left">
                   <div className="cta-icon">
                    <FaTelegramPlane />
                 </div>
        
                <div className="cta-text">
                <h2>Let’s Build Something Amazing Together!</h2>
                <p>
                  Have a project in mind? Let’s turn your ideas into reality.
                </p>
                 </div>
              </div>
        
            <div className="cta-right">
              <button onClick={() => navigate("/contact-form",{state:{service:"Project Discussion"}})}>
                Contact Us →
              </button>
            </div>
        
              </div>
             </section>
    )
}

export default Contact;