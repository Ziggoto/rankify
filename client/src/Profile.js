import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Layout } from 'antd';

import { fetchTopArtists } from './Actions';

// import './App.css';
import 'antd/dist/antd.css';

const { Content, Sider } = Layout;

class Profile extends Component {
  renderRow = (artist) => {
    return (
      <List.Item
      >
        <img width={160} alt='logo' src={artist.images[2].url} />
        <List.Item.Meta
          title={artist.name}
          description={artist.genres.join(', ')}
        />
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
