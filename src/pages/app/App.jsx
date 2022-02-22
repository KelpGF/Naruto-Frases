import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import jutsoSound from '../../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);

  const [ quoteState, setQuoteState ] = useState({ quote: 'Loading...', speaker: '' });

  const onUpdate = async () => {
    const quoteData = await getQuote();
    
    if (isMounted) {
      audio.play();
      setQuoteState(quoteData)
    }
  }

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }
  }, [])

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="Naturo with a kunai" />
    </Content>
  )
};

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`