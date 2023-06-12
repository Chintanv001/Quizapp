import React, { useState  } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom'
import WelcomePage from './Component/WelcomePage';
import LoginPage from './Component/LoginPage';
import { QuizProvider } from './Context/Quizcontext';
import { Answer } from './Component/Answer';
import Home from './Component/Home';

function App() {
  
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  
  return (

    <div className="App">

      <>
      <BrowserRouter>
      <QuizProvider >
        
      
      <Routes>
          <Route path="/" element={<Navigate to="/WelcomePage" />} />
          <Route path="/WelcomePage" element={<WelcomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/LoginPage" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/Home" element={isLoggedIn ? <Home/> : <Navigate to="/LoginPage" />} />
          <Route path="Answer" element={  <Answer /> }/>
        </Routes>
      
      </QuizProvider>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
