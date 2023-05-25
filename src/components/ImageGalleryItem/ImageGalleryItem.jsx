import React from 'react';
import PropTypes from 'prop-types';
import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ handleModal, changeLargeImageUrl, image: { largeImageURL, webformatURL} }) => {
    return (
        <li className={css.galleryItem} onClick={() => { handleModal(true); changeLargeImageUrl(largeImageURL)}   } >
    <img className={css.galleryImg} src={webformatURL} alt="gallery"/>
</li>
    );
  }


ImageGalleryItem.propTypes = {
  handleModal: PropTypes.func.isRequired,
  changeLargeImageUrl: PropTypes.func.isRequired, 
   image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
  })
};