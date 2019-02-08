import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

const testStyle = {
  backgroundColor: '#1ED760',
  border: '0px',
  height: '50px',
}

class App extends Component {
  openSpotifyPopup() {
    window.location.assign('http://localhost:8888/login');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary" size="large" style={testStyle} onClick={this.openSpotifyPopup}>Connect to Spotify</Button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
