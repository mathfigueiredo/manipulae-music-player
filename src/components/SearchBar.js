import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions';
import deezer from '../api/deezer';

class SearchBar extends React.Component {
  renderInput(formProps) {
    return <input {...formProps.input} />;
  }

  onSearchChange = (e) => {
    if (e.target.value !== '') {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.props.fetchSearchResults(e), 500);
    }
  };

  render() {
    return (
      <form>
        <Field name="query" component={this.renderInput} onChange={this.onSearchChange} />
      </form>
    );
  }
}

const form = reduxForm({
  form: 'searchForm',
})(SearchBar);

export default connect(null, { fetchSearchResults })(form);
