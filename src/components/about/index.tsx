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
  Title,
} from "../home/subcomponents";
import manoj_image from "../../assests/home_manoj_2.png";

const About = (): ReactElement => {
  return (
    <PageWrapper>
      <HomeContainer height="100vh"> 
        <HomeWrapper>
          <Rowwrapper>
            <Colwrapper lg={4} xl={5}>
              <ImageWrapper left="30px">
                <Image src={manoj_image} alt="" />
              </ImageWrapper>
            </Colwrapper>
            <Colwrapper lg={8} xl={6}>
              <TitleWrapper paddingLeft="3rem" style={{ marginTop: "45px" }}>
                <Subtitles
                  color="rgb(148 163 184/1)"
                  lineHeight="1.800"
                  fontWeight={500}
                  fontFamily="'Inter', sans-serif"
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
                  New things. When I’m not at the computer, I’m usually hanging
                  out with my family and friends, or watching
                  movies.
                </Subtitles>{" "}
                <Title
                  color="rgb(148 163 184/1)"
                  font="1rem"
                  className="mt-2"
                  fontFamily="'Inter', sans-serif"
                >
                  {" "}
                  Here are a few technologies I’ve been working with recently:
                </Title>
                <Subtitles
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  fontFamily="'Fira Code', monospace"
                  className="mt-2"
                >
                  <div className="skills">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Styled components</span>
                    <span>JavaScript (ES6+)</span>
                  </div>{" "}
                  <div className="skills">
                    {" "}
                    <span>TypeScript</span>
                    <span>Redux</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                  </div>
                </Subtitles>
              </TitleWrapper>
            </Colwrapper>
          </Rowwrapper>
        </HomeWrapper>
      </HomeContainer>
    </PageWrapper>
  );
};

export default About;
