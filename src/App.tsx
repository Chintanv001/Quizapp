import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Quiz } from './Component/Quiz';
import { Timer } from './Component/Timer';
import { QuizProvider } from './Context/Quizcontext';
import { Answer } from './Component/Answer';

function App() {
  const [showQuiz , setShowQuiz] = useState<boolean>(false)
  const [showTimer , setShowTimer] = useState<boolean>(true)
  
  const time = new Date()
  time.setSeconds(time.getSeconds() + 20);
  return (
     
    <div className="App">
      
      <><QuizProvider setShowTimer={setShowTimer} setShowQuiz={setShowQuiz}>
      {showTimer &&
      <Timer setShowTimer={setShowTimer} setShowQuiz={setShowQuiz} expiryTimestamp={time} />
      }
      {showQuiz &&
      <Quiz setShowQuiz={setShowQuiz} setShowTimer = {setShowTimer}  />
      }
      {
        !showQuiz && !showTimer && <Answer/>
      }
      </QuizProvider>
      </>
    </div>
  );
}

export default App;
