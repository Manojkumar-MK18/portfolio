import { Card } from "react-bootstrap";
import styled from "styled-components";

export const SkillsWrapper = styled.div`
  color: rgb(148 163 184/1);
  font-weight: 500;

  span {
    padding: 5px 0;
  }
`;

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 800px;
  @media (max-width: 550px) {
    width: 400px;
  }
`;

export const SkillsContainer = styled.div`
  margin: 15px 15px 70px 15px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const SkillsCard = styled(Card)`
  padding: 30px 15px 25px;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 8px;
  transition: 0.5s;
  cursor: pointer;
  height: 150px;
  width: 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.5s;
    border: 1px solid lightgray;
    background-color: rgba(45, 212, 191, 0.1);
    border-color: rgba(24, 231, 204, 0.1);
    .filter {
      transition: 0.5s;
      filter: grayscale(0);
    }
  }
  .filter {
    transition: 0.5s;
  }
`;

export const SkillsIconWrapper = styled.div`
  width: 70px;
  filter: grayscale(80);
`;

export const SkillsIcon = styled.img`
  font-size: 80px;
  color: #fff;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Skills = styled.h5`
  position: absolute;
  color: white;
  top: 165px;
  font-size: 15px;
  display: flex;
  width: 130px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`;
