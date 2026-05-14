function Footer(){
    return(
        <div className="footer"  data-aos="fade-up">
  <div className="footer-content">

    {/* LEFT */}
    <div className="footer-left">
      <h2><span className="logo-n">N</span> Nemonex</h2>
      <p>
        We build innovative software, hardware, and digital solutions to help
        businesses succeed in the digital era.
      </p>

      <div className="social-icons">
        <span>🌐</span>
        <span>🐦</span>
        <span>💼</span>
        <span>📸</span>
      </div>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-links">
      <h4>Quick Links</h4>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>

    {/* SERVICES */}
    <div className="footer-links">
      <h4>Services</h4>
       <a href="#software">Software Development</a>
       <a href="#hardware">Hardware Projects</a>
       <a href="#marketing">Digital Marketing</a>
        
      
    </div>

    {/* CONTACT */}
    <div className="footer-links" >
      <h4>Contact Us</h4>
      <p className="contact-item">
        📞 <a href="tel:+917305698058">7305698058</a>

        </p>
      <p className="contact-item">✉️
         <a href="mailto:nemonextechnologies@gmail.com">
         <span>nemonextechnologies@gmail.com</span></a></p>
      <p>📍 India</p>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="footer-bottom">
    <p>© 2026 Nemonex Technologies. All Rights Reserved.</p>
    <div>
      <span>Privacy Policy</span>
      <span> | </span>
      <span>Terms of Service</span>
    </div>
  </div>
</div>

    );
}

export default Footer;