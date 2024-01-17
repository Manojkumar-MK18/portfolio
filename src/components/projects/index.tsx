import React, { ReactElement } from "react";
import {
  Colwrapper,
  HomeContainer,
  HomeWrapper,
  PageWrapper,
  Rowwrapper,
} from "../home/subcomponents";
import ProjectCard from "./helpers";
import { ProfileCardContainer } from "./subcomponents";
import { ProjectData } from "./const";

const Project = (): ReactElement => {
  return (
    <PageWrapper>
      <HomeContainer height="140vh">
        <HomeWrapper>
          <Rowwrapper>
            <Colwrapper lg={4} xl={5}>
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
                      <ProjectCard
                        key={index}
                        name={data?.name}
                        description={data?.description}
                        img={data?.img}
                        skills={data?.skills}
                      />
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
