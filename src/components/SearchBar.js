import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions';
import Magnifier from './icons/Magnifier';
import styled from 'styled-components';

class SearchBar extends React.Component {
  renderInput(formProps) {
    return <input {...formProps.input} autoComplete="off" />;
  }

  render() {
    return (
      <StyledForm>
        <Field name="query" component={this.renderInput} onChange={this.props.onSearchChange} />

        <Magnifier />
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  input {
    width: 20%;
    transition: all 0.2s;
    height: 24px;
    border-radius: 8px;
    font-size: 1rem;
    letter-spacing: 2px;
    text-align: center;

    &:focus {
      outline: none;
      width: 30%;
    }
  }
`;

const form = reduxForm({
  form: 'searchForm',
})(SearchBar);

export default connect(null, { fetchSearchResults })(form);
