import styled from 'styled-components';

export const ContOne = styled.div`
    display: flex;
    flex-direction:row;
    
    justify-content: center;
    width:100%;
    height: 55vh;

    @media screen and (max-width:767px) {
        width:100%;
        flex-wrap:wrap-reverse;
    }
`;

export const MentOne = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10vw;
    margin-right: 7.5vw;
    @media screen and (max-width:767px) {
        word-break:keep-all;
        width:20vh;
    }
`;

export const ConOnement = styled.div`
    font-weight: 500;
    padding: 5px 0px;
    font-size: 1.8rem;
    .sub_title2{
        font-size:2.2rem;
        padding: 5px 0px;
        font-weight: 700;
    }
    @media (max-width:767px) {
        width:100%;
        display: block;
        font-size:1.2rem;
        
        text-align:center;
        
    }
`;

export const ImgOne = styled.div`
    margin-bottom: 1vh;
    @media screen and (max-width:767px) {
        display:block;
        align-items:center;
        padding-left:3.4vh;
        svg{
            width:13vh;
            height:10vh;
            stroke-width:3px;
        }
    }
`;

export const PlayBtn = styled.div`
    @media screen and (max-width:767px) {
        svg{
            margin-bottom:10px;
        }
    }
`;

export const ImgTwo = styled.div`
        margin-left: 3vh;
        
        @media (max-width:767px) {
            display:block;
            width:100vh;
            height:25vh;
           
            margin:0;
            svg{
                width:100vh;
                height:300px;
                padding-right:2vh;
            }
    }
`;




