import React from 'react';
import TrackListHeader from './TrackListHeader';
import TrackListBody from './TrackListBody';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

class TrackList extends React.Component {
  render() {
    const { showTrackList } = this.props;
    return (
      <AnimatePresence>
        {showTrackList ? (
          <StyledDiv
            key="tracklist"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', duration: 1 }}>
            <TrackListHeader />
            <StyledBottomLine></StyledBottomLine>
            <TrackListBody />
          </StyledDiv>
        ) : null}
      </AnimatePresence>
    );
  }
}

const StyledDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  height: calc(100vh - 3.5rem);
  width: 100%;
  z-index: 1;
  background-color: black;

  display: flex;
  flex-direction: column;
`;

const StyledBottomLine = styled.div`
  margin: 0 auto;
  min-height: 1px;
  width: 95%;
  background-color: gold;
`;

const mapStateToProps = (state) => {
  return {
    showTrackList: state.showTrackList.show,
  };
};

export default connect(mapStateToProps)(TrackList);
