import React, { Component } from "react";
import Search from "./Search";
import GifList from "./GifList";
import GifModal from './GifModal'

class App extends Component {
  constructor() {
    super();
    this.handleTermChange = this.handleTermChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      gifs: [],
      selectedGif : null,
      modalIsOpen:false
    };
  }

  openModal(gif){
    this.setState({
      modalIsOpen:true,
      selectedGif:gif
    })
  }

  closeModal(gif){
    this.setState({
      selectedGif:null,
      modalIsOpen:false,
    })
  }

  handleTermChange(term) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`)
      .then(blob => blob.json())
      .then(gifs =>
       this.setState({
          gifs: gifs.data
        })
      );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search onTermChange={this.handleTermChange} />
          <GifList gifs={this.state.gifs} onGifSelect ={selectedGif => this.openModal(selectedGif)}/>
          <GifModal modalIsOpen ={this.state.modalIsOpen} selectedGif={this.state.selectedGif} onRequestClose={this.closeModal} /> 
        </div>
      </div>
    );
  }
}

export default App;
