import styled, { keyframes } from 'styled-components';

const Doung = keyframes`
    0% {margin-top: 0vh;}
    100% {margin-top: 1vh;}
    
`

export const ContOne = styled.div`
    display: flex;
    flex-direction:row;
    
    justify-content: center;
    width:100%;
    height: 55vh;
    @media (max-width:1366px) {
        height:auto;
    }
    @media (max-width:1024px) {
        justify-content:space-around;
        height:auto;
    }
    @media (max-width:767px) {
        height:auto;
        flex-wrap:wrap-reverse;
    }
`;

export const MentOne = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10vw;
    margin-right: 7.5vw;
    animation: ${Doung};
    @media (max-width:1366px){
        width:35vh;
    }

    @media (max-width:1024px){
        width:25vh;
        
    }

    @media (max-width:767px) {
        width:20vh;
    }
`;

export const ConOnement = styled.div`
    width:100%;
    font-weight: 500;
    padding: 5px 0px;
    font-size: 1.8rem;
    div{
        display: inline;
    }
    .sub_title2{
        font-size:2.2rem;
        padding: 5px 0px;
        font-weight: 700;
        white-space:nowrap;
    }
    @media (max-width:1366px) {
        display: block;
        font-size:1.6rem;
        text-align:left;
        div {
            white-space:nowrap;
        }
    }
    @media (max-width:1024px) {
        display: block;
        font-size:1.5rem;
        text-align:left;
        div {
            display:inline-block;
        }
    }

    @media (max-width:767px) {
        
        display: block;
        font-size:1.1rem;
        text-align:center;
        
        .sub_title2{
            font-size:1.8rem;
            margin-left:1vh;
        }
    }
`;

export const ImgOne = styled.div`
    margin-bottom: 1vh;
    cursor: pointer;
    @media (max-width:1366px) { 
        svg{
            width:18vh;
            height:8vh;
        }
    }

    @media (max-width:1024px) {
        svg{
            width:17vh;
            height:8vh;
        }
    }

    @media (max-width:767px) {
        display:block;
        align-items:center;
        padding-left:3.5vh;
        svg{
            width:16vh;
            height:12vh;
            stroke-width:3px;
        }
    }
`;

export const PlayBtn = styled.div`
    @media (max-width:767px) {
        svg{
            margin-bottom:10px;
        }
    }
`;

export const ImgTwo = styled.div`
        display:block;
        margin-left: 3vh;
        width:50vh;
        height:50vh;
        
        .ConOneImg{
            width:50vh;
            height:50vh;
            animation: ${Doung} 2s infinite alternate;
        }
        @media (max-width:1366px) {
                width:30vh;
                height:35vh;
                margin:0;
            .ConOneImg{
                width:30vh;
                height:30vh;
            }
        }

        @media (max-width:1024px) {
                width:30vh;
                height:35vh;
                margin:0;
            .ConOneImg{
                width:30vh;
                height:30vh;
            }
        }

        @media (max-width:767px) {
            width:25vh;
            height:23vh;
            margin-bottom:3vh;
            margin-left:5vh;
            
            .ConOneImg{
                width:25vh;
                height:23vh;
                padding-right:2vh;
            }
    }
`;