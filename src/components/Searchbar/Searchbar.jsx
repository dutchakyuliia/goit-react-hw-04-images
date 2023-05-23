import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css"

export const Searchbar =({handleSearch}) => {
  const [value, setValue] = useState("");

  const handleChange = ({target: {value}}) => { 
   setValue(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(value)
  }
  
    return (
      <header className={css.searchbar}>
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
}
  
Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
