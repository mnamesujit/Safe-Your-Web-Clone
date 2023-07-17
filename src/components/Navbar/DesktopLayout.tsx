import { BiLogoTwitter, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';
import {MdEmail, MdLocationOn} from 'react-icons/md'
const DesktopLayout = () => {
  return (
      <div>
      <div className="social">
        <div className="communication">
          <div>
            <i><MdLocationOn /></i>
            <p>Saket, New Delhi, 11017</p>
          </div>
          <div>
            <i><MdEmail /></i>
            <p> <a href="mail-to:query@safeyourweb.com">query@safeyourweb.com</a></p>
          </div>
        </div>    
        <div className="social-links">
          <i><a href="https://twitter.com/safeyourweb"><BiLogoTwitter /></a></i>
          <i><a href="https://instagram.com/safeyourweb?igshid=YmMyMTA2M2Y="><BiLogoInstagramAlt /></a></i>
          <i><a href="https://www.linkedin.com/company/safe-your-web/"><BiLogoLinkedinSquare /></a></i>
          </div>
       </div>
       <div className="navigation">
        
       </div>
      </div>
  )
}

export default DesktopLayout;