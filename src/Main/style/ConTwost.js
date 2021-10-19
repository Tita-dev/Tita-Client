import styled from 'styled-components';

export const Cont2 = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    height: 45vh;
    background-color: #f2f2f2;
`;

export const Ment2 = styled.div`
    display: inline-flex;
    flex-direction:column;
    justify-content: center;
`;

export const Con2Ment1 = styled.p`
    @media (max-width: 1024px) {
        display: grid;
    }

    @media (max-width: 767px) {
        display: grid;
    }
    div {
        display: inline;
    }
    color: #0076dc;
    font-weight:700;
    font-size: 3rem;
    white-space:nowrap;
    text-align:center;
    margin:4vh 0 4vh 0;
`;

export const Con2Ment2 = styled.p`
    @media (max-width: 1024px) {
        display: grid;
        .underText {
            margin-top: -3.7vh;
        }
    }
    div {
        display: inline;
    }
    font-size: 2rem;
    text-align:center;
    margin:2vh 0 4vh 0;
    .bold_text {
        font-weight: 600;
        display:inline;
    }
`;