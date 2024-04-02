import React, { ReactElement } from "react";
import {
  HomeContainer,
  HomeWrapper,
  TitleWrapper,
  Subtitles,
  PageWrapper,
  Title,
} from "../home/subcomponents";
import {
  SkillsCard,
  SkillsIcon,
  SkillsIconWrapper,
  Skills,
  SkillsContainer,
  SkillCardContainer,
} from "./subcomponent";
import HTML from "../../assests/skills/html-1.svg";
import CSS from "../../assests/skills/css-3.svg";
import JS from "../../assests/skills/javascript-1.svg";
import TS from "../../assests/skills/typescript.svg";
import REACT from "../../assests/skills/react-2.svg";
import SC from "../../assests/skills/styled-components-1.svg";
import RT from "../../assests/skills/redux.svg";
import NODE from "../../assests/skills/nodejs-1.svg";
import EXP from "../../assests/skills/icons8-nodejs-240.svg";

const About = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var query450 = window.matchMedia("(max-width: 550px)");
  console.log(query450?.matches);
  return (
    <PageWrapper>
      {/* <HomeContainer height={query450 ? "110vh" : "130vh"}> */}
      <HomeContainer height={"135vh"} mobileHeight="260vh">
        <HomeWrapper>
          <TitleWrapper
            style={{ marginTop: "45px" }}
            align="center"
            textAlign="center"
          >
            <Subtitles
              color="rgb(148 163 184/1)"
              lineHeight="1.800"
              fontWeight={500}
              fontFamily="'Inter', sans-serif"
            >
              Hello! My name is Manojkumar and I enjoy creating things that live
              on the internet.I thrive in translating complex ideas into
              efficient, user-friendly software.I'm dedicated to staying abreast
              of emerging technologies, continuously expanding my knowledge
              base, and embracing new challenges that drive the ever-evolving
              landscape of software development.
              <br />
              Whenever I have time, I am eager to develop my skills in {""}
              New things. When I’m not at the computer, I’m usually hanging out
              with my family and friends, or watching movies.
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
            <SkillCardContainer className="mt-5">
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={HTML} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>HTML</Skills>
              </SkillsContainer>
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={CSS} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>CSS</Skills>
              </SkillsContainer>{" "}
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={SC} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>Styled Components</Skills>
              </SkillsContainer>
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={JS} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>Javascript</Skills>
              </SkillsContainer>{" "}
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={TS} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>TypeScript</Skills>
              </SkillsContainer>{" "}
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={REACT} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>React</Skills>
              </SkillsContainer>{" "}
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={RT} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>Redux</Skills>
              </SkillsContainer>{" "}
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={NODE} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>Nodejs</Skills>
              </SkillsContainer>
              <SkillsContainer>
                <SkillsCard>
                  <SkillsIconWrapper className="filter">
                    <SkillsIcon src={EXP} />
                  </SkillsIconWrapper>
                </SkillsCard>
                <Skills>Expressjs</Skills>
              </SkillsContainer>{" "}
            </SkillCardContainer>
          </TitleWrapper>
        </HomeWrapper>
      </HomeContainer>
    </PageWrapper>
  );
};

export default About;
