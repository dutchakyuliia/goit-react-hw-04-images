import React from 'react';
import PropTypes from 'prop-types';
import css from "./LoadMoreButton.module.css";

export const LoadMoreButton =({addNewPage}) =>{
        return (
          <button className={css.buttonLoad} onClick={addNewPage}>Load more</button>
    )
}


LoadMoreButton.propTypes = {
  addNewPage: PropTypes.func.isRequired
};