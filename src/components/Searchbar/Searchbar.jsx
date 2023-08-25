import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleFormInput = e => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    // e.target.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchform} onSubmit={handleFormSubmit}>
        <button type="submit" className={css.searchform_button}>
          <span className={css.searchform_button_label}>Search</span>
        </button>

        <input
          onChange={handleFormInput}
          value={inputValue}
          name="query"
          className={css.searchform_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
// class SearchBar extends Component {
//   state = {
//     inputValue: '',
//   };
//   handleFormInput = e => {
//     this.setState({ inputValue: e.target.value });
//   };
//   handleFormSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.inputValue);
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchform} onSubmit={this.handleFormSubmit}>
//           <button type="submit" className={css.searchform_button}>
//             <span className={css.searchform_button_label}>Search</span>
//           </button>

//           <input
//             onChange={this.handleFormInput}
//             value={this.state.inputValue}
//             name="query"
//             className={css.searchform_input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// export default SearchBar;
