import React, {useState, useContext} from 'react';
import {Questions} from "../Helpers/Questions";
import { QuizzContext } from '../Helpers/Context';
import {useRef} from 'react';
import { createPortal } from 'react-dom';


 function Quizz() {

    const { score,setScore,  setGameState } = useContext(QuizzContext);
    const inputRef = useRef(null);
    var Answer = "";
    var res = "";
    
    const [currQuestion, setCurrquestion] = useState(0);
    const [response, setResponse]=useState("");
    

   
    
    
    const nextQuestion = () => {
        Answer = response;
        res = Answer.toLowerCase();
        console.log(res);
       
        
        if (response == ""){
            return;
        }
        else{
            setResponse("");
           
            if (res == Questions[currQuestion].answer){
                console.log("Bonne réponse");
                setScore(score + 1);
                
            };
            document.getElementById("myInput").value="";
            setCurrquestion(currQuestion + 1);

            
            
        };
        
        
    }

    const handleChange = (event) => {
        setResponse(event.target.value);
      };
   
      const  finirQuizz = () => {
        if (response == ""){
            return;
        }else{
            nextQuestion();
        }
        
        setGameState("endscreen");
      }

   

  return (
    <div className="Quizz">
        <h1>A quel pays appartient ce drapeau ?</h1>
        <br></br>
        <img className='drapeau' src={Questions[currQuestion].prompt} />
        <br></br>
        <br></br>
        <input type="text" className='reponse' placeholder="Entrez le nom du pays" name="reponse" onChange={handleChange} id='myInput' />
        <br></br>
        <br></br>
        
        {currQuestion == Questions.length -1 ? (
            <button className='valid' onClick={finirQuizz}> Finir le quizz</button>
         ):
         (
            <button className='valid' onClick={nextQuestion}>Valider</button>
         )}
        
        
    </div>
  )
}

export default Quizz;
