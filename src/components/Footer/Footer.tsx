import { BiLocationPlus, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div id="footer-page">
      <div className="container">
              <div className="social">
                  <div className="logo">
                      <img src={logo} alt="logo-image" />
                      <h2>SAFE YOUR WEB</h2>
                  </div>
                  <p>We Completely Secure, <br /> Your Digital Assets</p>
                  <div className="social-links">
                      <div className="items">
                          <i><BiLogoTwitter /></i>
                          <p>Twitter</p>
                      </div>
                      <div className="items">
                          <i><BiLogoInstagram /></i>
                          <p>Instagram</p>
                      </div>
                      <div className="items">
                          <i><BiLogoLinkedin /></i>
                          <p>Linkedin</p>
                      </div>
                  </div>
        </div>
              <div className="company">
                  <h2>Company</h2>
                  <p><a href="#">Services</a></p>
                  <p><a href="#">Career</a></p>
                  <p><a href="#">About Us</a></p>
                  <p><a href="#">Contact Us </a></p>
        </div>
              <div className="about">
                  <h2>About Us</h2>
          <div className="item">
            <i>
              <BiLocationPlus />
            </i>
            <p>Saket, New Delhi, 110017</p>
          </div>
          <div className="item">
            <i>
              <MdCall />
            </i>
            <p>+1 (002) 345 6789</p>
          </div>
          <div className="item">
            <p>Time 09:00 am – 07:00 pm (IST)</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2023</p>
        <a href="www.safeyourweb.com">safe you web</a>
      </div>
    </div>
  );
};

export default Footer;
