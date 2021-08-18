import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    if (this.props.object.type === 'playlist') {
      const { title, duration, nb_tracks, fans, link, picture_big, tracks } = this.props.object;
      let minutes, seconds, hours;
      if (duration > 3599) {
        hours = Math.floor(duration / 3600);
        minutes = Math.floor((duration - hours * 3600) / 60);
        seconds = duration - hours * 3600 - minutes * 60;
      } else {
        hours = null;
        minutes = Math.floor(duration / 60);
        seconds = duration - minutes * 60;
      }

      return (
        <StyledPlaylistHeader>
          <img src={picture_big} alt="" />
          <p className="details">
            {nb_tracks} Tracks | {hours ? `${hours}h ${minutes}m` : `${minutes}m ${seconds}s`}
          </p>
          <h1>{title}</h1>
        </StyledPlaylistHeader>
      );
    }
    return (
      <StyledSongHeader>
        <h1>Picture</h1>
        <h1>Name</h1>
        <h1>Artist</h1>
      </StyledSongHeader>
    );
  }
}

const StyledSongHeader = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPlaylistHeader = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-family: sans-serif;
  img {
    max-height: 60vh;
  }

  .details {
    margin-left: 22rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export default Header;
