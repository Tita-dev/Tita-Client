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
        
    }
`;

export const FtTitle = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    color: #0076DC;
    padding: 2vh 0;
    margin-left: 26vh;

    @media (max-width:767px){
        margin-left: 3vh;
        font-size: 1.5rem;
        display: inline-block;
    }
`;

export const FtSubtitle = styled.div`
    font-size: 1rem;
    font-weight: 300;
    padding-top: 1vh;
    margin-left: 26vh;
    @media (max-width:767px){
        margin-left: 3vh;
    }
`;

export const FtBottom = styled.div`
    display: flex;
    margin-top: 3vh;
    @media (max-width:767px){
        margin:0;
    }
`;

export const One = styled.div`
    display:flex;
    font-weight: 200;
    color: #9E9E9E;
    margin-left: 26vh;
    align-items:center;
    @media (max-width:767px){
        margin-left: 3vh;
        white-space:nowrap;
    }
`;

export const Two = styled.div`
    display: flex;
    font-weight: 300;
    color: #9E9E9E;
    margin-left:40vw;
    align-items:center;
    text-decoration:none;
    .Two_{
        margin-right: 2vw;
    }
    a {
        text-decoration:none;
        color:#9E9E9E;
    }
    @media (max-width:767px){
        flex-direction:column;
    }
`;

export const Img5 = styled.div`
    svg{
        width:3vh;
        height:3vh;
    }
`;