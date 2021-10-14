import styled from 'styled-components';

export const ContOne = styled.div`
    display: flex;
    flex-direction:row;
    
    justify-content: center;
    width:100%;
    height: 55vh;
    @media (max-width:1199px) {
    /* 타블렛 가로 */

    }
    @media (max-width:899px) {
    /* 타블렛 세로 */
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
    @media (max-width:899px){

    }

    @media (max-width:767px) {
        word-break:keep-all;
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
    }
    @media (max-width:1199px) {
        display: block;
        font-size:1.8rem;
        text-align:left;
        div {
            display: inline-block;
            white-space:nowrap;
        }
    }
    @media (max-width:899px) {
        display: block;
        font-size:1.8rem;
        text-align:left;
        div {
            
            display:inline-block;
            white-space:nowrap;
        }
    }

    @media (max-width:767px) {
        
        display: block;
        font-size:1.2rem;
        text-align:center;
        div {
            display:inline-block;
            white-space:nowrap;
        }
    }
`;

export const ImgOne = styled.div`
    margin-bottom: 1vh;
    @media (max-width:767px) {
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
    @media (max-width:767px) {
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
                height:25vh;
                padding-right:2vh;
            }
    }
`;




