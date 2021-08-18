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

  renderSongs = () => {
    const { search, popular } = this.props;
    if (Object.entries(popular).length === 0) return <div>Loading...</div>;
    let songs;
    songs = Object.entries(search).length === 0 ? popular.tracks.data : search;
    return <SongsList songs={songs} />;
  };

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.onSearchChange} />
        {this.renderSongs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popular: state.songs.popular,
    search: state.songs.search,
  };
};

export default connect(mapStateToProps, { fetchPopular, fetchSearchResults, deleteSearch })(Home);
