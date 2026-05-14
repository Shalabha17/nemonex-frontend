 import {useState} from "react";
 import{FaCheckCircle} from "react-icons/fa";
 import {useNavigate} from "react-router-dom";
 
 function Services(){
  const[selectedService,setSelectedService]= useState(null);
  const navigate=useNavigate();

  return(

    <section id="services" className="services-section" >

     <p className="services-subtitle">WHAT WE DO</p>
     <h2>Our Services</h2>

    <div className="services">

    <div className="card" id="software" data-aos="zoom-in">
      <div className="icon orange">💻</div>
      <h3>Software Development</h3>
      <p>We build scalable web and mobile applications.</p>
      <span onClick={()=>setSelectedService("software")} className="learn-more-btn">
        Learn More →
      </span>
    </div>

    <div className="card" id="software" data-aos="zoom-in">
      <div className="icon blue">⚙️</div>
      <h3>Hardware Projects</h3>
      <p>Innovative embedded systems and IoT solutions.</p>
      <span onClick={()=>setSelectedService("hardware")} className="learn-more-btn">
        Learn More →
      </span>
    </div>

    <div className="card"  id="software" data-aos="zoom-in">
      <div className="icon green">📈</div>
      <h3>Digital Marketing</h3>
      <p>Grow your business with SEO and social media strategies.</p>
      <span onClick={()=>setSelectedService("marketing")} className="learn-more-btn">
      Learn More →
      </span>
     </div>

     </div>

     {/*  MODAL HERE */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <span className="close-btn" onClick={() => setSelectedService(null)}>
              ✖
            </span>

            {selectedService === "software" && (
              <>
                <h2>Software Development</h2>
                <ul>
                  <li>Custom Web Applications.</li>
                  <li>Mobile App Developement.</li>
                  <li>REST APIs & Backend Systems.</li>
                  <li>UI/UX Design with modern frameworks.</li>
                  <li>Scalable architecture & optimization. </li>
                </ul>
                <button className="modal-btn" onClick={()=>{const service= selectedService;
                 setSelectedService(null);
                 navigate("/contact-form" ,{state:{service}});}}>
                     Start Your Project →
                </button>
              </>
            )}

            {selectedService === "hardware" && (
              <>
                <h2>Hardware & IoT</h2>
                <ul>
                  <li>Embedded Systems.</li>
                  <li>IoT Projects.</li>
                  <li>Sensor Integration & Automation.</li>
                  <li>PCB Design & Prototyping.</li>
                  <li>Real-time data monitoring systems.</li>
                </ul>
                  <button className="modal-btn" onClick={()=>{ const service = selectedService;
                  setSelectedService(null);
                 navigate("/contact-form" ,{state:{service}});}}>
                     Start Your Project →
                  </button>
              </>
            )}

            {selectedService === "marketing" && (
              <>
                <h2>Digital Marketing</h2>
                <ul>
                  <li>Search Engine Optimization.</li>
                  <li>Social Media Management.</li>
                  <li>Paid Ads Campaigns.</li>
                  <li>Brand Strategy & Growth.</li>
                  <li>Analytics & Performance Tracking.</li>
                </ul>

                <button className="modal-btn" onClick={()=>{const service = selectedService;
                  setSelectedService(null);
                 navigate("/contact-form",{state:{service}});}}>
                  Start Your Project →
                </button>
              </>
            )}

          </div>
        </div>
      )}

    
  


      </section>

  );
}

export default Services;