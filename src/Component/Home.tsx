import React from 'react'
import { Timer } from './Timer'
import { Quiz } from './Quiz'
import { QuizProviderProps } from '../Context/Quizcontext'

const Home = ({ children}:QuizProviderProps) => {
    const time = new Date()
  time.setSeconds(time.getSeconds() + 20);
  return (
    <div>
        <Timer expiryTimestamp={time} />
        <Quiz />
    </div>
  )
}

export default Home