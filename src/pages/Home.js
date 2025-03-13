


import React from "react";
import "./home.css"; // Import CSS file
// import aboutImage from "/images/about.jpg"; // Ensure the correct path

function Home() {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner" 
        style={{
          backgroundImage: "url('/images/banner.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
          height: "400px"
        }}
      >
        <h1>Welcome to My React Website</h1> 
        <p>Your one-stop solution for modern web services.</p>
        <button className="explore-btn">Explore More</button>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>We build modern, fast, and responsive websites.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-chart-line"></i>
            <h3>SEO Optimization</h3>
            <p>Boost your website ranking with our SEO services.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-paint-brush"></i>
            <h3>Graphic Design</h3>
            <p>We create stunning graphics and branding solutions.</p>
          </div>

                      
          <div className="service-card">
      <i className="fas fa-mobile-alt"></i>
      <h3>App Development</h3>
      <p>Build powerful and user-friendly mobile applications.</p>
    </div>
    <div className="service-card">
      <i className="fas fa-shopping-cart"></i>
      <h3>E-Commerce</h3>
      <p>Get a feature-rich online store for your business.</p>
    </div>
    <div className="service-card">
      <i className="fas fa-server"></i>
      <h3>Cloud Hosting</h3>
      <p>Reliable and secure cloud hosting solutions.</p>
    </div>
    <div className="service-card">
      <i className="fas fa-user-shield"></i>
      <h3>Cybersecurity</h3>
      <p>Protect your business with advanced security solutions.</p>
    </div>
    <div className="service-card">
      <i className="fas fa-bullhorn"></i>
      <h3>Digital Marketing</h3>
      <p>Expand your reach with our expert digital marketing strategies.</p>
    </div>   

        </div>
      </div>

      {/* About Us Section */}
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to delivering top-notch web solutions.
            Our goal is to create stunning, user-friendly websites that help businesses grow.
          </p>
          <p>
            With years of experience, we specialize in modern web development,
            SEO optimization, and UI/UX design.
          </p>

          <a href="/about" className="about-btn">Learn More</a>
        </div>
        <div className="about-image"  
              
              style={{
                backgroundImage: "url('/images/aboutus.jpg')",
               
              }}
            >
        
           
         
        </div>
      </div>

 {/*  testimonial section */}

      <div className="testimonials-section">
  <h2>What Our Clients Say</h2>
  <div className="testimonials">
    <div className="testimonial-card">
      <p>"This company transformed our website! Super professional and fast."</p>
      <h4>- Alex Johnson</h4>
    </div>
    <div className="testimonial-card">
      <p>"Amazing service! Our SEO ranking improved drastically."</p>
      <h4>- Priya Sharma</h4>
    </div>
    <div className="testimonial-card">
      <p>"Great UI/UX design! Our customers love the new look."</p>
      <h4>- Michael Lee</h4>
    </div>
  </div>
</div>


       
<div className="contact-section"                >
  <h2>Contact Us</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis 
    dignissimos eaque doloremque, nulla mollitia facilis.
  </p>

  <div className="contact-container">
    {/* Left Side - Contact Info */}
    <div className="contact-info">
      <div className="info-item">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <h4>Address</h4>
          <p>4517 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
        </div>
      </div>
      <div className="info-item">
        <i className="fas fa-phone-alt"></i>
        <div>
          <h4>Phone</h4>
          <p>561-456-2321</p>
        </div>
      </div>
      <div className="info-item">
        <i className="fas fa-envelope"></i>
        <div>
          <h4>Email</h4>
          <p>example@email.com</p>
        </div>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <div className="contact-form">
      <h3>Send Message</h3>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Type your Message..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</div>




    </div>


      
  );
}

export default Home;


