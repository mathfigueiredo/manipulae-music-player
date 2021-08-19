import React from 'react';
import SongsList from './SongsList';
import { connect } from 'react-redux';
import styled from 'styled-components';

class SearchBody extends React.Component {
  renderResults = () => {
    const { searchForm, songs, stateSearchOption } = this.props;
    if (!searchForm.values && !searchForm.fields) {
      return <div>FAÇA SUA PESQUISA</div>;
    }
    if (searchForm.values && !songs.search[stateSearchOption]) {
      return <div>LOADING</div>;
    }

    let list;
    if (stateSearchOption === 'tracks') list = songs.search.tracks;
    if (stateSearchOption === 'artists') list = songs.search.artists;
    if (stateSearchOption === 'albums') list = songs.search.albums;
    return <SongsList songs={list} />;
  };

  render() {
    return (
      <StyledSearchBody>
        {this.renderResults()}
        {/* {songs ? <SongsList songs={songs} /> : 'WAITING SEARCH'} */}
      </StyledSearchBody>
    );
  }
}

const StyledSearchBody = styled.div`
  margin-top: 1rem;
  flex-basis: 80%;
  background-color: #333;
  /* height: calc(100vh - 15rem); */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    searchForm: state.form.searchForm,
    stateSearchOption: state.searchOption,
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(SearchBody);
