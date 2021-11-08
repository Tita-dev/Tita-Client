import styled from 'styled-components';

export const Ft = styled.div`
    width: 100%;
    height:20%;
    min-height:200px;
    background-color: #f2f2f2;
    display: inline-flex;
    flex-direction:column;
    @media (max-width:1366px){
        
    }
    @media (max-width:1024px){
        
    }
    @media (max-width:767px){
        display:inline-block;
    }
`;

export const FtTitle = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    color: #0076DC;
    padding: 2vh 0;
    margin-left: 13vw;
    @media (max-width:1366px){
        margin-left: 16vw;
    }
    @media (max-width:1024px){
        margin-left:8vw;
    }

    @media (max-width:767px){
        margin-left: 7vw;
        font-size: 1.7rem;
        padding: 2vh 0 1vh 0;
    }
`;

export const FtSubtitle = styled.div`
    font-size: 1rem;
    font-weight: 300;
    padding-top: 1vh;
    margin-left: 13vw;
    @media (max-width:1366px){
        margin-left: 16vw;
    }
    @media (max-width:1024px){
        margin-left:8vw;
    }
    @media (max-width:767px){
        padding-bottom: 1vh;
        margin-left: 7vw;
        font-size:1.2rem;
    }
`;

export const FtBottom = styled.div`
    display: flex;
    margin-top: 3vh;
    
    @media (max-width:1366px){
        margin-right:15vw;
    }
    @media (max-width:1024px){
        margin-right:8vw;
    }
    
    @media (max-width:767px){
        margin:0;
        display: inline-block;
    }
`;

export const Reverse = styled.div`
        display:flex;
        flex-direction:row;
        height:5vh;
    @media (max-width:767px){
        margin-left:7vw;
        flex-direction:row-reverse;
        }
        
`;

export const One = styled.div`
    display:flex;
    font-weight: 200;
    color: #9E9E9E;
    margin-left: 13vw;
    align-items:center;
    @media (max-width:1366px){
        margin-left: 16vw;
        white-space:nowrap;
    }
    @media (max-width:1024px){
        margin-left:8vw;
        white-space:nowrap;
    }
    @media (max-width:767px){
        margin-left: 7vw;
        white-space:nowrap;
        margin-bottom:2vh;
        
    }
`;

export const Two = styled.div`
    display: flex;
    font-weight: 300;
    color: #9E9E9E;
    margin-left:47.5vw;
    align-items:center;
    text-decoration:none;
    .Two_{
        margin-right: 2vw;
    }
    a {
        text-decoration:none;
        color:#9E9E9E;
    }
    @media (max-width:1366px){
        margin-left:33vw;
        white-space:nowrap;
    }
    @media (max-width:1024px){
        margin-left:31vw;
        white-space:nowrap;
    }
    
    @media (max-width:767px){
        font-size:1rem;
        font-weight:350;
        align-items:stretch;
        flex-direction:column;
        display: inline-block;
        margin-left:57vw;
        position: relative;
        bottom:10vh;
        p{
            padding-bottom:1vh;
        }
    }
`;

export const Img5 = styled.div`
    display: inline-block;
    width:3vh;
    height:3vh;
    position: relative;
    svg{
        width:3vh;
        height:3vh;
    }
`;