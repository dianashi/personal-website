import styled from "styled-components";

export const ResumeBtn = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px
`;

export const TimelineOppositeContent = styled.div`
  @media (min-width: 200px) {
    font-size: 1px;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;
