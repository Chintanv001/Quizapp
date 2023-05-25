import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Quiz, QuizProvider } from './Component/Quiz';
import { Timer } from './Component/Timer';
import { ThankYou } from './Component/ThankYou';





function App() {
  const [showQuiz , setShowQuiz] = useState<boolean>(true)
  const time = new Date()
  time.setSeconds(time.getSeconds() + 60);
  return (
     
    <div className="App">
      
      {showQuiz ? (<><QuizProvider setShowQuiz={setShowQuiz}>
      <Timer setShowQuiz={setShowQuiz} expiryTimestamp={time} />
      <Quiz setShowQuiz={setShowQuiz} />
      </QuizProvider>
      </>) : <ThankYou/>}
    </div>
  );
}

export default App;
