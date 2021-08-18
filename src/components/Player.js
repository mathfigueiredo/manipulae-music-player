import React from 'react';
import PlayButton from './icons/PlayButton';
import PauseButton from './icons/PauseButton';
import BackwardButton from './icons/BackwardButton';
import ForwardButton from './icons/ForwardButton';

class Player extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Player;
