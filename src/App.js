import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* // As per the router children will be loaded here like router outlet
          children will be added to props automatically by router*/}
        {this.props.children}

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
