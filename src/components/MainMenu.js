import React from "react";
import { useContext } from "react";
import { QuizzContext } from "../Helpers/Context";
import "../App.css";  

 function MainMenu() {
    const {gameState, setGameState} = useContext(QuizzContext);
  return (
    <div className="Menu">
      <div className="next">
        <button  onClick={() => { setGameState("quizz")}}>
            Commencer le quiz !
        </button>
        </div>
        
    </div>
  )
}

export default MainMenu;