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

  renderContent = () => {
    const { spotifyCode } = this.props;
    if (!spotifyCode) {
      return <Button onClick={this.openSpotifyPopup}>Connect to Spotify</Button>;
    } else {
      return <p>{spotifyCode}</p>
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderContent()}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotifyCode: state.config.get('code')
});

const mapDispatchToProps = dispatch => ({
  // connectSpotify: () => {
  //   dispatch(connectSpotify());
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
