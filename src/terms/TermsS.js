import styled from 'styled-components';

export const Title = styled.h1`
    padding: 3rem 5rem;
    font-size: 4rem;

    @media (max-width:1366px){
        font-size: 3rem;
        padding:  2.5rem 4rem;
    }
    @media (max-width:1024px){
        font-size:2rem;
        padding:  2rem 3rem;
    }
    @media (max-width:767px){
        font-size: 1.5rem;
        padding:  1.5rem 2rem;
    }
`;

export const Tcontents = styled.div`
    div:nth-child(even){
        background-color: #f2f2f2;
    }
`;

export const Tcontent = styled.div`
    padding: 3rem 1rem 3rem 5rem ;

    .ContentColor{
        background-color: #f2f2f2;
    }
    
    @media (max-width:1366px){
        padding: 2.3rem 0.7rem 2.3rem 4rem;
    }
    @media (max-width:1024px){
        padding: 1.5rem 1.5rem 2rem 3rem;
    }
    @media (max-width:767px){
        padding: 1rem 1rem 1rem 2rem;
    }
`;

export const Clauses = styled.span`
    font-weight: bold;
    font-size: 3rem;
    color:#0076DC;

    @media (max-width:1366px){
        font-size: 2.5rem;
    }
    @media (max-width:1024px){
        font-size:2rem;
    }
    @media (max-width:767px){
        font-size: 1.2rem;
    }



`;
export const ClausesDesc = styled.span`

    p{
        padding-left: 70px;
        line-height: 45px;
        font-size: 1.5rem;

        @media (max-width:1366px){
            font-size: 1.3rem;
            padding-left: 50px;
            line-height: 35px;
        }
        @media (max-width:1024px){
            font-size:1rem;
            padding-left: 30px;
            line-height: 30px;
        }
        @media (max-width:767px){
            font-size: 0.7rem;
            padding-left: 20px;
            line-height: 23px;
        }

    }
    p:first-child{
        padding-top: 1.5rem;

        @media (max-width:1366px){
            padding-top: 1.2rem;

        }
        @media (max-width:1024px){
            padding-top: 1rem;

        }
        @media (max-width:767px){
            padding-top: 0.6rem;

        }
    }
    p:last-child{
        padding-bottom: 1.5rem;

        @media (max-width:1366px){
            font-size: 1.3rem;
            padding-bottom: 1.2rem;
        }
        @media (max-width:1024px){
            font-size:1rem;
            padding-bottom: 0.7rem;
        }
        @media (max-width:767px){
            font-size: 0.7rem;
            padding-bottom: 0.3rem;
        }
    }

`;