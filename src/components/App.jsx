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
  // const [isError, setIsError] = useState(null);
  const [totalImages, setTotalImages] = useState(0);
  // const [showModal, setShowModal] = useState(false);
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
        setImages(prevImages => [prevImages.images, ...data.hits]);
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

// export class App extends Component {
//   state = {
//     images: [],
//     searchQuery: '',
//     currentPage: 1,
//     isLoading: false,
//     // isError: null,
//     totalImages: 0,
//     showModal: false,
//     largeImageURL: '',
//   };

//   componentDidUpdate(_, prevState) {
//     const { searchQuery, currentPage } = this.state;
//     if (
//       searchQuery !== prevState.searchQuery ||
//       currentPage !== prevState.currentPage
//     ) {
//       this.fetchImagesItem(searchQuery, currentPage);
//     }
//   }

//   onSubmitSearch = query => {
//     this.setState({ searchQuery: query, images: [], currentPage: 1 });
//   };

//   fetchImagesItem = async (query, page) => {
//     try {
//       this.setState({ isLoading: true });
//       const data = await fetchPixabay(query, page);
//       if (data.totalHits === 0) {
//         Notify.failure('There are no images!');
//       }
//       this.setState(prevState => {
//         return {
//           images: [...prevState.images, ...data.hits],
//           totalImages: data.totalHits,
//         };
//       });
//     } catch (error) {
//       this.setState({ isError: 'Failed to load images' });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };
//   onModalClick = largeImageURL => {
//     this.setState({
//       largeImageURL: largeImageURL,
//     });
//   };
//   onCloseModal = () => {
//     this.setState({
//       largeImageURL: '',
//     });
//   };
//   onPageUpload = () => {
//     this.setState(prev => ({
//       currentPage: prev.currentPage + 1,
//     }));
//   };
//   render() {
//     const { images, isLoading, totalImages, largeImageURL } = this.state;
//     const showLoadMore =
//       images.length > 0 && !isLoading && images.length < totalImages;

//     return (
//       <div>
//         <Searchbar onSubmit={this.onSubmitSearch} />
//         {isLoading && <Loader />}
//         <ImageGallery images={images} onModalClick={this.onModalClick} />
//         {showLoadMore && <Button onPageUpload={this.onPageUpload} />}
//         {largeImageURL && (
//           <Modal
//             largeImageURL={largeImageURL}
//             onCloseModal={this.onCloseModal}
//           />
//         )}
//       </div>
//     );
//   }
// }
