// src/App.js
import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';
import { Notification } from '@mantine/core';
import Food from './components/Food';
import Challenge from './components/Challenge';
import PacMan from './components/PacMan';
import {Row, Col} from 'react-bootstrap'


const App = () => {
  const [pacManPosition, setPacManPosition] = useState({ x: 30, y: 330 });
  const [foodOne, setFoodOne] = useState(false);
  const [foodTwo, setFoodTwo] = useState(false);
  const [foodThree, setFoodThree] = useState(false);
  const [challengeOne, setChallengeOne] = useState(false);
  const [challengeTwo, setChallengeTwo] = useState(false);
  const [challengeOneExists, setChallengeOneExists] = useState(true);
  const [challengeTwoExists, setChallengeTwoExists] = useState(true);
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
      setFoodTwo(true)
      setFoodOne(false)
      setFoodThree(false)
      setChallengeOne(false)
      setChallengeTwo(false)
    }
    if(pacManPosition.x===220 && pacManPosition.y===310){
      setFoodTwoExist(false)
      setFoodTwo(false)
      setFoodOne(true)
      setFoodThree(false)
      setChallengeOne(false)
      setChallengeTwo(false)
    }
    if(pacManPosition.x===310 && pacManPosition.y===170){
      setFoodThreeExist(false)
      setFoodTwo(false)
      setFoodOne(false)
      setFoodThree(true)
      setChallengeOne(false)
      setChallengeTwo(false)
    }
    if(pacManPosition.x===150 && pacManPosition.y===220){
      setChallengeOneExists(false)
      setFoodTwo(false)
      setFoodOne(false)
      setFoodThree(false)
      setChallengeOne(true)
      setChallengeTwo(false)
    }
    if(pacManPosition.x===310 && pacManPosition.y===30){
      setChallengeTwoExists(false)
      setFoodTwo(false)
      setFoodOne(false)
      setFoodThree(false)
      setChallengeOne(false)
      setChallengeTwo(true)
    }
    

  },[pacManPosition])

  return (
    <div className="app">
      <h1 className='topic'>Pac-Man Game</h1>
      <Row className='mt-3'>
      {foodOne && (<Row>
        <Col xl={4} className='card'>
          <h5 className='cardTitle'>Week 5</h5>
          <p className='cardText m-0'>Implemented DFS, BFS, UCS and A* to help Pac-Man find a piece of food, just like you did now *wink*</p>
        </Col>
      </Row>)}
      {foodTwo && (<Row>
        <Col xl={4} className='card'>
          <h5 className='cardTitle'>Week 6</h5>
          <p className='cardText m-0'>Implemented BFS, a non-trivial heuristic for A* to find all CORNERS in the game</p>
        </Col>
      </Row>)}
      {foodThree && (<Row>
        <Col xl={4} className='card'>
        <h5 className='cardTitle'>Week 7</h5>
        <p className='cardText m-0'>Implemented A* search in order to eat all the dots on map</p>
        </Col>
      </Row>)}
      {challengeOne && (<Row>
        <Col xl={4} className='cardChallenge'>
        <h5 className='cardTitle'>A* search algorithm</h5>
        <p className='cardTextChallenge m-0'>Succeeded in implementing A* search algorithm with a non-trivial corners' heuristic and gained a deeper understanding about the fringe and improved the efficiency</p>
        </Col>
      </Row>)}
      {challengeTwo && (<Row>
        <Col xl={4} className='cardChallenge'><h5 className='cardTitle'>Expanded Nodes - Great (TA Comment)</h5>
        <p className='cardTextChallenge m-0'>For both BFS and Corners' Problem: Heuristic with A* were great - TA quote, we state </p></Col>
        
      </Row>)}
      </Row>
      
      
      <Row>
        <Col className="game-board"><PacMan position={pacManPosition} />
      {foodOneExist && (<Food position={{ x: 100, y: 100 }}/>)}
      {foodTwoExist && (<Food position={{ x: 230, y: 320 }}/>)}
      {foodThreeExist && (<Food position={{ x: 320, y: 180 }}/>)}
      {challengeOneExists && (<Challenge position={{ x: 150, y: 220 }}/>)}
      {challengeTwoExists && (<Challenge position={{ x: 310, y: 30 }}/>)}
      </Col>
      </Row>

      <div style={{marginTop:'1rem'}}>
      <p className='cardTextChallenge m-0'>By PacMan and PacWoman</p>
      </div>
      
      
      
    </div>
  );
};

App.propTypes = {};

export default App;