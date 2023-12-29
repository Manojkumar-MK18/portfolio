import React, { ReactElement } from "react";
import {
  HomeContainer,
  Navbar,
  HomeWrapper,
  Rowwrapper,
  Colwrapper,
  PageWrapper,
  TitleWrapper,
  Title,
  Subtitles,
  ImageWrapper,
  Image,
} from "./subcomponents";
import { Typewriter } from "react-simple-typewriter";
import manoj_image from "../../assests/manoj.png";

const Home = (): ReactElement => {
  return (
    <PageWrapper>
      <Navbar>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Project</span>
          </li>
        </ul>
      </Navbar>
      <HomeContainer>
        <HomeWrapper>
          <Rowwrapper>
            <Colwrapper lg={8} xl={6}>
              <TitleWrapper paddingLeft="3rem" style={{ marginTop: "80px" }}>
                <Title color="rgb(226 232 240/1)" font="50px">
                  Manojkumar S
                </Title>
                <Title
                  color="rgb(226 232 240/1)"
                  font="1.5rem"
                  className="mt-2"
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
                  className="mt-4"
                  color="rgb(148 163 184/1)"
                  lineHeight="30px"
                  fontWeight={500}
                >
                  I’m a software Developer with two years of hands-on experience in creating dynamic and
                  innovative web applications. My passion for technology,
                  coupled with a strong foundation in both front-end and
                  back-end development.
                </Subtitles>
              </TitleWrapper>
            </Colwrapper>
            <Colwrapper lg={4} xl={5}>
              <ImageWrapper>
                <Image src={manoj_image} alt="" />
              </ImageWrapper>
            </Colwrapper>
          </Rowwrapper>
        </HomeWrapper>
      </HomeContainer>
    </PageWrapper>
  );
};

export default Home;
