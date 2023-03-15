import { Component } from 'react';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Audio } from 'react-loader-spinner';

import * as Api from 'service/api';

export default class ImageGallery extends Component {
  state = {
    name: this.props.imgInfo.q,
    page: this.props.imgInfo.page,
    hits: [],
    loading: false,
    listRef: React.createRef(),
  };


  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imgInfo.q !== this.props.imgInfo.q ||
      prevProps.imgInfo.page !== this.props.imgInfo.page
    ) {
      this.getHits(this.props.imgInfo.q, this.props.imgInfo.page);
    }
  }

  getHits = async (name, page) => {
    try {
      console.log(name, page);
      const images = await Api.getImages(name, page);
      this.setState(prev => ({ hits: [...prev.hits, ...images] }));
      console.log(images);
    } catch (error) {
      console.log('error');
    }
  };

  render() {
    const { hits, loading } = this.state;
    return (
      <ImageGalleryStyled>
        {hits && (
          <ImageGalleryItem
            images={hits}
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
