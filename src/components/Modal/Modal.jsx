// import React, { Component } from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, onCloseModal }) => {
  useEffect(() => {
    const handleCloseModal = evt => {
      if (evt.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [onCloseModal]);

  const handleCloseBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  };
  return (
    <div className={css.backdrop} onClick={handleCloseBackdrop}>
      <div className={css.modal}>
        <img className={css.modalImg} src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  largeImageURL: PropTypes.any.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
export default Modal;
