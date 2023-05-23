import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./Modal.module.css"
export class Modal extends Component {

  componentDidMount() {
   document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }
  
componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyPressed.bind(this));
  }

  onKeyPressed(e) {
    if (e.keyCode === 27) {
      this.props.setIsOpen(false);
    }
  }

  
  render() {
    return (
      <div
        className={css.overlay + (!this.props.isOpen ? " " + css.hidden : '')}
        onClick={() => { this.props.setIsOpen(false)}}
        onKeyDown={this.onKeyPressed}
        tabIndex={0}
      >
        <div className={css.modal} onClick= {(e) => {e.stopPropagation() }}>
          <img src={this.props.largeImageUrl} alt="gallery" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  largeImageUrl: PropTypes.string.isRequired
};