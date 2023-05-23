import React, { Component } from 'react';
import {Searchbar} from './Searchbar';
import { ImageGallery } from './ImageGallery';


export class App extends Component {
  state = {
    searchImages: '',
    page: 1
  };
  handleSearch = searchImages => {
    this.setState({ searchImages, page: 1 });
  };
  
addNewPage = () => {
  this.setState({ page: this.state.page + 1 });
  }; 

  render() {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch}></Searchbar>
        <ImageGallery addNewPage={this.addNewPage} page={this.state.page} searchImages={this.state.searchImages}></ImageGallery>
      
      </div>
    );
  }
}
