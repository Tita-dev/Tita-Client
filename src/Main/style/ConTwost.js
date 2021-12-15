import styled, { keyframes } from "styled-components";

const TextKeyframe = keyframes`
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
`;

export const Cont2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45vh;
  background-color: #f2f2f2;
`;

export const Ment2 = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

export const Con2Ment1 = styled.p`
  color: #0076dc;
  font-weight: 700;
  font-size: 3rem;
  white-space: nowrap;
  text-align: center;
  margin: 4vh 0 4vh 0;
  animation: ${TextKeyframe};
  animation-duration: 3.5s;

  div {
    display: inline;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1024px) {
    display: grid;
  }

  @media (max-width: 767px) {
    display: grid;
  }

  @media (max-width: 360px) {
    font-size: 2.2rem;
  }
`;

export const Con2Ment2 = styled.p`
  @media (max-width: 1024px) {
    display: grid;
    .underText {
      margin-top: -3.7vh;
    }
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  div {
    display: inline;
    @media (max-width: 768px) {
      font-size: 1.9rem;
    }
  }
  font-size: 2rem;
  text-align: center;
  margin: 2vh 0 4vh 0;
  .bold_text {
    font-weight: bold;
    display: inline;
  }
  animation: ${TextKeyframe};
  animation-duration: 3.5s;
`;
