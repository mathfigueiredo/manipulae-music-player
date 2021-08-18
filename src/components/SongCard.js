import React from 'react';
import FavButton from './FavButton';

class SongCard extends React.Component {
  render() {
    //https://e-cdns-images.dzcdn.net/images/cover/198af52fb6801a5881180232cb649f61/264x264-000000-80-0-0.jpg
    const { id, title, duration, preview, artist, album, image } = this.props;
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return (
      <div>
        <div>
          <img
            src={`https://e-cdns-images.dzcdn.net/images/cover/${image}/264x264-000000-80-0-0.jpg`}
            alt="song logo"
          />
        </div>
        <div>{title}</div>
        <div>{`${minutes}:${seconds}`}</div>
        <div>{artist.name}</div>
        <FavButton />
      </div>
    );
  }
}

export default SongCard;
