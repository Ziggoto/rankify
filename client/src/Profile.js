import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

class Profile extends Component {
  componentDidMount() {
    console.log('I have to make a request');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Should show ranking list</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
