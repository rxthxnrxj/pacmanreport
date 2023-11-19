// src/components/PacMan.js
import React from 'react';
import PropTypes from 'prop-types';
import './PacMan.css';

const PacMan = ({ position }) => (
  <div className="pac-man" style={{ left: position.x, top: position.y }} />
);

PacMan.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default PacMan;
