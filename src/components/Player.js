import React from 'react';
import PlayButton from './icons/PlayButton';
import PauseButton from './icons/PauseButton';
import BackwardButton from './icons/BackwardButton';
import ForwardButton from './icons/ForwardButton';
import styled from 'styled-components';

class Player extends React.Component {
  render() {
    return (
      <StyledPlayer>
        <div className="time-control">
          <p>Start Time</p>
          <input type="range" />
          <p>End Time</p>
        </div>
        <div className="play-control">
          <BackwardButton />
          <PlayButton />
          <PauseButton />
          <ForwardButton />
        </div>
      </StyledPlayer>
    );
  }
}

const StyledPlayer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .time-control {
    width: 50%;
    display: flex;
    input {
      width: 100%;
      padding: 1rem 2rem;
      cursor: pointer;
    }
    p {
      padding: 1rem;
    }
  }

  .play-control {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    svg {
      cursor: pointer;
    }
  }
`;

export default Player;
