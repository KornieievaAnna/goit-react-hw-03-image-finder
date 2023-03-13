import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ images, openModal, getModalUrl }) {
  return (
    <>
      {images.map(image => (
        <ImageGalleryItemStyled
          key={image.id}
          onClick={() => getModalUrl(image.largeImageURL)}
        >
          <ImageGalleryItemImage
            src={image.webformatURL}
            alt={image.tags}
            onClick={openModal}
          />
        </ImageGalleryItemStyled>
      ))}
    </>
  );
}
