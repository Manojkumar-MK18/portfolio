import { Col, Offcanvas, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontProsp, WrapperProsp } from "./types";

export const PageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden !important;
  position: relative;
  z-index: 1;
`;

export const Navbar = styled.header`
  position: fixed;
  background: radial-gradient(500px at 1050px 250px, #202d41, transparent 90%);
  height: 70px;
  width: 100%;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: end;
  z-index: 111;
  ul {
    margin-right: 80px;
    margin-top: 15px;
    @media (max-width: 550px) {
      display: none;
    }
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

export const HomeContainer = styled.section<{ height?: string }>`
  background: rgb(15 23 42 / 1);
  height: ${({ height }) => (height ? height : "100vh")};
  padding-top: 80px;
`;

export const HomeWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;

export const Rowwrapper = styled(Row)`
  max-width: 100%;
  width: 100%;
  margin: ${({ noMargin }) => (noMargin ? null : "1%")};
  padding: ${({ padding }) => (padding ? padding : "1%")};
  max-width: 1500px;
`;

export const Colwrapper = styled(Col)`
  .skills {
    display: flex;
    justify-content: start;
    flex-direction: column;
    position: relative;
    span {
      padding: 5px 70px 6px 0;
      color: white;
      position: relative;
      font-size: 13px;
      &::before {
        content: "▹";
        position: relative;
        color: rgb(148 163 184/1);
        margin-right: 10px;
        font-size: 14px;
        line-height: 12px;
      }
    }
  }
`;

export const TitleWrapper = styled.div<WrapperProsp>`
  margin: ${({ margin }) => (margin ? margin : "20px 0")};
  display: flex;
  height: ${({ height }) => (height ? height : null)};
  flex-direction: column;
  align-items: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "center")};
  text-align: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "center")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : null)};
  @media (max-width: 550px) {
    padding-left: 0;
    text-align: center;
    align-items: center;
  }
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

export const ImageWrapper = styled.div<{ left?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-left: ${({ left }) => (left ? left : "70px")};
  position: relative;
  top: -60px;
  width: 550px;
  height: 550px;
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const HamburgerIcon = styled.i`
  color: white;
  padding: 10px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 550px) {
    display: none;
  }
`;

export const OffCanvaWrappper = styled.div`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const OffCanvaContainer = styled(Offcanvas)`
  background-color: rgb(15 21 42 / 1);
  color: white;
  min-height: 45%;
  .offcanvas-header .btn-close {
    color: #fff;
    filter: brightness(0) invert(1);
  }

  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  li {
    padding: 10px 0;
  }
`;
