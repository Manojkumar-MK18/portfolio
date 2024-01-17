import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: row;
  width: 500px;
  padding: 10px;
  cursor: pointer;
  background: transparent;
  color: white;
  border: none;
  margin: 10px 0;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.15)
    );
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  top: 0;
  img {
    object-fit: contain;
    width: 100%;
    height: 73px;
    min-height: 20px !important;
    min-width: 73px !important;
    border-radius: 3px;
    border: 1px solid#e5e7eb;
    padding: 0 3px;
  }
`;

export const TextWrappper = styled.div`
  width: 350px;
  position: relative;
  left: 10px;
`;

export const HiglihWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  font-weight: 500;
  background-color: rgba(45, 212, 191, 0.1);
  border-radius: 9999px;
  color: rgb(94 234 212 / 1);
  line-height: 1.25rem;
  margin-top: 0.5rem;
  margin-right: 0.375rem;
`;

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 100%;
  overflow: auto;
`;
