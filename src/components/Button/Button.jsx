import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onPageUpload }) => {
  return (
    <div>
      <button type="button" onClick={onPageUpload} className={css.load_btn}>
        Load more
      </button>
    </div>
  );
};
Button.propTypes = {
  onPageUpload: PropTypes.func.isRequired,
};

export default Button;
