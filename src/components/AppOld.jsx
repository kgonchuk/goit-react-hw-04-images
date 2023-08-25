// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';

// import Searchbar from './Searchbar/Searchbar';
// import fetchPixabay from './Services/PixabayApi';
// import { Component } from 'react';
// import { Notify } from 'notiflix';
// import Modal from './Modal/Modal';

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
