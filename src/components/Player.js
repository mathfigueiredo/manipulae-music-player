import React from 'react';
import PlayButton from './icons/PlayButton';
import PauseButton from './icons/PauseButton';
import BackwardButton from './icons/BackwardButton';
import ForwardButton from './icons/ForwardButton';
import TrackListButton from './icons/TrackListButton';
import FavButton from './icons/FavButton';
import { showTrackList } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Player extends React.Component {
  toggleTrackList = (boolean) => {
    const { showTrackList } = this.props;
    showTrackList(boolean);
  };
  render() {
    return (
      <StyledPlayer>
        <div className="time-control">
          <p>Start Time</p>
          <input type="range" />
          <p>End Time</p>
        </div>
        <div className="play-control">
          <BackwardButton />
          <PlayButton />
          {/* <PauseButton /> */}
          <ForwardButton />
        </div>
        <div className="tracklist-and-like">
          <div onClick={() => this.toggleTrackList(!this.props.trackListIsOnScreen)}>
            <TrackListButton />
          </div>
          <FavButton />
        </div>
      </StyledPlayer>
    );
  }
}

const StyledPlayer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  min-height: 10vh;
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
    trackListIsOnScreen: state.showTrackList.show,
  };
};

export default connect(mapStateToProps, { showTrackList })(Player);
