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
    const { color } = this.props;
    return (
      <StyledForm color={color}>
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
    color: ${(props) => props.color || 'black'};

    &:focus {
      outline: none;
      width: 30%;
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
    color: state.color,
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(form);
