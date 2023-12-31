import logo from "../../assets/logo.png";
import {
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

const Layout = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);

  const toggle = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div>
      {/* Communication Section inside Navbar  Starts here*/}
      <div className="social">
        <div className="communication">
          <div>
            <i>
              <MdLocationOn />
            </i>
            <p>Saket, New Delhi, 11017</p>
          </div>
          <div>
            <i>
              <MdEmail />
            </i>
            <p>
              {" "}
              <a href="mail-to:query@safeyourweb.com">query@safeyourweb.com</a>
            </p>
          </div>
        </div>
        <div className="social-links">
          <i>
            <a href="https://twitter.com/safeyourweb">
              <BiLogoTwitter />
            </a>
          </i>
          <i>
            <a href="https://instagram.com/safeyourweb?igshid=YmMyMTA2M2Y=">
              <BiLogoInstagramAlt />
            </a>
          </i>
          <i>
            <a href="https://www.linkedin.com/company/safe-your-web/">
              <BiLogoLinkedinSquare />
            </a>
          </i>
        </div>
      </div>
      {/* Communication Section inside Navbar  Ends here */}

      {/* Navbar Section Starts Here */}
      <div className="navigation">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Safe Your Web</h2>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <i
          className="hamburgerMenu"
          onClick={() => {
            toggle();
          }}
        >
          <HiMenuAlt4 />
        </i>
      </div>
      <div className={showMenu ? "showdropDownMenu" : "hidedropDownMenu"}>
        <div className="links">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  toggle();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  toggle();
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  toggle();
                }}
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  toggle();
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  toggle();
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
