import { Col, Nav, Row } from "react-bootstrap";
import styled from "styled-components";
import home_1 from "../assests/home_1.jpg";
import { FontProsp, WrapperProsp } from "./types";

export const PageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden !important;
`;

export const Navbar = styled(Nav)`
  position: fixed;
  background-color: #141c27;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: end;

  ul {
    margin-right: 80px;
  }
  li {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    list-style: none;
    margin: 20px;
    padding: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
  }
  ul li a {
    color: #fff;
    list-style: none;
  }
`;

export const HomeContainer = styled.section`
  background-image: url(${home_1});
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  height: 100vh;
  padding-top: 80px;
`;

export const HomeWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Rowwrapper = styled(Row)`
  max-width: 100%;
  width: 100%;
  margin: ${({ noMargin }) => (noMargin ? null : "1%")};
  padding: ${({ padding }) => (padding ? padding : "1%")};
  max-width: 1500px;
`;

export const Colwrapper = styled(Col)``;

export const TitleWrapper = styled.div<WrapperProsp>`
  margin: ${({ margin }) => (margin ? margin : "20px 0")};
  display: flex;
  height: ${({ height }) => (height ? height : null)};
  flex-direction: column;
  align-items: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "center")};
  text-align: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "center")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : null)};
`;

export const Title = styled.h1<FontProsp>`
  font-size: ${({ font }) => (font ? font : `36px`)};
  position: relative;
  color: ${({ color }) => (color ? color : "black")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : null)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : null)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : null)};
  span {
    color: #ff4880;
    font-style: italic;
  }
  .job {
    font-family: "Lato", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    color: #686976;
  }
`;

export const Subtitles = styled.p<FontProsp>`
  font-size: ${({ font }) => (font ? font : null)};
  color: ${({ color }) => (color ? color : "black")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : null)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : null)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : null};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : null)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : null)};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  position: relative;
  top: -60px;
  width: 500px;
  height: 500px; 
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
