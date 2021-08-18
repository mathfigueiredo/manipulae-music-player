import React from 'react';
import styled from 'styled-components';
import { lightGrey } from '../styles';
import Icon from './Icon';
import Deezer from './icons/Deezer';
import { connect } from 'react-redux';
import { addToFavorites } from '../actions';

class SongCard extends React.Component {
  addFav = () => {
    const { song, favorites, addToFavorites } = this.props;
    if (favorites.indexOf(song) === -1) addToFavorites(song);
  };

  render() {
    const { song } = this.props;
    const { id, title, duration, preview, artist, album, md5_image } = song;
    const { favorites } = this.props;
    let heart;
    heart = favorites.indexOf(song) === -1 ? 'empty' : 'full';
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
          <div className="icon" onClick={this.addFav}>
            <Icon icon="fav" fill={lightGrey} song={this.props.song} heart={heart} />
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

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, { addToFavorites })(SongCard);
