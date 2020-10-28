import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100% );
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .8 ease;

    :hover {
      cursor: pointer;
      background-size: 400px;
    }
`;

function App() {

  // frase state
  const [ frase, setFrase ] = useState({});


  const callAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    setFrase(frase[0]);
  }

  // show a frase when the app starts
useEffect( () => {
  callAPI();
}, []);

  return (
    <Container>
      <Frase 
        frase={frase}
      />
        <Button
        onClick={callAPI}
        >
            Get Frase
        </Button>
    </Container>
  );
}

export default App;
