import { Component } from 'react';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';


export default class ImageGallery extends Component {
  state = {
   
  };

  render() {
    return (
      <ImageGalleryStyled>
        {this.props.imgInfo && (
          <ImageGalleryItem
            images={this.props.imgInfo}
            openModal={this.props.openModal}
            getModalUrl={this.props.modalUrl}
          />
        )}
       
      </ImageGalleryStyled>
    );
  }
}
