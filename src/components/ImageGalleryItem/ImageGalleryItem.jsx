import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./ImageGalleryItem.module.css"
export class ImageGalleryItem extends Component {
  render() {
    return (
        <li className={css.galleryItem} onClick={() => { this.props.setIsOpen(true); this.props.changeLargeImageUrl(this.props.image.largeImageURL)}   } >
    <img className={css.galleryImg} src={this.props.image.webformatURL} alt="gallery"/>
</li>
    );
  }
}

ImageGalleryItem.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  changeLargeImageUrl: PropTypes.func.isRequired, 
   images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
  }))
};