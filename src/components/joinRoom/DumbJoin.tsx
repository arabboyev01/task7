import React from 'react'
import { JoinRoomContainer, RoomIdInput, JoinButton } from './style.join'

const DumbJoin: React.FC<any> = ({joinRoom, roomName, handleRoomNameChange, isJoining }) => (
    <form onSubmit={joinRoom}>
      <JoinRoomContainer>
        <h4>Enter Room ID to Join the Game</h4>
        <RoomIdInput
          placeholder="Room ID"
          value={roomName}
          onChange={handleRoomNameChange}
          type="number"
        />
        <JoinButton type="submit" disabled={isJoining}>
          {isJoining ? "Joining..." : "Joing"}
        </JoinButton>
      </JoinRoomContainer>
    </form>
)

export default DumbJoin;