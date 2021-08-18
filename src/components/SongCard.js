import React from 'react';
import styled from 'styled-components';
import { lightGrey } from '../styles';
import Icon from './Icon';

class SongCard extends React.Component {
  render() {
    //https://e-cdns-images.dzcdn.net/images/cover/198af52fb6801a5881180232cb649f61/264x264-000000-80-0-0.jpg
    const { id, title, duration, preview, artist, album, image } = this.props;
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return (
      <StyledSongCard>
        <div className="img-div">
          <img
            src={`https://e-cdns-images.dzcdn.net/images/cover/${image}/264x264-000000-80-0-0.jpg`}
            alt="song logo"
          />
        </div>
        <Icon icon="play" fill="white" />
        <div className="details">
          <div>
            {title} - {artist.name}
          </div>
          <div>{`${minutes}:${seconds}`}</div>
        </div>
      </StyledSongCard>
    );
  }
}

const StyledSongCard = styled.div`
  border-bottom: 1px solid white;
  color: ${lightGrey};
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  .img-div {
    img {
      height: 5rem;
    }
  }
`;

export default SongCard;
