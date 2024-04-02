import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 1% 7%;
  background: rgb(15 23 42 / 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Words = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.7;
  color: #a2a2a2;
`;

export const IconWrapper = styled.div`
  .icon_wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Iicon = styled.i<{ hoverColor?: string }>`
  padding: 0 25px 0 0;
  font-size: 25px;
  color: white;
  cursor: pointer;
  transition: all 0.4s;
  color: rgb(148 163 184/1);
  &:hover {
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "white")};
    transition: all 0.4s;
  }
  @media (max-width: 650px) {
    padding: 10px;
  }
`;
