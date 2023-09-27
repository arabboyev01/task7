import React from 'react'
import { GameContainer, RowContainer, Cell, PlayStopper, X, O } from './style.game'

const DumbGame : React.FC<any>= ({ isGameStarted, isPlayerTurn, playerSymbol, updateGameMatrix, matrix }) => (
    <GameContainer>
      {!isGameStarted && (
        <h2>Waiting for Other Player to Join to Start the Game!</h2>
      )}
      {(!isGameStarted || !isPlayerTurn) && <PlayStopper />}
      {matrix.map((row: any, rowIdx: any) => {
        return (
          <RowContainer>
            {row.map((column: any, columnIdx: any) => (
              <Cell onClick={() => updateGameMatrix(columnIdx, rowIdx, playerSymbol)}>
                {column && column !== "null" ? (
                  column === "x" ? (
                    <X />
                  ) : (
                    <O />
                  )
                ) : null}
              </Cell>
            ))}
          </RowContainer>
        );
      })}
    </GameContainer>
)

export default DumbGame