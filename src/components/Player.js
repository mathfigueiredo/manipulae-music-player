import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div>
        <div className="time-control">
          <p>Start Time</p>
          <input type="range" />
          <p>End Time</p>
        </div>
        <div className="play-control"></div>
      </div>
    );
  }
}

export default Player;
