import React, { ReactElement } from "react";
import {
  CardWrapper,
  HiglihWrapper,
  ImageWrapper,
  TextWrappper,
} from "./subcomponents";
import { Subtitles, Title } from "../home/subcomponents";

interface ProjectProsp {
  name: string;
  description: string;
  img: string;
  skills: string[];
}

const ProjectCard = ({
  name,
  description,
  img,
  skills,
}: ProjectProsp): ReactElement => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={img} alt="project_image" />
      </ImageWrapper>
      <TextWrappper>
        <Title
          font="1.2rem"
          color="rgb(226 232 240/1)"
          fontFamily="'Inter', sans-serif"
          lineHeight="1.25"
          fontWeight={500}
          className="title"
        >
          {name}
        </Title>
        <Subtitles
          font=".875rem"
          color="rgb(148 163 184/1)"
          fontFamily="'Inter', sans-serif"
          lineHeight="1.5"
          fontWeight={500}
        >
          {description}
        </Subtitles>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {skills?.map((skill, index) => {
            return <HiglihWrapper key={index}>{skill}</HiglihWrapper>;
          })}
        </div>
      </TextWrappper>
    </CardWrapper>
  );
};

export default ProjectCard;
