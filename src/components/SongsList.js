import React from 'react';
import SongCard from './SongCard';
import { connect } from 'react-redux';

class SongsList extends React.Component {
  renderList = () => {
    const { songs } = this.props;
    return songs.map((song) => {
      return (
        <SongCard
          key={song.id}
          id={song.id}
          title={song.title}
          duration={song.duration}
          preview={song.preview}
          artist={song.artist}
          album={song.album}
          image={song.md5_image}
        />
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default connect()(SongsList);
