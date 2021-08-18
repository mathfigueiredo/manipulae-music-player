import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions';

class SearchBar extends React.Component {
  renderInput(formProps) {
    return <input {...formProps.input} />;
  }

  render() {
    return (
      <form>
        <Field name="query" component={this.renderInput} onChange={this.props.onSearchChange} />
      </form>
    );
  }
}

const form = reduxForm({
  form: 'searchForm',
})(SearchBar);

export default connect(null, { fetchSearchResults })(form);
