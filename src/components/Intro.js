import React from "react"
import styled from "styled-components"

const Intro = ({ started, onClick }) => (
  <Wrapper className={`intro${started ? " hidden" : ""}`}>
    <h1 data-h1="Stand up">Stand up</h1>
    <h2>standup.fabrique.social.gouv.fr</h2>
    <button onClick={onClick}>Commencer</button>
  </Wrapper>
)

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  margin: 10px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &.hidden {
    display: none;
  }

  h1 {
    padding: 0;
    font-size: 10em;
    position: relative;
    margin-bottom: 2vh;
  }

  h1:after {
    content: attr(data-h1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: transparent;
    background: -webkit-repeating-linear-gradient(
      -45deg,
      #71b7e6,
      #69a6ce,
      #b98acc,
      #ee8176,
      #b98acc,
      #69a6ce,
      #9b59b6
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);
    animation: animateTextBackground 10s ease-in-out infinite;
  }

  @keyframes animateTextBackground {
    0% {
      background-position: 0 0;
    }
    25% {
      background-position: 100% 0;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0 100%;
    }
    100% {
      background-position: 0 0;
    }
  }

  h2 {
    color: #999;
    margin-bottom: 20px;
  }

  button {
    color: white;
    font-size: 2em;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: RoyalBlue;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgb(201, 211, 223) 0px 1px 4px;
  }
`

export default Intro
