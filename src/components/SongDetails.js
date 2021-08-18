import React from 'react';
import SongHeader from './SongHeader';
import Player from './Player';

class SongDetails extends React.Component {
  render() {
    return (
      <div>
        <SongHeader />
        <Player />
      </div>
    );
  }
}

export default SongDetails;
