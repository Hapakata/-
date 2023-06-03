import React, { Component } from 'react';
import MovieDetail from './MovieDetail';
import './Scroll.css';

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section1Height: 'fit-content',
      section2Height: 'fit-content',
    };
  }

  render() {
    const { section1Height, section2Height } = this.state;

    return (
      <div>
        <div id="section1" style={{ height: section1Height, backgroundColor: 'pink' }}>
          <MovieDetail />
          <a href="#section2" className="scroll-button">세션2로 이동</a>
        </div>
        <div id="section2" style={{ height: section2Height, backgroundColor: 'yellow' }}>
          <a href="#section1" className="scroll-button2">세션1로 이동</a>
          <MovieDetail />
        </div>
      </div>
    );
  }
}

export default Scroll;
