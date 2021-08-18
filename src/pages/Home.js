import React from 'react';
import SearchBar from '../components/SearchBar';
import SongsList from '../components/SongsList';
import { connect } from 'react-redux';
import { fetchPopular, fetchSearchResults, deleteSearch } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchPopular();
  }

  onSearchChange = (e) => {
    if (e.target.value !== '') {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.props.fetchSearchResults(e), 500);
    } else {
      this.props.deleteSearch();
    }
  };

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.onSearchChange} />
        <SongsList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { fetchPopular, fetchSearchResults, deleteSearch })(Home);
