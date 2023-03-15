import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { AppStyle } from './App.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Notiflix from 'notiflix';

import * as Api from 'service/api';

import { Dna } from 'react-loader-spinner';

class App extends Component {
  state = {
    q: '',
    page: 1,
    showModal: false,
    modalUrl: '',
    hits: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
      this.getHits(this.state.q, this.state.page);
      this.setState({ isLoading: true });
    }
  }

  getHits = async (name, page) => {
    try {
      const images = await Api.getImages(name, page);
      if (!images.length) {
        Notiflix.Notify.failure(
          `Sorry, there are no images matching your search query "${name}". Please try again.`
        );
      }
      this.setState(prev => ({
        hits: [...prev.hits, ...images],
      }));
    } catch (error) {
      console.log('error');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleModalOpen = url => {
    this.setState({ modalUrl: url });
  };

  handleFormSubmit = name => {
    this.setState({ hits: [], q: name, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { showModal, loading } = this.state;
    return (
      <AppStyle>
        {showModal && (
          <Modal modalImg={this.state.modalUrl} onClose={this.toggleModal}>
            <img src={this.state.modalUrl} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          imgInfo={this.state.hits}
          openModal={this.toggleModal}
          modalUrl={this.handleModalOpen}
        ></ImageGallery>
        {loading && (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
        {this.state.hits.length > 0 && (
          <Button loadMore={this.handleLoadMore} />
        )}
      </AppStyle>
    );
  }
}

export default App;
