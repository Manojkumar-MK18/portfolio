import React, { ReactElement } from "react";
import { FooterWrapper, Words } from "./subcomponents";

const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <Words> Designed & Built by Manojkumar S</Words>
      <Words>Copyright © 2024 </Words>
    </FooterWrapper>
  );
};

export default Footer;
