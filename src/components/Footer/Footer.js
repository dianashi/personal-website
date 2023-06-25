import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/dianashi/personal-website/main/assets/footer3.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  position: relative;

  span { 
    position: absolute;
    bottom: 4rem;
    color: black;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span color="black">
          Copyright 2023 by Diana Shi
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
