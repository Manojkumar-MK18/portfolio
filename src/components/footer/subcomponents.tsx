import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 1% 7%;
  background-color: #02050a;
  display: flex;
  justify-content: space-between;
`;

export const Words = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.7;
  color: #a2a2a2;
`;

export const IconWrapper = styled.div`
  i {
    padding: 0 30px 0 0;
    font-size: 25px;
    color: white;
    cursor: pointer;
    transition: all 0.4s;
    color: rgb(148 163 184/1);
    &:hover {
      color: white;
    }
  }
`;
