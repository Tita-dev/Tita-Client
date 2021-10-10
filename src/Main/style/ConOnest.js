import styled from 'styled-components';

export const ContOne = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    height: 55vh;

    @media screen and (max-width:767px) {
        width:100%;
    }
`;

export const MentOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10vw;
    margin-right: 7.5vw;
    @media screen and (max-width:767px) {
        
    }
`;

export const ConOnement = styled.p`
    font-weight: 500;
    padding: 5px 0px;
    font-size: 1.8rem;
    .sub_title{
        font-size:2.2rem;
        padding: 5px 0px;
        font-weight: 700;
    }
    @media (max-width:767px) {
        width:100%;
        display: block;
        font-size:1.2rem;
    }
`;

export const ImgOne = styled.div`
    margin-bottom: 1vh;
    @media screen and (max-width:767px) {
        
    }
`;

export const PlayBtn = styled.div`
    @media screen and (max-width:767px) {
        width:50%;
        height:50%;
    }
`;

export const ImgTwo = styled.div`
        margin-left: 3vh;
        
        @media (max-width:767px) {
            display:block;
            width:30%;
            margin:0 auto;
    }
`;




