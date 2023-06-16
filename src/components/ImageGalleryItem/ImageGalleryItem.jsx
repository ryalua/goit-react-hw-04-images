// import React, { useState, useEffect } from 'react';
// import { GalleryItem } from './ImageGalleryItemStyled';
// import Modal from 'components/Modal/Modal';
// import { ModalOverlay } from 'components/Modal/ModalStyled';

// // import React from 'react'

// export function ImageGalleryItem({ arrayPhotos }) {
//   const [showModal, setShowModal] = useState(false);
//   const [largeImage, setLargeImage] = useState('');

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);

//     document.removeEventListener('keydown', handleKeyDown);
//   });

//   const openModal = photo => {
//     setShowModal(true);
//     setLargeImage(photo);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setLargeImage('');
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       closeModal();
//     }
//   };

//   return (
//     <div>
//       {arrayPhotos.map(({ id, webformatURL, largeImageURL, tags }) => (
//         <GalleryItem key={id}>
//           <div className="image">
//             <img
//               src={webformatURL}
//               alt={tags}
//               onClick={() => openModal(largeImageURL)}
//             />
//           </div>

//           {showModal && (
//             <ModalOverlay onClick={closeModal}>
//               <Modal>
//                 <img src={largeImage} alt={tags} />
//               </Modal>
//             </ModalOverlay>
//           )}
//         </GalleryItem>
//       ))}
//     </div>
//   );
// }

// // export class ImageGalleryItem extends Component {
// //   // state = {
// //   //   showModal: false,
// //   //   largeImage: '',
// //   // };

// //   componentDidMount() {
// //     document.addEventListener('keydown', this.handleKeyDown);
// //   }

// //   componentWillUnmount() {
// //     document.removeEventListener('keydown', this.handleKeyDown);
// //   }

// //   render() {
// //     const { showModal, largeImage } = this.state;
// //     const { arrayPhotos } = this.props;

// //     return <></>;
// //   }
// // }

// // export default ImageGalleryItem;

import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItemStyled';
import Modal from 'components/Modal/Modal';
import { ModalOverlay } from 'components/Modal/ModalStyled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImage: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  openModal = photo => {
    this.setState({
      showModal: true,
      largeImage: photo,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImage: '',
    });
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { showModal, largeImage } = this.state;
    const { arrayPhotos } = this.props;

    return (
      <>
        {arrayPhotos.map(({ id, webformatURL, largeImageURL, tags }) => (
          <GalleryItem key={id}>
            <div className="image">
              <img
                src={webformatURL}
                alt={tags}
                onClick={() => this.openModal(largeImageURL)}
              />
            </div>

            {showModal && (
              <ModalOverlay onClick={this.closeModal}>
                <Modal>
                  <img src={largeImage} alt={tags} />
                </Modal>
              </ModalOverlay>
            )}
          </GalleryItem>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
