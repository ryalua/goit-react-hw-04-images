import React, { useState } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export function App() {
  const [keyWord, setKeyWord] = useState('');

  const handleKeyWord = keyWord => {
    setKeyWord(keyWord);
  };

  return (
    <div>
      <Searchbar onKeyWord={handleKeyWord} />
      <ImageGallery keyWord={keyWord} />
    </div>
  );
}

export default App;
