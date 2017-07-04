
import React, { PropTypes, Component } from 'react';
import { Image, ViewPropTypes } from 'react-native';

const propTypes = {
  width: PropTypes.number,
  source: PropTypes.object,
  style: ViewPropTypes.style,
};

class ImageFit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    const width = this.props.width;
    const height = width / this.props.ratio;
    this.setState({ width, height });
  }

  render() {
    const { source, style } = this.props;
    return (
      <Image
        style={style}
        source={source}
        width={this.state.width}
        height={this.state.height}
      />
    );
  }
}

ImageFit.propTypes = propTypes;

export default ImageFit;
