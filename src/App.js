import React, { useState} from 'react';
import './App.css';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quizz from './components/Quizz';
import { QuizzContext } from './Helpers/Context';


function App() {



  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  

  return (
    <div className="App">
      <h1 className='Title'>Quiz sur les drapeaux du monde !</h1>
      
    <div className='card'>
      <QuizzContext.Provider value={{gameState, setGameState, score, setScore}}>
          {gameState==="menu" && <MainMenu/>}
          {gameState==="quizz" && <Quizz/>}
          {gameState==="endscreen" && <EndScreen/>}
      </QuizzContext.Provider>
     
      
    </div>
    <br></br>
      






    </div>
  );
}

export default App;
