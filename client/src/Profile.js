import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Layout, Button } from 'antd';

import { fetchTopArtists } from './Actions';

import 'antd/dist/antd.css';
import './App.css';

const { Content } = Layout;
const ButtonGroup = Button.Group;

const styles = {
  item: {
    backgroundColor: '#282c34',
    borderColor: '#333842',
    marginLeft: '5px'
  },
  content: {
    backgroundColor: '#282c34',
  },
  meta: {
    color: '#fff'
  },
  button: {
    backgroundColor: '#14cc60',
    border: '1px solid #09a129',
  },
  title: {
    color: '#fff',
    fontSize: '1.4rem',
    paddingLeft: '10px',
    fontWeight: 'bold',
    marginTop: '10px'
  }
};

class Profile extends Component {
  fetchTopArtist = (timeRange) => () => {
    const { fetchTopArtistsAction } = this.props;
    fetchTopArtistsAction(timeRange);
  }

  translateTimeRange = () => {
    const { timeRange } = this.props;

    switch(timeRange) {
      case 'medium_term':
        return 'last 6 months';
      case 'long_term':
        return 'all time';
      default:
        return 'last month';
    }
  }

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
        <Content style={styles.content}>
          <div className="customButtonGroup">
            <ButtonGroup>
              <Button type="primary" size="large" style={styles.button} onClick={this.fetchTopArtist()}>Last month</Button>
              <Button type="primary" size="large" style={styles.button} onClick={this.fetchTopArtist('medium_term')}>Last 6 months</Button>
              <Button type="primary" size="large" style={styles.button} onClick={this.fetchTopArtist('long_term')}>All time</Button>
            </ButtonGroup>
          </div>
          <div style={styles.title}>
            Showing your {this.translateTimeRange()} top artists
          </div>
          <List
            dataSource={this.props.topArtists}
            renderItem={this.renderRow}
          />
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  topArtists: state.user.get('topArtists'),
  timeRange: state.user.get('timeRange')
});

const mapDispatchToProps = dispatch => ({
  fetchTopArtistsAction: (timeRange) => dispatch(fetchTopArtists(timeRange))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
