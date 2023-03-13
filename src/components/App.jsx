import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { AppStyle } from './App.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    key: '32996864-5f1a960915a219f7f2c6f1a79',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    page: '1',
    per_page: '12',
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
    this.setState({ q: name });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
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
