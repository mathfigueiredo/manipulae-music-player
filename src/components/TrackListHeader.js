import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { lightGrey } from '../styles';

class TrackListHeader extends React.Component {
  render() {
    if (this.props.selected.type === 'playlist') {
      const { title, duration, nb_tracks, fans, link, picture_medium, tracks } =
        this.props.selected;
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

      const { color } = this.props;

      return (
        <React.Fragment>
          <StyledDiv color={color}>
            <img src={picture_medium} alt="" />
            <div className="details">
              <h1>{title}</h1>
              <p>{nb_tracks} Tracks</p>
              <p>{hours ? `${hours}h ${minutes}m` : `${minutes}m ${seconds}s`}</p>
            </div>
          </StyledDiv>
        </React.Fragment>
      );
    }
    return (
      <StyledDiv>
        <div>
          <img src="" alt="showcase" />
        </div>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  flex-basis: 30%;
  padding: 2rem;
  display: flex;
  img {
    &:hover {
      outline: 1px solid ${(props) => (props.color ? props.color : 'none')};
    }
  }

  .details {
    font-size: 1.5rem;
    font-family: sans-serif;
    color: ${lightGrey};
    align-self: flex-end;
    margin-left: 1rem;

    h1 {
      margin-top: 0.3rem;
    }

    p {
      font-size: 1rem;
      margin-top: 0.1rem;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    color: state.color,
  };
};

export default connect(mapStateToProps)(TrackListHeader);
