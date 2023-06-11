import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

import pixabayApi from 'components/servises/pixabayApi';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Gallery } from './ImageGalleryStyled';
import Loader from 'components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';

export class ImageGallery extends Component {
  state = {
    keyWord: '',
    photos: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.keyWord !== this.props.keyWord) {
      pixabayApi(this.props.keyWord, this.props.page)
        .then(response => response)
        .then(photos => this.setState({ photos: photos.hits }));
    }
  }

  handleLoadMore = () => {
    const { page } = this.state;
    const nextPage = page + 1;

    this.setState({ loading: true });

    pixabayApi(this.props.keyWord, nextPage)
      .then(photos => {
        const newPhotos = [...this.state.photos, ...photos.hits];
        this.setState({
          photos: newPhotos,
          page: nextPage,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Error');
      });
  };

  render() {
    return (
      <>
        <Gallery>
          <ImageGalleryItem arrayPhotos={this.state.photos} />
          {this.state.photos.length !== 0 && (
            <Button onCount={this.handleLoadMore} />
          )}
          <Loader onSpinner={this.state} />
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
