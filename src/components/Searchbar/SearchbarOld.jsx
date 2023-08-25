// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import css from './Searchbar.module.css';

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
