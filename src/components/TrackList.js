import React from 'react';
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
            TrackList
          </StyledDiv>
        ) : null}
      </AnimatePresence>
    );
  }
}

const StyledDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background-color: black;
`;

const mapStateToProps = (state) => {
  return {
    showTrackList: state.showTrackList.show,
  };
};

export default connect(mapStateToProps)(TrackList);
