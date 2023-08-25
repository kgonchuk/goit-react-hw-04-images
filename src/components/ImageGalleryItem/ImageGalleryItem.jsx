import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, onModalClick }) => {
  return (
    <li className={css.gallery_item} key={item.id}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => onModalClick(item.largeImageURL)}
        width={200}
        className={css.gallery_image}
      />
    </li>
  );
};
ImageGalleryItem.prototype = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onModalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
