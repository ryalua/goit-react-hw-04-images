import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// import PropTypes from 'prop-typs';
import { SearchHeader, SearchForm } from 'components/Searchbar/SearchbarStyled';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    keyWord: '',
    page: 1,
  };

  handelInput = ({ target }) => {
    this.setState({
      keyWord: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Проверка: Пустой ли массив при запросе?
    if (this.state.keyWord === '') {
      toast.warn(
        'Sorry, there are no images matching your search query. Please try again.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
      return;
    }
    this.props.onKeyWord(this.state.keyWord);
  };

  render() {
    return (
      <>
        <SearchHeader>
          <SearchForm onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handelInput}
              value={this.state.keyWord}
            />
          </SearchForm>
        </SearchHeader>
        <ToastContainer />
      </>
    );
  }
}

export default Searchbar;
