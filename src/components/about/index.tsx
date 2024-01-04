import React, { ReactElement } from "react";
import {
  HomeContainer,
  HomeWrapper,
  Rowwrapper,
  Colwrapper,
  TitleWrapper,
  Subtitles,
  Image,
  ImageWrapper,
  PageWrapper,
} from "../home/subcomponents";
import manoj_image from "../../assests/home_manoj_2.png";

const About = (): ReactElement => {
  return (
    <PageWrapper>
      <HomeContainer>
        <HomeWrapper>
          <Rowwrapper>
            <Colwrapper lg={4} xl={5}>
              <ImageWrapper left="30px">
                <Image src={manoj_image} alt="" />
              </ImageWrapper>
            </Colwrapper>
            <Colwrapper lg={8} xl={6}>
              <TitleWrapper paddingLeft="3rem" style={{ marginTop: "70px" }}>
                <Subtitles
                  color="rgb(148 163 184/1)"
                  lineHeight="1.800"
                  fontWeight={500}
                >
                  Hello! My name is Manojkumar and I enjoy creating things that
                  live on the internet.I thrive in translating complex ideas
                  into efficient, user-friendly software.I'm dedicated to
                  staying abreast of emerging technologies, continuously
                  expanding my knowledge base, and embracing new challenges that
                  drive the ever-evolving landscape of software development.
                  <br />
                  <br />
                  Whenever I have time, I am eager to develop my skills in {""}
                  <span style={{ color: "white" }}>
                    HTML, CSS, Javascript, Typescript, Javascript libraries like
                    Reactjs, Angularjs, Redux, Redux toolkit, Nodejs, Expressjs
                    and AWS.
                  </span>
                  <br />
                  <br />
                  When I’m not at the computer, I’m usually hanging out with
                  Family and Friends. 
                </Subtitles>{" "}
                {/* <IconWrapper className="mt-4">
                  <i
                    className="bx bxl-linkedin"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/manojkumar-s-27a084208/"
                      );
                    }}
                  ></i>{" "}
                  <i
                    className="bx bxl-github"
                    onClick={() => {
                      window.open("https://github.com/Manojkumar-MK18");
                    }}
                  ></i>
                  <i className="bx bxl-instagram"></i>
                  <i className="bx bxl-twitter"></i>
                </IconWrapper> */}
              </TitleWrapper>
            </Colwrapper>
          </Rowwrapper>
        </HomeWrapper>
      </HomeContainer>
    </PageWrapper>
  );
};

export default About;
