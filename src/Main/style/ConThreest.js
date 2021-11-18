import styled from 'styled-components';

// 3_1 Section
export const Cont3 = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    
    width: 100%;
    height: 50rem;
    margin: 5vh 0;
    margin-top: 18vh;
`;

export const Ment3One = styled.div`
    @media (max-width: 1366px) {
        margin-left: 5vh;
        font-size: 2rem;
    }

    @media (max-width: 767px) {
        margin-top: -20vh;
    }

    display: flex;
    justify-content:center;
    margin: 3vh 0;
`;

export const Con3ment1 = styled.div`
    font-size: 2.3rem;
    font-weight: 450;
    margin: 0 7vw;
    @media (max-width: 767px) {
        margin-left: -20vh;
        margin-right: -5vh;
    }
    .sub_title1 {
        color: #DCC600;
        font-size: 3rem;
        font-weight: 700;
        margin-top: 3vh;
        @media (max-width: 1366px) {
            font-size: 2.2rem;
        }
        @media (max-width: 767px) {
            font-size: 1.5rem;
        }   
    }
    .sub_sentence {
        margin: 4vh 0;
        @media (max-width: 1366px) {
            font-size: 2.2rem;
        }
        @media (max-width: 767px) {
            font-size: 1.5rem;
        }   
    }
`;

export const Img3 = styled.div`
    @media (max-width: 1366px) {
        margin-left: 7vh;
    }
    @media (max-width: 767px) {
        width: 18vh;
        height: 18vh;
    }
    margin: 0 5vw 0 9vw;
`;

// 3_2 Section
export const Ment3Two = styled.div`
    margin-right: 2vh;
    display: flex;
    justify-content:center;
    
    @media (max-width: 767px) {
        margin-top: 10vh;
    }
`;

export const Img4 = styled.div`
    @media (max-width: 1366px) {
        margin-right: 9vh;
    }
    @media (max-width: 767px) {
        width: 20vh;
        height: 20vh;
        margin-left: -10vh;
        margin-top: -10vh;
    }
        margin: 0 7vw 3vh;
        padding-left:1.8vw;
        margin-top: -5vh;
`;

export const Con3ment2 = styled.div`
    font-size: 2.3rem;
    font-weight: 450;
    margin: 0 7vw;
    text-align: right;
    padding-right: 3vw;
    .sub_title2 {
        color: #0076DC;
        font-size: 3rem;
        font-weight: 700;
        margin: 2vh 0;
        @media (max-width: 1366px) {
            font-size: 2.2rem;
        }
        @media (max-width: 767px) {
            font-size: 1.5rem;
            margin-right: -15vh;
        }   
    }
    .sub_sentence2 {
        @media (max-width: 1366px) {
            font-size: 2.2rem;
        }
        @media (max-width: 767px) {
            font-size: 1.5rem;
            margin-right: -15vh;
        }   
    }
`;