import styled from 'styled-components';

// 3_1 Section
export const Cont3 = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    
    width: 100%;
    height: 50vh;
    margin: 5vh 0;
    margin-top: 18vh;
`;

export const Ment3One = styled.div`
    display: flex;
    justify-content:center;
    margin: 3vh 0;
`;

export const Con3ment1 = styled.div`
    font-size: 2.3rem;
    font-weight: 450;
    margin: 0 7vw;
    .sub_title1 {
        color: #DCC600;
        font-size: 3rem;
        font-weight: 700;
        margin-top: 3vh;
    }
    .sub_sentence {
        margin: 4vh 0;
    }
`;

export const Img3 = styled.div`
    @media (max-width: 1366px) {
        margin-left: 7vh;
    }
    margin: 0 5vw 0 9vw;
`;

// 3_2 Section
export const Ment3Two = styled.div`
    margin-right: 2vh;
    display: flex;
    justify-content:center;
`;

export const Img4 = styled.div`
    @media (max-width: 1366px) {
        margin-right: 9vh;
    }
        margin: 0 7vw;
        padding-left:1.8vw;
        padding-top: 3vh;
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
    }
`;