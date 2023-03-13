import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Audio } from 'react-loader-spinner';

export default class ImageGallery extends Component {
  state = {
    hits: null,
    loading: false,
    
  };

  componentDidUpdate(prevProps, prevState) {
    const { key, q, image_type, orientation, page, per_page } =
      this.props.imgInfo;

    if (
      prevProps.imgInfo.q !== this.props.imgInfo.q ||
      prevProps.imgInfo.page !== this.props.imgInfo.page
    ) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
      )
        .then(response => response.json())
        .then(hits => this.setState({ ...hits, ...prevState.hits }))
        .finally(() => this.setState({ loading: false }));
    }
    console.log(this.state.hits);
  }

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
