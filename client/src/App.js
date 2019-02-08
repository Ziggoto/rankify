import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { authUrl } from './Config';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  openSpotifyPopup() {
    window.location.assign(authUrl);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={this.openSpotifyPopup}>Connect to Spotify</Button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);