import React from 'react';
import styled from 'styled-components';

class TrackList extends React.Component {
  render() {
    return <StyledDiv>TrackList</StyledDiv>;
  }
}

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background-color: black;
`;

export default TrackList;
