import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveSpotifyCode, fetchAccessToken } from './Actions';

import './App.css';


class CodeRoute extends Component {
  componentDidMount() {
    // http://ziggoto.com:3000/code?code=AQDFEWbOeuI_BRBQO-8Vlx5qyiQyVZbj7Eq781CMc1L-ADjMgyCGfecQDLdly8s1U9yhd24Kr4UszXmFPLCKpsmsWSR-IW4sA8304-2-COf5AdSjHw8Vf5nfjrq6do70IwLuYae0YSEhhvd-9ktuiHO1svxj8mewl2jJjTl42hLBnlvd0g8gcwRIDru1a9pM8ActRlwSf0mQGAXxtCF5sXxctg
    const { saveSpotifyCode, fetchAccessToken } = this.props;
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    saveSpotifyCode(code);
    fetchAccessToken(code);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Should show Spotify OAuth code</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  saveSpotifyCode: (code) => {
    dispatch(saveSpotifyCode(code));
  },
  fetchAccessToken: (code) => {
    dispatch(fetchAccessToken(code))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CodeRoute);
