import "./Footer.css";
import {FaTwitter, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
export const Footer = ()=>{
    return(
        <div className="footerDiv">
          
          <div className="footerIcon">
          <ul className="ulFooter">
           <li className="liFooter">
            <a className="iconFoot" href = "https://github.com/Chaudhary-sonika" target="_blank">
             <FaGithub />
            </a>
           </li>
           <li className="liFooter" >
            <a className="iconFoot" href = "https://twitter.com/IAm_Sonika" target="_blank">
                <FaTwitter />
            </a>
        </li>
        <li className="liFooter">
            <a className="iconFoot" href = "https://www.linkedin.com/in/sonika-chaudhary-551b28251/" target="_blank">
                <FaLinkedin />
            </a>
        </li>
        <li className="liFooter">
            <a className="iconFoot" href="mailto:sonikachaudhary.ab@gmail.com" target="_blank">
                <FaEnvelope />
            </a>
        </li>
          </ul>
        </div>
        
        <p className="paragraph-foot">© by Sonika Chaudhary</p>
          
        </div>
    )
}