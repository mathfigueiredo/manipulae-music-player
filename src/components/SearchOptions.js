import React from 'react';
import { connect } from 'react-redux';
import { changeSearchOption, changeAnimationDivLeft } from '../actions';
import styled from 'styled-components';

class SearchOptions extends React.Component {
  onSearchOptionChange = (searchOption) => {
    const { changeSearchOption, stateSearchOption, changeAnimationDivLeft, color } = this.props;
    if (searchOption !== stateSearchOption) changeSearchOption(searchOption);
    if (searchOption === 'tracks') changeAnimationDivLeft('4rem');
    if (searchOption === 'artists') changeAnimationDivLeft('calc((100vw / 3) + 4rem)');
    if (searchOption === 'albums') changeAnimationDivLeft('calc((100vw / 3)*2 + 4rem)');
    if (searchOption === 'playlists') changeAnimationDivLeft('calc((100vw / 3)*3 + 4rem)');
  };

  render() {
    const { color, animationDivLeft } = this.props;
    return (
      <StyledSearchOptions color={color} animationDivLeft={animationDivLeft}>
        <div
          data-pos={0}
          className="search-option tracks"
          onClick={() => this.onSearchOptionChange('tracks')}>
          <span className="option">Tracks</span>
        </div>
        <div
          data-pos={1}
          className="search-option artists"
          onClick={() => this.onSearchOptionChange('artists')}>
          <span className="option">Artists</span>
        </div>
        <div
          data-pos={2}
          className="search-option albums"
          onClick={() => this.onSearchOptionChange('albums')}>
          <span className="option">Albums</span>
        </div>
        <div className="animation"></div>
      </StyledSearchOptions>
    );
  }
}

const StyledSearchOptions = styled.div`
  margin-top: 5.5rem;
  flex-basis: 10%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .search-option {
    cursor: pointer;
    /* flex-basis: 15%; */
    text-align: center;
    align-self: stretch;

    display: flex;

    .option {
      display: block;
      margin: auto;
      color: white;
    }
  }

  .animation {
    position: absolute;
    background-color: ${(props) => (props.color ? props.color : 'white')};
    width: calc((100vw / 3) - 8rem);
    height: 3px;
    bottom: 5px;
    left: ${(props) => (props.animationDivLeft ? props.animationDivLeft : '100%')};
    transition: left 0.5s, background-color 1s;
  }

  .tracks {
    &:visited ~ .animation {
      left: 0;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    stateSearchOption: state.searchOption,
    color: state.color,
    animationDivLeft: state.animationDivLeft,
  };
};

export default connect(mapStateToProps, { changeSearchOption, changeAnimationDivLeft })(
  SearchOptions
);
