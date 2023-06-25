import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="https://raw.githubusercontent.com/dianashi/personal-website/main/assets/logo2.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="about" smooth={false}>
            About
          </NavLink>
          <NavLink className="menu-item" to="experience" smooth={false}>
            Experience
          </NavLink>
          <NavLink className="menu-item" to="projects" smooth={false}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={false}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
                                href="https://raw.githubusercontent.com/dianashi/personal-website/main/resume/spring2023_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
