import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

export type WelcomeProps = {
    isLoggedIn : boolean
}

const WelcomePage = ({isLoggedIn} : WelcomeProps) => {

    const navigate = useNavigate()

    const handleStartQuiz = () => {
        if (isLoggedIn) {
          navigate('/Home')
        } else {
            navigate('/LoginPage')
        }
      };
    
      return (
        <div>
          <h1>Welcome Page</h1>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      );
}

export default WelcomePage