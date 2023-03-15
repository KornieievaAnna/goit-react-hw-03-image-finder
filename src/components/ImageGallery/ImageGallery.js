import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export function ImageGallery({ imgInfo, openModal, modalUrl }) {
  return (
    <ImageGalleryStyled>
      {imgInfo && (
        <ImageGalleryItem
          images={imgInfo}
          openModal={openModal}
          getModalUrl={modalUrl}
        />
      )}
    </ImageGalleryStyled>
  );
}
