import React from 'react';
import SearchBar from '../components/SearchBar';
import SongsList from '../components/SongsList';
import Player from '../components/Player';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchPopular, fetchSearchResults, deleteSearch, newSelect } from '../actions';
import styled from 'styled-components';

class Home extends React.Component {
  componentDidMount() {
    // this.props.fetchPopular();
    this.fetchState();
  }

  onSearchChange = (e) => {
    if (e.target.value !== '') {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.props.fetchSearchResults(e), 500);
    } else {
      this.props.deleteSearch();
    }
  };

  fetchState = () => {
    this.props.fetchPopular().then(() => {
      const { popular } = this.props;
      return this.props.newSelect({ ...popular });
    });
  };

  renderHeader = () => {
    const { search, popular, selected } = this.props;
    if (Object.entries(selected).length === 0) return <div>Loading...</div>;
    let songs;
    // if (Object.entries(search).length === 0) {
    //   songs = popular.tracks.data;
    // } else {
    //   songs = search;
    // }
    return (
      <React.Fragment>
        <Header object={selected} />
        <Player />
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.onSearchChange} />
        {this.renderHeader()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popular: state.songs.popular,
    search: state.songs.search,
    selected: state.selected,
  };
};

export default connect(mapStateToProps, {
  fetchPopular,
  fetchSearchResults,
  deleteSearch,
  newSelect,
})(Home);
