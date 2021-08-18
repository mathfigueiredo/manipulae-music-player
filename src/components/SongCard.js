import React from 'react';
import styled from 'styled-components';
import { lightGrey } from '../styles';
import Icon from './Icon';
import Deezer from './icons/Deezer';

class SongCard extends React.Component {
  render() {
    //https://e-cdns-images.dzcdn.net/images/cover/198af52fb6801a5881180232cb649f61/264x264-000000-80-0-0.jpg
    const { id, title, duration, preview, artist, album, md5_image } = this.props.song;
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return (
      <StyledSongCard>
        <div className="left-div">
          <div className="img-div">
            <img
              src={`https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
              alt="song logo"
            />
          </div>
          <div className="icon">
            <Icon icon="fav" fill={lightGrey} />
          </div>
          <div className="details">
            <div>
              {title} - {artist.name} | {album.title}
            </div>
            <div>{`${minutes}:${seconds}`}</div>
          </div>
        </div>
        <div className="right-div">
          <div className="deezer">
            <Deezer />
          </div>
        </div>
      </StyledSongCard>
    );
  }
}

const StyledSongCard = styled.div`
  border-bottom: 1px solid white;
  color: ${lightGrey};
  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-div {
    display: flex;
    align-items: center;

    .img-div {
      margin-left: 2rem;
      img {
        height: 5rem;
      }
    }

    .icon {
      margin: 0 2rem;
    }
  }

  .right-div {
    display: flex;
    align-items: center;

    .deezer {
      margin-right: 2rem;
    }
  }
`;

export default SongCard;
