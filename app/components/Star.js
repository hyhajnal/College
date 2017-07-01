import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class StarRating extends Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    maxStars: React.PropTypes.number,
    rating: React.PropTypes.number,
    onStarChange: React.PropTypes.func,
    starSize: React.PropTypes.number,
  }

  static defaultProps = {
    disabled: true,
    maxStars: 5,
    rating: 0,
  }

  constructor(props) {
    super(props);
    const roundedRating = (Math.round(this.props.rating * 2) / 2);
    this.state = {
      maxStars: this.props.maxStars,
      rating: roundedRating
    };
  }

  pressStarButton(rating) {
    if (!this.props.disabled) {
      if (rating !== this.state.rating) {
        if (this.props.onStarChange) {
          this.props.onStarChange(rating);
        }
        this.setState({
          rating
        });
      }
    }
  }

  render() {
    const starsLeft = this.state.rating;
    const starButtons = [];
    for (let i = 0; i < this.state.maxStars; i += 1) {
      const starColor = (i + 1) <= starsLeft ? styles.selectedColor : styles.unSelectedColor;
      const starStr = '\u2605';
      starButtons.push(
        <TouchableOpacity
          activeOpacity={0.20}
          key={i + 1}
          onPress={() => this.pressStarButton(i + 1)}
        >
          <Text style={[starColor, { fontSize: this.props.starSize }]}>{starStr}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={[this.props.style, styles.starRatingContainer]}>
        {starButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  selectedColor: {
    color: '#ffce3d'
  },
  unSelectedColor: {
    color: '#999999'
  }
});
