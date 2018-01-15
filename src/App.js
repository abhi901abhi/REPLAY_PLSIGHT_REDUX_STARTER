import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import JsonView from 'react-pretty-json'; // 'react-pretty-json';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {/* // As per the router children will be loaded here like router outlet
          children will be added to props automatically by router*/}
        {this.props.children}
          loading =   <JsonView json={this.props.loading} />
      </div>
    );
  }

}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){debugger;
  return{
    loading: state.inprogressAjaxCallsCount > 0
  }
}

export default connect(mapStateToProps)(App);
