 import hero from "../assets/hero3.png";
 
 
 function Hero(){
  return(
 
 
 <section id="home" className="home"  >
            <div className="home-left" data-aos="fade-right" >
                <p className="tagline">Innovate<span>.</span>Build<span>.</span>Grow<span>.</span></p>
           <h1>
            Build your Future with <span>Nemonex </span>  
           </h1>
           <p className="home-desc">

            At Nemonex Technologies, we transform ideas into powerful digital solutions
            through software developement,hardware innovation and strategic digital marketing.

           </p>

           <button className="btn-primary" onClick={() => window.location.href = "#services"} >
            Get Started →
           </button>
        </div>
        <div className="home-right" data-aos="fade-left">
            <img src={hero} alt="hero"/>
        </div>

        </section>

  );
}

export default Hero;