import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTopArtists } from './Actions';

import './App.css';
import 'antd/dist/antd.css';

class Profile extends Component {
  componentDidMount() {
    const { fetchTopArtistsAction } = this.props;
    fetchTopArtistsAction();
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

const mapStateToProps = state => ({
  topArtists: state.user.get('topArtists')
});

const mapDispatchToProps = dispatch => ({
  fetchTopArtistsAction: () => dispatch(fetchTopArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
