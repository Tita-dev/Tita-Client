import styled from "styled-components";

// 3_1 Section
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 50rem;
  margin-top: 3vh;
`;

export const ConOneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 360px) {
    display: grid;
  }

  .Img3 {
    @media (max-width: 1366px) {
      margin-left: 10vh;
    }
  }
`;

export const MentOne = styled.div`
  font-size: 2.3rem;
  font-weight: 450;
  margin: 0 7vw;

  @media (max-width: 768px) {
    margin-left: 1vh;
  }
  .sub_title1 {
    color: #dcc600;
    font-size: 3rem;
    font-weight: 700;
    margin-top: 3vh;

    @media (max-width: 1024px) {
      // Ipad 세로
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    @media (max-width: 360px) {
      font-size: 1.8rem;
    }
  }
  .sub_sentence {
    margin: 4vh 0;
    @media (max-width: 1024px) {
      // Ipad 세로
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
  }

  .Img3 {
    margin: 0 5vw 0 9vw;
  }
`;

// 3_2 Section
export const ConTwoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10vh;

  @media (max-width: 360px) {
    display: grid;
  }

  .Img4 {
    width: 30vh;
    height: 14vh;
    margin-right: 15vh;
    @media (max-width: 1366px) {
      margin-left: -5vh;
    }
    @media (max-width: 1024px) {
      margin-left: -9vh;
    }
  }
`;

export const MentTwo = styled.div`
  font-size: 2.3rem;
  font-weight: 450;
  text-align: right;

  @media (max-width: 1024px) {
    margin-right: -1vh;
  }

  @media (max-width: 360px) {
    margin-left: -10vh;
  }

  @media (max-width: 768px) {
    margin-right: 1vh;
  }
  .sub_title2 {
    color: #0076dc;
    font-size: 3rem;
    font-weight: bold;
    margin: 2vh 0;
    @media (max-width: 1024px) {
      // Ipad 세로
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
  }
  .sub_sentence2 {
    display: grid;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
  }
`;
