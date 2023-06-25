import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <div>
        <br></br>
        <h2 id="about" class="hr-lines"> 
        <p style={{fontSize: '30px'}}>Contact</p>
        </h2>
        <br></br>
  
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="BigCard">
          <Email>
            <span>y337shi@uwaterloo.ca</span>
            <a
              className="btn btn2 SecondarBtn"
              href="mailto:y337shi@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
    </div>
  );
}

export default Contact;
