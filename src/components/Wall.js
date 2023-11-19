// src/components/Wall.js
import React from 'react';
import PropTypes from 'prop-types';
import './Wall.css';

const Wall = ({ position, size }) => (
  <div
    className="wall"
    style={{ left: position.x, top: position.y, width: size.width, height: size.height }}
  />
);

Wall.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default Wall;
