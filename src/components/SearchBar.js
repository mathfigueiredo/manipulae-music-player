import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  fetchSearchResults,
  fetchSearchTracks,
  fetchSearchArtists,
  fetchSearchAlbums,
  toggleSearchWingow,
} from '../actions';
import Magnifier from './icons/Magnifier';
import styled from 'styled-components';

class SearchBar extends React.Component {
  onSearchChange = (e) => {
    const { fetchSearchTracks, fetchSearchArtists, fetchSearchAlbums, stateSearchOption } =
      this.props;
    let fetchFunction;
    if (e.target.value !== '') {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        fetchSearchTracks(e);
        fetchSearchArtists(e);
        fetchSearchAlbums(e);
      }, 500);
    } else {
      // this.props.deleteSearch();
    }
  };

  onInputFocus = () => {
    const { toggleSearchWingow } = this.props;
    toggleSearchWingow(true);
  };

  renderInput = (formProps) => {
    return (
      <input
        {...formProps.input}
        autoComplete="off"
        spellCheck={false}
        onFocus={this.onInputFocus}
      />
    );
  };

  render() {
    const { color } = this.props;
    return (
      <StyledForm color={color}>
        <Field name="query" component={this.renderInput} onChange={this.onSearchChange} />

        <Magnifier />
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  position: relative;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  z-index: 11;
  width: 80%;
  input {
    width: 25%;
    transition: all 0.2s;
    height: 24px;
    border-radius: 8px;
    font-size: 1rem;
    letter-spacing: 2px;
    text-align: center;
    color: ${(props) => props.color || 'black'};

    &:focus {
      outline: none;
      width: 35%;
    }

    &:focus + .magnifier {
      opacity: 0;
    }
  }
`;

const form = reduxForm({
  form: 'searchForm',
})(SearchBar);

const mapStateToProps = (state) => {
  return {
    stateSearchOption: state.searchOption,
    color: state.color,
  };
};

export default connect(mapStateToProps, {
  fetchSearchResults,
  fetchSearchTracks,
  fetchSearchArtists,
  fetchSearchAlbums,
  toggleSearchWingow,
})(form);
