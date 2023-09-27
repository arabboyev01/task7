import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Zen Tokyo Zoo", cursive;
  position: relative;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Cell = styled.div`
  width: 13em;
  height: 9em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #3B71CA;
  transition: all 270ms ease-in-out;

  @media (max-width: 650px) {
    width: 7em;
    height: 4em;
  }

  &:hover {
    background-color: #6590d7;
  }
`;

export const PlayStopper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  cursor: default;
`;

export const X = styled.span`
  font-size: 100px;
  color: #332D2D;

  &::after {
    content: "X";
  }

  @media (max-width: 650px) {
    font-size: 50px;
  }
`;

export const O = styled.span`
  font-size: 100px;
  color: #332D2D;

  &::after {
    content: "O";
  }

  @media (max-width: 650px) {
    font-size: 50px;
  }
`;