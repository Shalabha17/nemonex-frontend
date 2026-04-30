

import aboutImage from "../assets/about1.png";



function About(){
    return(
          <section id="about" className="about-section" >
                      <div className="about-box">
                      <div className="about-left" data-aos="fade-right">
                          <img src={aboutImage} alt="about"/>
                      </div>
                      <div className="about-right" data-aos="fade-left">
                          <h2>Get to <span className="highlight">know </span>us</h2>
                          <p>
                            Nemonex Technologies is a modern tech startup focused on building
                            innovative software, hardware, and digital solutions for the future.
                          </p>
                       <div className="about-points">
                          <div className="point">
                              <span>✔</span>
                       <p> Innovative Solutions</p>
                       </div>
                       <div className="point">
                          <span>✔</span>
                       <p> Modern Technologies (MERN, Cloud, AI)</p>
                       </div>
                       <div className="point">
                           <span>✔</span>
                       <p> Client-Focused Approach</p>
                       </div>
                       </div>
                       <hr className="divider"/>
                        <div className="about-stats">
                          <div className="stat-card">
                           <div className="icon blue">🚀</div>
                         <h3>150+</h3>
                         <p>Projects</p>
                      </div>
          
                      <div className="stat-card">
                          <div className="icon purple">👥</div>
                        <h3>75+</h3>
                        <p>Clients</p>
                      </div>
          
                       <div className="stat-card">
                          <div className="icon orange">📅</div>
                         <h3>3+</h3>
                        <p>Years</p>
                      </div>
                      </div>
                      </div>
          
                      </div>
          
                   </section>
    );
}

export default About;