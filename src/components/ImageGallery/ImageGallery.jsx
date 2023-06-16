import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

import pixabayApi from 'components/servises/pixabayApi';
import Button from 'components/Button/Button';
import { Gallery } from './ImageGalleryStyled';
// import 'react-toastify/dist/ReactToastify.css';
// import { Loader } from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery(props, keyWord) {
  // const [keyWord, setKeyWord] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (props.keyWord !== keyWord) {
      pixabayApi(props.keyWord, props.page)
        .then(response => response)
        .then(photos => setPhotos(photos.hits));
    }
  }, [props.page, props.keyWord, keyWord]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setLoading(true);
    pixabayApi(props.keyWord, nextPage)
      .then(photos => {
        setPhotos(prevPhotos => [...prevPhotos, ...photos.hits]);
        setPage(nextPage);
        // setLoading(false);
      })
      .catch(error => {
        console.log('Error');
      });
  };

  return (
    console.log(loading),
    (
      <div>
        <Gallery>
          <ImageGalleryItem arrayPhotos={photos} />
          {photos.length !== 0 && <Button onCount={handleLoadMore} />}
          <Loader onSpinner={loading} />
        </Gallery>
      </div>
    )
  );
}
