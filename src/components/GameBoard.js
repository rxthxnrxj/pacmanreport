// src/components/GameBoard.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PacMan from './PacMan';
import Food from './Food';
import './GameBoard.css';
import { Notification } from '@mantine/core';
import {Row, Col} from 'react-bootstrap';



const GameBoard = () => {
  const [pacManPosition, setPacManPosition] = useState({ x: 30, y: 330 });
  const [foodOne, setFoodOne] = useState(false);
  const [foodTwo, setFoodTwo] = useState(false);
  const [foodThree, setFoodThree] = useState(false);
  const [foodOneExist, setFoodOneExist] = useState(true)
  const [foodTwoExist, setFoodTwoExist] = useState(true)
  const [foodThreeExist, setFoodThreeExist] = useState(true)

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setPacManPosition((prev) => ({ ...prev, y: Math.max(prev.y - 10, 0) }));
          break;
        case 'ArrowDown':
          setPacManPosition((prev) => ({ ...prev, y: Math.min(prev.y + 10, 390) }));
          break;
        case 'ArrowLeft':
          setPacManPosition((prev) => ({ ...prev, x: Math.max(prev.x - 10, 0) }));
          break;
        case 'ArrowRight':
          setPacManPosition((prev) => ({ ...prev, x: Math.min(prev.x + 10, 390) }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  useEffect(()=>{
    console.log(pacManPosition)
    if(pacManPosition.x===90 && pacManPosition.y===90){
      setFoodOneExist(false)
      setFoodOne(true)
    }

  },[pacManPosition])


  return (
    <div className="game-board">
      <PacMan position={pacManPosition} />
      {foodOneExist && (<Food position={{ x: 100, y: 100 }}/>)}
      {foodTwoExist && (<Food position={{ x: 230, y: 320 }}/>)}
      {foodThreeExist && (<Food position={{ x: 320, y: 180 }}/>)}
      <Row>
        <Col>{foodOne && (<Notification className='notif' title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>)}</Col>
      </Row>
      
      
      
    </div>
  );
};

GameBoard.propTypes = {};

export default GameBoard;
