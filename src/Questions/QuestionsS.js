import styled from 'styled-components';


export const Qtitle = styled.h1`
    padding: 2rem 0 0 12rem;
    font-size: 4rem;

    @media (max-width:1366px){
        font-size: 3rem;
        padding: 2rem 0 0 7rem;
    }
    @media (max-width:1024px){
        font-size:2rem;
        padding: 2rem 0 0 5rem;
    }
    @media (max-width:767px){
        font-size: 1.5rem;
        padding: 2rem 0 0 3rem;
    }
`;

export const Qcontent = styled.div`
    height: 500px;
    display:flex;
    justify-content: center;
    align-items:center;
    margin 0 auto;
    padding-bottom:100px;
    font-size:1.3rem;

    @media (max-width:1366px){
        font-size: 1.0rem;
    }
    @media (max-width:1024px){
        font-size:0.7rem;
    }
    @media (max-width:767px){
        font-size: 0.4rem;
    }

    a{
        cursor: pointer;
        text-decoration:none;
        color:#0076DC;
    }
`;