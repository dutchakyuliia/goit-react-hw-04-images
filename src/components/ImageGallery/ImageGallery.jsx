/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getImages } from 'services/getImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import PropTypes from 'prop-types';
import { LoadMoreButton } from 'components/LoadMoreButton';

export const ImageGallery =({searchImages, page, addNewPage}) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState("")


  useEffect(() => {
    if (!searchImages) return;
    setIsLoading(true)
      getImages(searchImages, page)
        .then(responce => responce.json())
        .then(data => setImages(prevImages => [...prevImages, ...data.hits]))
        .finally(() => { setIsLoading(false)
        });
  }, [searchImages, page]);

  const handleModal = newIsOpen => {
    setIsOpen(newIsOpen)
  };

  const changeLargeImageUrl = largeImageUrl => {
    setLargeImageUrl(largeImageUrl)
  };

  useEffect(() => {
  setImages([])
}, [searchImages])

    return (
      <>
        {isLoading && <Loader></Loader>}
        <Modal
          largeImageUrl={largeImageUrl}
          handleModal={handleModal}
          isOpen={isOpen}
        ></Modal>
        <ul className={css.gallery}>
          {images?.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              handleModal={handleModal}
              changeLargeImageUrl={changeLargeImageUrl}
            ></ImageGalleryItem>
          ))}
        </ul>
        {!!images.length && (
          <LoadMoreButton addNewPage={addNewPage} />
        )}
      </>
    );
  }

ImageGallery.propTypes = {
  searchImages: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
