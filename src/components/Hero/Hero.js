import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="main">
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <h1>Hello, I'm Diana Shi</h1>
      <br></br>
      <h5> A CS student in the University of Waterloo</h5>
      <p>
      I'm not a genius. I'm just a tremendous bundle of experience. - R. Buckminster Fuller
      </p>
      <ScrollDown to="about">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/dianashi/personal-website/main/assets/scroll-down.svg"
              alt="scroll-down"
              color="#a3a1a1;"
            />
          </ScrollLink>
        </ScrollDown>

    </div>
  );
}

export default Hero;
