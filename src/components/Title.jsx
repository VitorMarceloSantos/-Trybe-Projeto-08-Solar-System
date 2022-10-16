import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../css/Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}
Title.defaultProps = {
  headline: '',
};
Title.propTypes = {
  headline: propTypes.string,
};

export default Title;
