import React from 'react';

import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = (props) => {

  const newArray = props.images.map(image => <ImageCard key={image.id} image={image} />);

  return (
    <div className='image-list'>{newArray}</div>
  )
};

export default ImageList;