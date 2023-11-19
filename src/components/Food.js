// src/components/PacMan.js
import React from 'react';
import PropTypes from 'prop-types';
import './Food.css';

const Food = ({ position }) => (
  <div className="food" style={{ left: position.x, top: position.y }} />
);

Food.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default Food;
