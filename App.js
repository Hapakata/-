import React, { Component } from 'react';
import MovieDetail from './project2/MovieDetail';
import Scroll from './project2/Scroll';
class App extends Component {
  render() {
    return (
        <div>
          <Scroll></Scroll>

          <MovieDetail></MovieDetail>
        </div>
    );
  }
}

export default App;
