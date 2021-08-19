import React from 'react';
import styled from 'styled-components';
import { lightGrey, darkGrey } from '../styles';
import Icon from './Icon';
import Deezer from './icons/Deezer';
import { connect } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  changeCurrentSong,
  nowPlaying,
  changeColor,
} from '../actions';

class SongCard extends React.Component {
  cardClickHandler = (e) => {
    if (e.target.dataset.type === 'fav') this.clickFav();
    if (e.target.dataset.type === 'deezer') this.clickDeezer();
    if (!e.target.dataset.type) this.changeCurrentSong();
  };

  clickFav = () => {
    const { song, favorites, addToFavorites, removeFromFavorites } = this.props;
    if (favorites.indexOf(song) === -1) addToFavorites(song);
    else removeFromFavorites(song);
  };

  clickDeezer = () => {};

  changeCurrentSong = () => {
    const { song, currentSong, changeCurrentSong, nowPlaying, changeColor } = this.props;
    if (currentSong !== song) changeCurrentSong(song);
    nowPlaying();
    changeColor();
  };

  render() {
    const { song, currentSong, favorites, color } = this.props;
    const { id, title, duration, preview, artist, album, md5_image, link } = song;
    let heart;
    heart = favorites.indexOf(song) === -1 ? 'empty' : 'full';
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return (
      <StyledSongCard onClick={this.cardClickHandler} color={color}>
        <div className="left-div">
          <div className="img-div">
            <img
              src={`https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
              alt="song logo"
            />
          </div>
          <div
            data-type="fav"
            className="icon"
            onClick={this.clickFav}
            style={{ cursor: 'pointer' }}>
            <Icon icon="fav" fill={color} song={this.props.song} heart={heart} />
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
            <a href={link} target="blank">
              <Deezer />
            </a>
          </div>
        </div>
      </StyledSongCard>
    );
  }
}

const StyledSongCard = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${(props) => (props.color ? props.color : 'white')};
  color: ${lightGrey};
  width: 100%;
  padding: 0.5rem;
  transition: background-color 0.2s border-bottom 1s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${darkGrey};
  }

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
    currentSong: state.currentSong,
    favorites: state.favorites,
    color: state.color,
  };
};

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
  changeCurrentSong,
  nowPlaying,
  changeColor,
})(SongCard);
