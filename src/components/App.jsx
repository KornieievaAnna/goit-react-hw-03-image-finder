import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { AppStyle } from './App.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';

class App extends Component {
  state = {
    q: '',
    page: 1,
    showModal: false,
    modalUrl: '',
    showButton: false,
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
    this.setState({ q: name, showButton: true });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { showModal, showButton } = this.state;
    return (
      <AppStyle>
        {showModal && (
          <Modal modalImg={this.state.modalUrl} onClose={this.toggleModal}>
            <img src={this.state.modalUrl} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          imgInfo={this.state}
          openModal={this.toggleModal}
          modalUrl={this.handleModalOpen}
        ></ImageGallery>
        {showButton && <Button loadMore={this.handleLoadMore} />}
      </AppStyle>
    );
  }
}

export default App;
