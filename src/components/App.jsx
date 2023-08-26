import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import Searchbar from './Searchbar/Searchbar';
import fetchPixabay from './Services/PixabayApi';
// import { Component } from 'react';
import { Notify } from 'notiflix';
import Modal from './Modal/Modal';
import { useEffect, useState } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function fetchImagesItem() {
      try {
        setIsLoading(true);
        const data = await fetchPixabay(searchQuery, currentPage);
        if (data.totalHits === 0) {
          Notify.failure('There are no images!');
        }
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalImages(data.totalHits);
      } catch (error) {
        Notify.failure('Failed to load images');
      } finally {
        setIsLoading(false);
      }
    }
    fetchImagesItem();
  }, [searchQuery, currentPage]);

  const onSubmitSearch = query => {
    if (query === searchQuery) {
      Notify.failure(`Images of ${query} have already been displayed.`);
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
  };

  const onModalClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const onCloseModal = () => {
    setLargeImageURL('');
  };

  const onPageUpload = () => {
    setCurrentPage(prevCurentPage => prevCurentPage + 1);
  };

  const showLoadMore =
    images.length > 0 && !isLoading && images.length < totalImages;
  return (
    <div>
      <Searchbar onSubmit={onSubmitSearch} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onModalClick={onModalClick} />
      {showLoadMore && <Button onPageUpload={onPageUpload} />}
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} onCloseModal={onCloseModal} />
      )}
    </div>
  );
};
