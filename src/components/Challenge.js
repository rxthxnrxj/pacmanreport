// src/components/PacMan.js
import React from 'react';
import PropTypes from 'prop-types';
import './Challenge.css';

const Challenge = ({ position }) => (
  <div className="challenge" style={{ left: position.x, top: position.y }} />
);

Challenge.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default Challenge;
