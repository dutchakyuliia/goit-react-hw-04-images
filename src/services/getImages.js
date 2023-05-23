const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36419361-f656a82a30af24a3eae691bd9';

export const getImages = (searchImages, page) => {
 return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchImages}&image_type=photo&page=${page}&orientation=horizontal&per_page=12`
  )   
};

