import React, { Component, PropTypes } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Button from '../components/Button';

class ItemWrap extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    footer: PropTypes.bool,
    header: PropTypes.bool
  }

  static defaultProps = {
    header: true
  }
  render() {
    return (
      <View style={styles.container} >
        {
          this.props.header ?
            <View style={styles.header}>
              <Text style={styles.title} >
                <Icon name={this.props.icon} size={20} color="#555" />
                &nbsp;&nbsp;{this.props.title}
              </Text>
              <Text style={styles.more}>
                更多
                <Icon name="chevron-small-right" size={20} color="#555" />
              </Text>
            </View> : null
        }
        <View style={styles.body}>
          {React.Children.map(this.props.children, child =>
            child
          )}
        </View>
        {
          this.props.footer ?
            <View style={styles.footer}>
              <Button
                containerStyle={styles.btn}
                style={styles.btnText}
              >
                换一波
                <SimpleLineIcons
                  name="refresh"
                  size={16}
                  style={{ fontWeight: 'bold' }}
                />
              </Button>
            </View>
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  more: {
    position: 'absolute',
    right: 5,
    alignItems: 'center'
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  body: {
    marginVertical: 10
  },
  title: {
    fontSize: 16,
    marginHorizontal: 5,
    minWidth: 60,
    textAlign: 'left'
  },
  btn: {
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'green',
    width: 80
  },
  btnText: {
    fontSize: 16,
    color: 'green'
  }
});

export default ItemWrap;
