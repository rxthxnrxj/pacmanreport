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
  const [teamDynamic, setTeamDynamic] = useState(false)
  const [boardView, setBoardView] = useState(true)

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
    
    if(!foodOneExist & !foodTwoExist & !foodThreeExist & !challengeOneExists & !challengeTwoExists){
      setTeamDynamic(true);
      setFoodTwo(false)
      setFoodOne(false)
      setFoodThree(false)
      setChallengeOne(false)
      setChallengeTwo(false)
      setBoardView(false)
    }

  },[pacManPosition])

  return (
    <div className="app">
      <h1 className='topic' style={{margin:'0'}}>Pac-Man Game</h1>
      <h6 style={{color:'white'}}>CS205 - AI - Project Report <br/><span style={{fontSize:'70%'}}>( Use arrows to control the PacMan )</span></h6>
      <Row className='mt-3'>
      {foodOne && (<Row>
        <Col xl={4} className='card'>
          <h5 className='cardTitle'><i class="fa-solid fa-calendar-days"></i> Week 5</h5>
          <p className='cardText m-0'>Implemented DFS, BFS, UCS and A* to help Pac-Man find a piece of food <i class="fa-solid fa-utensils"></i> - just like you did now <i class="fa-solid fa-face-grin-wink"></i></p>
        </Col>
      </Row>)}
      {teamDynamic && (<Row>
        <Col xl={4} className='cardTeamDynamic'>
          <h5 className='cardTitle'><i class="fa-solid fa-people-group"></i> Team Dynamic</h5>
          <p className='cardText m-0' style={{color:'#f7f7f7'}}><i class="fa-solid fa-hand-fist"></i> Strong, we would say <i class="fa-solid fa-face-grin-wide"></i> <br/> <i class="fa-solid fa-ellipsis"></i><br/>We had difference in opinions when discussing or computing the various optimal paths. However, with effective team collaboration, open discussions and after a lot of brainstorming sessions we succeed in overcoming these challenges<br/> <i class="fa-solid fa-ellipsis"></i> <br/> We even made a friendly bet on who could find the most optimal solution (which obviously the 'PacMan' won) <br/> <i class="fa-solid fa-sack-dollar fa-bounce"></i></p>
        </Col>
      </Row>)}
      {foodTwo && (<Row>
        <Col xl={4} className='card'>
          <h5 className='cardTitle'><i class="fa-solid fa-calendar-days"></i> Week 6</h5>
          <p className='cardText m-0'>Implemented BFS, a non-trivial heuristic for A* to find all CORNERS in the game</p>
        </Col>
      </Row>)}
      {foodThree && (<Row>
        <Col xl={4} className='card'>
        <h5 className='cardTitle'><i class="fa-solid fa-calendar-days"></i> Week 7</h5>
        <p className='cardText m-0'>Implemented A* search in order to eat all the dots on map</p>
        </Col>
      </Row>)}
      {challengeOne && (<Row>
        <Col xl={4} className='cardChallenge'>
        <h5 className='cardTitle'><i class="fa-solid fa-star"></i> A* search algorithm <i class="fa-solid fa-star"></i></h5>
        <p className='cardTextChallenge m-0'>Succeeded <i class="fa-solid fa-champagne-glasses"></i> in implementing A* search algorithm with a non-trivial corners' heuristic and gained a deeper understanding about the fringe and improved the efficiency</p>
        </Col>
      </Row>)}
      {challengeTwo && (<Row>
        <Col xl={4} className='cardChallenge'><h5 className='cardTitle'><i class="fa-solid fa-star"></i> Expanded Nodes - Great (TA Comment) <i class="fa-solid fa-star"></i></h5>
        <p className='cardTextChallenge m-0'>For both BFS and Corners' Problem: Heuristic with A* were great <i class="fa-solid fa-champagne-glasses"></i> - TA quote, we state </p></Col>
        
      </Row>)}

      </Row>
      
      {boardView && (
        <Row>
        <Col className="game-board"><PacMan position={pacManPosition} />
      {foodOneExist && (<Food position={{ x: 100, y: 100 }}/>)}
      {foodTwoExist && (<Food position={{ x: 230, y: 320 }}/>)}
      {foodThreeExist && (<Food position={{ x: 320, y: 180 }}/>)}
      {challengeOneExists && (<Challenge position={{ x: 150, y: 220 }}/>)}
      {challengeTwoExists && (<Challenge position={{ x: 310, y: 30 }}/>)}
      </Col>
      </Row>
      )}
      

      <div style={{marginTop:'1rem'}}>
      <p className='cardTextChallenge m-0'>By PacMan and PacWoman</p>
      </div>
      
      
      
    </div>
  );
};

App.propTypes = {};

export default App;
