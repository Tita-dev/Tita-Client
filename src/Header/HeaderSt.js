import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    width: 100%;
    height: 20%;
    
`;

export const Head = styled.h1`
    margin-left: 18vw;
    margin-top: 1vh;
    font-size: 2rem;
   
    @media (min-width:768px) and (max-width:991px){
        font-size: 1.8rem;
        margin-left: 14vw;
    }
    @media (max-width:767px){
        font-size: 1.5rem;
        margin-left: 10vw;
    }
`;