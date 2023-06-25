import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <>
  <div id="about">
    <br></br>
      <h2  class="hr-lines"> 
      <p style={{fontSize: '30px'}}>ABOUT ME</p>
      </h2>

    <ContactWrapper >
      <div className="Container">
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/dianashi/personal-website/main/assets/DS.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Diana (Yiran) Shi </strong> 
            and I am a student, a programmer, a piano player and a dog lover. 
            I am currently a third year computer science student in the <strong>University of Waterloo </strong>.
            I love learning and trying new things! 
            I have previous work experience as a <strong>Full Stack Web Developer </strong>in CI Technologies and <strong>Software Engineer </strong>in UKG
            and I am currently seeking for fall 2023 software internship.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
    </div>
    </>
  );
}

export default About;
