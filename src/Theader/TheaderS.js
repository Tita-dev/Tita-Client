import styled from 'styled-components';

export const Theader = styled.header`
    width: 100%;
`;

export const Thead = styled.h1`
    padding:  2rem 3rem;
    font-size: 2rem;
    color:#0076DC;

    @media (max-width:1366px){
        font-size: 1.8rem;
        padding:  1.7rem 2.7rem;
    }
    @media (max-width:1024px){
        font-size:1.5rem;
        padding:  1.5rem 2.5rem;
    }
    @media (max-width:767px){
        font-size: 1rem;
        padding:  1.3rem 2.3rem;
    }
`;