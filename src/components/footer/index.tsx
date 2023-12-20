import React, { ReactElement } from "react";
import { FooterWrapper, Words, IconWrapper } from "./subcomponents";

const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <Words> Copyright © 2024 | Designed and Developed by Manojkumar S</Words>
      <Words>
        <IconWrapper>
          <i
            className="bx bxl-github"
            onClick={() => {
              window.open("https://github.com/Manojkumar-MK18");
            }}
          ></i>

          <i
            className="bx bxl-linkedin"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/manojkumar-s-27a084208/"
              );
            }}
          ></i>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-twitter"></i>
        </IconWrapper>
      </Words>
    </FooterWrapper>
  );
};

export default Footer;
