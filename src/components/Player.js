import React, { createRef } from 'react';
import Icon from './Icon';
import { showTrackList, nowPlaying, nowPaused, changeCurrentSong } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Player extends React.Component {
  constructor() {
    super();

    this.audioRef = createRef();
  }

  onBackwardClick = () => {
    const {
      trackList: { data },
      currentSong,
      changeCurrentSong,
    } = this.props;
    const previousSongIndex = data.indexOf(currentSong) - 1;
    if (previousSongIndex >= 0) changeCurrentSong(data[previousSongIndex]);
  };

  onForwardClick = () => {
    const {
      trackList: { data },
      currentSong,
      changeCurrentSong,
    } = this.props;
    const nextSongIndex = data.indexOf(currentSong) + 1;
    if (nextSongIndex < data.length) changeCurrentSong(data[nextSongIndex]);
  };

  onPlayPauseClick = (e) => {
    if (e.target.dataset.playpause === 'play') this.onPlayClick();
    if (e.target.dataset.playpause === 'pause') this.onPauseClick();
  };

  onPlayClick = () => {
    const { nowPlaying, playPause, currentSong } = this.props;
    if (playPause === 'paused' && currentSong) nowPlaying();
  };

  onPauseClick = () => {
    const { nowPaused, playPause } = this.props;
    if (playPause === 'playing') nowPaused();
  };

  toggleTrackList = (boolean) => {
    const { showTrackList } = this.props;
    showTrackList(boolean);
  };

  componentDidUpdate() {
    const { playPause, currentSong } = this.props;
    if (playPause === 'playing' && currentSong) this.audioRef.current.play();
    if (playPause === 'paused' || !currentSong) this.audioRef.current.pause();
  }

  render() {
    const { currentSong, playPause } = this.props;
    const preview = currentSong ? currentSong.preview : null;
    const currentPlayPause = playPause === 'playing' ? 'pause' : 'play';
    return (
      <StyledPlayer>
        <div className="time-control">
          <p>Start Time</p>
          <input type="range" />
          <p>End Time</p>
        </div>
        <div className="play-control">
          <div onClick={this.onBackwardClick}>
            <Icon icon="backward" />
          </div>
          <div onClick={this.onPlayPauseClick}>
            <Icon icon="playpause" current={currentPlayPause} />
          </div>
          <div onClick={this.onForwardClick}>
            <Icon icon="forward" />
          </div>
        </div>
        <div className="tracklist-and-like">
          <div onClick={() => this.toggleTrackList(!this.props.trackListIsOnScreen)}>
            <Icon icon="tracklist" />
          </div>
          <Icon icon="fav" />
        </div>
        <audio ref={this.audioRef} src={preview}></audio>
      </StyledPlayer>
    );
  }
}

const StyledPlayer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 3.5rem;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  background-color: green;
  z-index: 2;

  .time-control {
    flex-grow: 3;
    order: 1;
    width: 50%;
    display: flex;
    text-align: center;
    input {
      width: 100%;
      cursor: pointer;
    }
    p {
      padding: 0.3rem;
    }
  }

  .play-control {
    flex-grow: 1;
    width: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }

  .tracklist-and-like {
    width: 25%;
    justify-content: space-evenly;
    flex-grow: 1;
    order: 2;
    display: flex;
  }
`;

const mapStateToProps = (state) => {
  return {
    currentSong: state.currentSong,
    playPause: state.playPause,
    trackList: state.trackList,
    trackListIsOnScreen: state.showTrackList.show,
  };
};

export default connect(mapStateToProps, {
  showTrackList,
  nowPlaying,
  nowPaused,
  changeCurrentSong,
})(Player);
