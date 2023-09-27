import React, { useEffect, useState } from "react";
import socketService from "./services/socketService";
import { JoinRoom } from "./components/joinRoom";
import GameContext from "./gameContext";
import { Game } from "./components/game";
import { IGameContextProps } from "./types"
import { AppContainer, WelcomeText, MainContainer } from "./globalStyle"

function App() {
  const [isInRoom, setInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);

  const connectSocket = async () => {
    await socketService.connect("http://localhost:9000")
        .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    connectSocket()
    .then((data) => console.log(data)).catch(err => console.log(err))
  }, []);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerSymbol,
    setPlayerSymbol,
    isPlayerTurn,
    setPlayerTurn,
    isGameStarted,
    setGameStarted,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <WelcomeText>Welcome to Tic-Tac-Toe</WelcomeText>
        <MainContainer>
          {!isInRoom && <JoinRoom />}
          {isInRoom && <Game />}
        </MainContainer>
      </AppContainer>
    </GameContext.Provider>
  );
}

export default App;
