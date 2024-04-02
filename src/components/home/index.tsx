import React, { ReactElement } from "react";
import {
  HomeContainer,
  HomeWrapper,
  Rowwrapper,
  Colwrapper,
  PageWrapper,
  TitleWrapper,
  Title,
  Subtitles,
  ImageWrapper,
  Image,
  ResumeButton,
} from "./subcomponents";
import { Typewriter } from "react-simple-typewriter";
import manoj_image from "../../assests/home_manoj_1.png";
import rrsume from "../../assests/resume/manojkumar_react.pdf";
import { IconWrapper, Iicon } from "../footer/subcomponents";
 
const Home = (): ReactElement => {
  var query450 = window.matchMedia("(max-width: 550px)");
  return (
    <PageWrapper>
      <HomeContainer mobileHeight="100%">
        <HomeWrapper>
          <Rowwrapper noMargin>
            <Colwrapper lg={8} xl={6}>
              <TitleWrapper
                paddingLeft="3rem"
                style={{ marginTop: "70px" }}
                textAlign="start"
                align="start"
              >
                <Title
                  color="rgb(226 232 240/1)"
                  font={query450?.matches ? "1.4999rem" : "40px"}
                  fontFamily="'Inter', sans-serif"
                >
                  I am Manojkumar
                </Title>
                <Title
                  color="rgb(226 232 240/1)"
                  font={query450?.matches ? "1.2rem" : "1.5rem"}
                  className="mt-2"
                  fontFamily="'Inter', sans-serif"
                >
                  Experienced{" "}
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "Backend Developer",
                      "Freelancer",
                    ]}
                    loop
                    cursor
                    cursorColor="#ff4880"
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Title>
                <Subtitles
                  className="mt-3"
                  color="rgb(148 163 184/1)"
                  lineHeight="30px"
                  fontWeight={500}
                  fontFamily="'Inter', sans-serif"
                >
                  I’m a software developer with two years of hands-on experience
                  in creating dynamic and innovative web applications. My
                  passion for technology is coupled with a strong foundation in
                  both <span style={{ color: "white" }}>front-end</span> and{" "}
                  <span style={{ color: "white" }}>back-end </span>
                  development.
                </Subtitles>{" "}
                <IconWrapper className="mt-4">
                  <ResumeButton
                    onClick={() => {
                      window.open(rrsume);
                    }}
                  >
                    Download CV <i className="bx bxs-download"></i>
                  </ResumeButton>
                  <div className="icon_wrapper">
                    <Iicon
                      className="bx bxl-linkedin"
                      title="linkedin"
                      hoverColor="#0a66c2"
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/manojkumar-s-27a084208/"
                        );
                      }}
                    ></Iicon>
                    <Iicon
                      className="bx bxl-github"
                      title="github"
                      hoverColor="black"
                      onClick={() => {
                        window.open("https://github.com/Manojkumar-MK18");
                      }}
                    ></Iicon>
                    <Iicon
                      className="bx bxl-instagram"
                      title="instagram"
                      hoverColor="#bc2a8d"
                      onClick={() => {
                        window.open("https://www.instagram.com/s_mk_manoj/");
                      }}
                    ></Iicon>
                    <Iicon
                      className="bx bxl-twitter"
                      title="twitter"
                      hoverColor="#1DA1F2"
                    ></Iicon>
                    <Iicon
                      title="gmail"
                      hoverColor="red"
                      className="bx bxl-gmail"
                      onClick={() => {
                        window.open(
                          "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=manojkumar.sekar2000@gmail.com"
                        );
                      }}
                    ></Iicon>
                    <Iicon
                      onClick={() => {
                        window.open("https://wa.me/+918825781506");
                      }}
                      title="whatsapp"
                      hoverColor="green"
                      className="bx bxl-whatsapp"
                    ></Iicon>
                  </div>
                </IconWrapper>
              </TitleWrapper>
            </Colwrapper>
            <Colwrapper lg={4} xl={5}>
              <ImageWrapper>
                <Image src={manoj_image} alt="" />
              </ImageWrapper>
            </Colwrapper>
          </Rowwrapper>
        </HomeWrapper>
      </HomeContainer>{" "}
    </PageWrapper>
  );
};

export default Home;
