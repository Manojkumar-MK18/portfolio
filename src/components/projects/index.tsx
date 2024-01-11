import React, { ReactElement } from "react";
import {
  Colwrapper,
  HomeContainer,
  HomeWrapper,
  PageWrapper,
  Rowwrapper,
} from "../home/subcomponents";
import ProjectCard from "./helpers";

const Project = (): ReactElement => {
  return (
    <PageWrapper>
      <HomeContainer height="100vh">
        <HomeWrapper>
          <Rowwrapper>
            <Colwrapper lg={4} xl={5}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard /> 
            </Colwrapper>
          </Rowwrapper>
        </HomeWrapper>
      </HomeContainer>
    </PageWrapper>
  );
};

export default Project;
