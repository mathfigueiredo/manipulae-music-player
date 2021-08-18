import React from 'react';
import styled from 'styled-components';
import SongsList from './SongsList';
import { connect } from 'react-redux';

class TrackListBody extends React.Component {
  render() {
    const songs = this.props.trackList.data;
    return (
      <StyledTrackListBody>
        <SongsList songs={songs} />
      </StyledTrackListBody>
    );
  }
}

const StyledTrackListBody = styled.div`
  margin-top: 1rem;
  flex-basis: 70%;
`;

const mapStateToProps = (state) => {
  return {
    trackList: state.trackList,
  };
};

export default connect(mapStateToProps)(TrackListBody);
