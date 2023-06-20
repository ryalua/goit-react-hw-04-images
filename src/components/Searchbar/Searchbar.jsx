import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// import PropTypes from 'prop-typs';
import { SearchHeader, SearchForm } from 'components/Searchbar/SearchbarStyled';
import 'react-toastify/dist/ReactToastify.css';

const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export function Searchbar({ onKeyWord }) {
  const [keyWord, setKeyWord] = useState('');

  const handelInput = ({ target }) => {
    setKeyWord(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Проверка: Пустой ли массив при запросе?
    if (keyWord === '') {
      toast.warn(
        'Sorry, there are no images matching your search query. Please try again.',
        toastConfig
      );
      return;
    }
    onKeyWord(keyWord);
  };

  return (
    <>
      <SearchHeader>
        <SearchForm onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handelInput}
            value={keyWord}
          />
        </SearchForm>
      </SearchHeader>
      <ToastContainer />
    </>
  );
}
