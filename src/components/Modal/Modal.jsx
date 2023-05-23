/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from "./Modal.module.css"

export const Modal =({handleModal,largeImageUrl, isOpen}) => {

useEffect(() => {
 document.addEventListener("keydown", onKeyPressed);
    return () => {
     window.removeEventListener('keydown', onKeyPressed);
    };
  }, []);

 const onKeyPressed =(e) => {
    if (e.keyCode === 27) {
      handleModal(false);
    }
  }

    return (
      <div
        className={css.overlay + (!isOpen ? " " + css.hidden : '')}
        onClick={() => {handleModal(false)}}
        onKeyDown={onKeyPressed}
        tabIndex={0}
      >
        <div className={css.modal} onClick= {(e) => {e.stopPropagation() }}>
          <img src={largeImageUrl} alt="gallery" />
        </div>
      </div>
    );
  }


Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  largeImageUrl: PropTypes.string.isRequired
};