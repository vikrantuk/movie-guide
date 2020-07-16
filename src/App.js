import React, { Component, Fragment } from 'react';
import './App.css';
import Card from './card';
// import key from './key';
import SearchBox from './SearchBox'

const key = 'f41ba8cc';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      searchfield: ''
    }
  }

  onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value})
    fetch(`https://www.omdbapi.com/?t=${this.state.searchfield}&apikey=${key}`)
      .then(response => response.json())
      .then(user => this.setState({movies: user}));
  }

  render(){
    return(
      <Fragment>
        <div className="tc">
          <h1 className="f1">Your Movie Guide</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Card movies={this.state.movies}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
