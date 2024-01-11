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
  transition: all 0.3s;
  border: none;
  &:hover {
    transition: all 0.3s;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
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
