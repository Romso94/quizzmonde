import React from 'react'
import { QuizzContext } from '../Helpers/Context';
import { useContext
 } from 'react';
import { Questions } from '../Helpers/Questions';

function EndScreen () {
    const {score, setScore, setGameState} = useContext(QuizzContext);
 const restartQuizz = () => {
    setScore(0);
    setGameState("menu");
 }
    return (
    <div className="EndScreen">
        <h1>Quiz Terminé</h1>
        <h3>Votre note : {score} / {Questions.length}</h3>
        <div className='next'>
        <button onClick={restartQuizz}>Recommencer</button>
        </div>
       
    </div>
  )
}

export default EndScreen;
