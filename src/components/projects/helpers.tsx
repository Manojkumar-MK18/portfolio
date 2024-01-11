import React, { ReactElement } from "react";
import { CardWrapper, ImageWrapper, TextWrappper } from "./subcomponents";
import { Subtitles, Title } from "../home/subcomponents";
import project_1 from "../../assests/p_1.png";

const ProjectCard = (): ReactElement => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={project_1} alt="" />
      </ImageWrapper>
      <TextWrappper>
        <Title
          font="1.2rem"
          color="rgb(226 232 240/1)"
          fontFamily="'Inter', sans-serif"
          lineHeight="1.25"
          fontWeight={500}
        >
          E-commerce
        </Title>
        <Subtitles
          font=".875rem"
          color="rgb(148 163 184/1)"
          fontFamily="'Inter', sans-serif"
          lineHeight="1.5"
          fontWeight={500}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sequi
          ipsam aspernatur doloremque accusantium repudiandae est, a,
          blanditiis, quo architecto.
        </Subtitles>
      </TextWrappper>
    </CardWrapper>
  );
};

export default ProjectCard;
