import styled from 'styled-components';

// 3_1 Section
export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    
    width: 100%;
    height: 50rem;
    margin-top: 10vh;
`;

export const ConOneWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const MentOne = styled.div`
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

    .Img3 {
        margin: 0 5vw 0 9vw;
    }
`;

// 3_2 Section
export const ConTwoWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-left: 20vh;
`;

export const MentTwo = styled.div`
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
    .sub_sentence2 {
    }
`;