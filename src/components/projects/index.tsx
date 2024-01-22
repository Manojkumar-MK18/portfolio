import React, { ReactElement } from "react";
import {
  Colwrapper,
  HomeContainer,
  HomeWrapper,
  PageWrapper,
  Rowwrapper,
  Title,
  TitleWrapper,
} from "../home/subcomponents";
import ProjectCard from "./helpers";
import { ProfileCardContainer } from "./subcomponents";
import { ProjectData } from "./const";

const Project = (): ReactElement => {
  return (
    <PageWrapper>
      <HomeContainer>
        <HomeWrapper>
          <TitleWrapper>
            <Title
              color="rgb(226 232 240/1)"
              font="18px"
              fontFamily="'Inter', sans-serif"
              className="mt-3"
            >
              Here is a list of the projects I've recently worked on.
            </Title>
          </TitleWrapper>
          <Rowwrapper>
            <Colwrapper>
              <ProfileCardContainer>
                {ProjectData?.map((data, index) => {
                  return (
                    <>
                      <ProjectCard
                        key={index}
                        name={data?.name}
                        description={data?.description}
                        img={data?.img}
                        skills={data?.skills}
                      /> 
                    </>
                  );
                })}
              </ProfileCardContainer>
            </Colwrapper>
          </Rowwrapper>
        </HomeWrapper>
      </HomeContainer>
    </PageWrapper>
  );
};

export default Project;
