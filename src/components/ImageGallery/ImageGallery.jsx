import React, { Component } from 'react';
import { getImages } from 'services/getImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import PropTypes from 'prop-types';
import { LoadMoreButton } from 'components/LoadMoreButton';
export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    isOpen: false,
    largeImageUrl: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImages !== this.props.searchImages) {
      this.setState({ isLoading: true });
      getImages(this.props.searchImages, this.props.page)
        .then(responce => responce.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    } else if (prevProps.page !== this.props.page) {
      this.setState({ isLoading: true });
      getImages(this.props.searchImages, this.props.page)
        .then(responce => responce.json())
        .then(images =>
          this.setState({ images: [...this.state.images, ...images.hits] })
        )
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  setIsOpen = newIsOpen => {
    this.setState({ isOpen: newIsOpen });
  };

  changeLargeImageUrl = largeImageUrl => {
    this.setState({ largeImageUrl: largeImageUrl });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader></Loader>}
        <Modal
          largeImageUrl={this.state.largeImageUrl}
          setIsOpen={this.setIsOpen}
          isOpen={this.state.isOpen}
        ></Modal>
        <ul className={css.gallery}>
          {images?.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              setIsOpen={this.setIsOpen}
              changeLargeImageUrl={this.changeLargeImageUrl}
            ></ImageGalleryItem>
          ))}
        </ul>
        {!!images.length && (
          <LoadMoreButton addNewPage={this.props.addNewPage} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchImages: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
