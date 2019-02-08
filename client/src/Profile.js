import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Layout } from 'antd';

import { fetchTopArtists } from './Actions';

import 'antd/dist/antd.css';
import './App.css';

const { Content } = Layout;

const styles = {
  item: {
    backgroundColor: '#282c34',
    borderColor: '#333842'
  },
  meta: {
    color: '#fff'
  }
};

class Profile extends Component {
  renderRow = (artist, index) => {
    return (
      <List.Item style={styles.item}>
        <div className="customRow">
          <img width={160} alt='logo' src={artist.images[2].url} />
          <div>
            <div className="customRow__title">
              <span className="customRow__index">{index+1}º</span>
              {artist.name}
            </div>
            <div>{artist.genres.join(', ')}</div>
          </div>
        </div>
      </List.Item>
    );
  };

  componentDidMount() {
    const { fetchTopArtistsAction } = this.props;
    fetchTopArtistsAction();
  }

  render() {
    return (
      <Layout className="layout">
        <Content>
          <List
            bordered
            dataSource={this.props.topArtists}
            renderItem={this.renderRow}
          />
        </Content>
      </Layout>
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
