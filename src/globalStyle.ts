import styled from "styled-components"

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

export const WelcomeText = styled.h1`
  margin: 0;
  color: #3B71CA;
  text-align: center;
  
  @media(max-width: 650px){
    font-size: 20px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;