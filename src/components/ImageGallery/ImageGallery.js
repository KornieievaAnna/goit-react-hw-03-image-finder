import { Component } from 'react';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Audio } from 'react-loader-spinner';

export default class ImageGallery extends Component {
  state = {
    loading: false,
  };

  render() {
    const {  loading } = this.state;
    return (
      <ImageGalleryStyled>
        {this.props.imgInfo && (
          <ImageGalleryItem
            images={this.props.imgInfo}
            openModal={this.props.openModal}
            getModalUrl={this.props.modalUrl}
          />
        )}
        {loading && (
          <Audio
            height="80"
            width="160"
            radius="9"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
      </ImageGalleryStyled>
    );
  }
}
