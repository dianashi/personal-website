import styled from "styled-components";

export const ContactWrapper = styled.div`
  // margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 2px;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  @media (min-width: 200px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;
