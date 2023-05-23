import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./LoadMoreButton.module.css";
export class LoadMoreButton extends Component {
    render() {
        return (
          <button className={css.buttonLoad} onClick={this.props.addNewPage}>Load more</button>
    )
}
}

LoadMoreButton.propTypes = {
  addNewPage: PropTypes.func.isRequired
};