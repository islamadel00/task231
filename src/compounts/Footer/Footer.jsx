import "./Footer.css";
import img1 from "./Assetsfooter/f1.png"
import img2 from "./Assetsfooter/f2.png"
import img3 from "./Assetsfooter/f3.png"
import img4 from "./Assetsfooter/f4.png"
import img5 from "./Assetsfooter/f5.png"
import img6 from "./Assetsfooter/f6.png"

import Foomin from "./Foomin"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header container">
        <div className="footer-contact">
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>call:+20 123 456 789</span>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span>Email:info@newhome.com</span>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span>Alexandria, Egypt</span>
          </div>
        </div>
      </div>
      <div className="container footer-content">
      
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      
        <div className="footer-col">
          <h4>INSTAGRAM FEEDS</h4>
          <div className="insta-grid">
            <Foomin img={img1} />
            <Foomin img={img2} />
            <Foomin img={img3} />
            <Foomin img={img4} />
            <Foomin img={img5} />
            <Foomin img={img6} />
          </div>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter and get the latest updates.</p>
          <form className="newsletter">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NEWHOME. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
