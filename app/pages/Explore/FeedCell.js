import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from '../../components/Button';

import { width } from '../../utils/ToolUtil';

const margin = 20;
const imgInterval = 5;
const avatar = require('../../img/a1.jpg');
const p1 = require('../../img/pic.jpg');
const p2 = require('../../img/pic1.jpg');
const p3 = require('../../img/pic4.jpg');
const p4 = require('../../img/pic5.jpg');
const p5 = require('../../img/pic6.jpg');


class FeedCell extends React.Component {

  renderFeedImages() {
    const images = [p1, p2, p3, p4, p5];
    const imagesView = [];
    for (let i = 0; i < images.length - 1; i++) {
      imagesView.push(<TouchableOpacity key={i}>
        <Image
          source={images[i]}
          style={styles.feedContentImage}
        />
      </TouchableOpacity>);
    }
    return imagesView;
  }


  renderCommentList() {
    const tags = ['电视剧', '湖南卫视', '楚乔传'];
    return (
      <Grid>
        <Row>
          <Col>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tagsContainer}
            >
              {
                tags.map(tag => (<TouchableOpacity key={tag}>
                  <Text style={{ fontSize: 16, color: '#9B9B9B', marginRight: 5 }}>{tag}</Text>
                </TouchableOpacity>))
              }
            </ScrollView>
          </Col>
          <Col style={{ alignItems: 'flex-end', marginRight: margin }}>
            <Row style={{ alignItems: 'center' }}>
              <Icon name="message" size={16} style={{ marginLeft: 10 }} />
              <Text>&nbsp;54</Text>
              <Icon name="heart" size={16} style={{ marginLeft: 10 }} />
              <Text>&nbsp;73</Text>
            </Row>
          </Col>
        </Row>
        <View style={{ backgroundColor: '#eee', margin, padding: 10 }}>
          <Text>
            <Text style={styles.userComment}>宇文月</Text>&nbsp;回复&nbsp;
            <Text style={styles.userComment}>烟熏</Text>&nbsp;:&nbsp;星儿
          </Text>
          <Text>
            <Text style={styles.userComment}>宇文怀</Text>&nbsp;:&nbsp;什么
          </Text>
        </View>
      </Grid>
    );
  }

  renderFeedContent() {
    return (
      <View>
        <Text style={styles.feedContentText}>今日楚大大上线</Text>
        <View style={styles.feedContentImages}>
          {this.renderFeedImages()}
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.feedHeader}>
            <View style={styles.feedUserInfo}>
              <TouchableOpacity>
                <Image
                  source={avatar}
                  style={styles.avatar}
                />
              </TouchableOpacity>
              <View style={styles.userText}>
                <Text style={styles.feedUserName}>楚乔</Text>
                <Text style={styles.feedTime}>2017-7-1</Text>
              </View>
            </View>
            <Button style={styles.followBtn}>+关注</Button>
          </View>
          <View style={styles.feedContent}>
            {this.renderFeedContent()}
          </View>
          {this.renderCommentList()}

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 0,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: '#EEEEEE',
  },
  feedHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin,
  },
  followBtn: {
    color: 'green'
  },
  userText: {
    marginLeft: 20
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  feedUserInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  feedUserName: {
    marginTop: 3,
    fontSize: 16,
    color: '#00B5AD',
    lineHeight: 16,
  },
  feedTime: {
    fontSize: 12,
    color: '#7B7C84',
    lineHeight: 12,
    marginTop: 5,
  },

  feedContent: {
    flex: 1,
  },
  feedContentText: {
    flex: 1,
    textAlign: 'justify',
    margin,
    marginTop: -10,
    fontSize: 16,
    color: '#333333',
    lineHeight: 20,
  },
  feedContentSingleImage: {
    flex: 1,
    height: 170,
  },
  feedContentImages: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: margin,
  },
  feedContentImage: {
    width: (width - margin * 2 - imgInterval * 2) / 3,
    height: (width - margin * 2 - imgInterval * 2) / 3,
    marginBottom: imgInterval,
    marginRight: imgInterval,
  },
  feedActions: {
    // borderWidth: 1,
    // borderTopColor: '#EEEEEE',
    flex: 1,
    flexDirection: 'row',
    // marginTop: 15,
    marginRight: margin,
    marginBottom: 5,
  },
  feedActionComment: {
    width: 40,
    padding: 5,
    marginRight: 5,
  },
  feedActionLike: {
    width: 40,
    padding: 5,
  },
  thumbnail: {
    flex: 1,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  listView: {
    paddingTop: 70,
    backgroundColor: 'white',
  },
  tagsContainer: {
    flex: 2,
    marginLeft: 20,
    marginTop: 10,
  },
  userComment: {
    color: '#449ee6',
  }
});

export default FeedCell;
