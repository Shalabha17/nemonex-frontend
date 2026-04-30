import { useLocation } from "react-router-dom";
import {useState,useEffect} from "react";
import {FaPhone,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";
import"../styles/ContactForm.css";


function ContactForm(){
  const location=useLocation();
  const serviceMap = {
    software: "Software Development",
    hardware: "Hardware Projects",
    marketing: "Digital Marketing",
     "Project Discussion": "Project Discussion"
  };
  const selectedService = serviceMap[location.state?.service] || "";
  

 const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    {/* const name = e.target[1].value;
    const email = e.target[2].value;
    const message = e.target[3].value;*/}

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();


  //  VALIDATION
  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

   if (!email.includes("@")) {
    alert("Enter a valid email");
    return;
  }
  setLoading(true);

   
  
     try {
    const res = await fetch("https://nemonex-backend.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
        name,
        email,
        message,
        service: selectedService,
      }),
      
    });
       setSubmitted(true);
       form.reset();
   
     } catch (err) {
       console.log(err);
       setLoading(false);
        alert("Something went wrong ❌");
      }
       setLoading(false);
   };

   useEffect(() => {
  
    if (submitted) {
    setTimeout(() => setSubmitted(false), 3000);
     }
   }, [submitted]);
 
  return (
    <section className="contact-page">

      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h3>Let’s talk about your project</h3>
          <p>We’d love to hear from you.</p>

          <p><FaPhone /> 7305698058</p>
          <p><FaEnvelope /> nemonextechnologies@gmail.com</p>
          <p><FaMapMarkerAlt /> India</p>
        </div>

        {/* RIGHT */}
        <div className="contact-right">

          {submitted && (
            <div className="success-msg">
              ✅ Message sent! We'll contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
             <input 
                 name="service"
                 type="text"
                 value={selectedService || ""}
                 placeholder="Service"
                  readOnly
              />

            

            <input name="name" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>

            <button type="submit" disabled={loading}> {loading ? "Sending..." : "Send Message →"}</button>

          </form>

        </div>

      </div>

    </section>
  );
}




export default ContactForm;