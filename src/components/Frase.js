import React from 'react';
import styled from '@emotion/styled';

const FraseContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    @media (min-width: 768px) {
        margin-top: 19rem;
    }
    
    @media (max-width: 768px) {
        width: 90%;
        margin-top: 19rem;
        padding: 1rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({frase}) => {
    return(
        <FraseContainer>
            <h1> {frase.quote} </h1>
            <p> - {frase.author} </p>
        </FraseContainer>
        
    );
}

export default Frase;
