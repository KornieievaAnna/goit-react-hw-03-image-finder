import React from 'react';
import {
  ImageGalleryStyled,
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGallery.styled';

export function ImageGallery({ images, openModal, modalUrl }) {
  return (
    <ImageGalleryStyled>
      {images.map(image => (
        <ImageGalleryItemStyled
          key={image.id}
          onClick={() => modalUrl(image.largeImageURL)}
        >
          <ImageGalleryItemImage
            src={image.webformatURL}
            alt={image.tags}
            onClick={openModal}
          />
        </ImageGalleryItemStyled>
      ))}
    </ImageGalleryStyled>
  );
}
