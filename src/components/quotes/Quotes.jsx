import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";
import { Button } from "../../components";

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{ quote }</Quote>
      <Speaker> - { speaker }</Speaker>
      <Button onClick={onUpdate}>Quote no Jutsu</Button>
    </Wrapper>
  )
}

Quotes.proptype = {
  quote: string,
  speaker: string,
  onUpdate: func
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`;

// const Button = styled.button`
//   background-color: #orange;
// `;
