import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css"
export class Searchbar extends Component {
  state = {
  value: ""
}
  handleChange = (e) => { 
    this.setState({value: e.target.value})
  };


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.value)
  }
  
  render() {
    return (
      <header className={css.searchbar}>
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
