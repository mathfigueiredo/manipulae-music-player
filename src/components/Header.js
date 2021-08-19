import React from 'react';
import styled from 'styled-components';
import Deezer from './icons/Deezer';
import { lightGrey } from '../styles';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { color } = this.props;
    if (this.props.object.type === 'playlist') {
      const { title, duration, nb_tracks, fans, link, picture_big, tracks } = this.props.object;
      let minutes, seconds, hours;
      if (duration > 3599) {
        hours = Math.floor(duration / 3600);
        minutes = Math.floor((duration - hours * 3600) / 60);
        seconds = duration - hours * 3600 - minutes * 60;
      } else {
        hours = null;
      }

      return (
        <StyledHeader color={color}>
          <img src={picture_big} alt="" />
          <p className="details">
            {nb_tracks} Tracks | {hours ? `${hours}h ${minutes}m` : `${minutes}m ${seconds}s`}
          </p>
          <h1>{title}</h1>
          <div className="deezer">
            <a href={link} target="blank">
              <Deezer />
            </a>
          </div>
          <div className="favorites-box">
            <button className="favorites">Favorites</button>
          </div>
        </StyledHeader>
      );
    }

    if (this.props.object.type === 'track') {
      const { title, duration, id, link, md5_image, artist } = this.props.object;
      const minutes = Math.floor(duration / 60);
      const seconds = duration - minutes * 60;

      return (
        <StyledHeader color={color}>
          <img
            src={`https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
            alt="song cover"
          />
          <p className="details">{`${minutes}m ${seconds}s`}</p>
          <h1>{title}</h1>
          <div className="deezer">
            <a href={link} target="blank">
              <Deezer />
            </a>
          </div>
          <div className="favorites-box">
            <button className="favorites">Favorites</button>
          </div>
        </StyledHeader>
      );
    }
    return (
      <StyledSongHeader>
        <h3>
          We are facing a hard time trying to fetch your data. Please, try again in a few moments.
        </h3>
      </StyledSongHeader>
    );
  }
}

const StyledSongHeader = styled.div`
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${lightGrey};
  font-family: sans-serif;
  img {
    max-height: 60vh;
    &:hover {
      outline: 1px solid ${(props) => (props.color ? props.color : 'none')};
    }
  }

  .details {
    margin: 1rem;
    font-size: 0.8rem;
  }

  .deezer {
    position: absolute;
    left: 2rem;
    bottom: 3rem;
  }

  .favorites-box {
    position: absolute;
    height: 80px;
    width: 80px;
    right: 2rem;
    bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .favorites {
      width: 80px;
      height: 30px;
      color: white;
      font-family: sans-serif;
      font-weight: bold;
      background-color: ${(props) => (props.color ? props.color : 'black')};
      border: none;
      cursor: pointer;
      transition: transform 0.2s, background-color 1s;

      &:hover {
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    color: state.color,
  };
};

export default connect(mapStateToProps)(Header);
