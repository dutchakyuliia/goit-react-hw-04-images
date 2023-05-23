import React, { useState } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export const App = () => {
  const [searchImages, setSearchImages] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = searchImages => {
    setSearchImages(searchImages);
    setPage(page)
  };

  
  const addNewPage = () => {
    setPage(page + 1)
  };

  return (
    <div>
      <Searchbar handleSearch={handleSearch}></Searchbar>
      <ImageGallery
        addNewPage={addNewPage}
        page={page}
        searchImages={searchImages}
      ></ImageGallery>
    </div>
  );
};
