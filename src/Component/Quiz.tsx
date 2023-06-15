import React, { useState, createContext, useContext } from 'react';
import { quizData } from '../Data/Quizdata';
import { QuizContext } from '../Context/Quizcontext';
import { QuizContextType } from '../Context/Quizcontext';




export const Quiz = () => {
  const quizContext = useContext<QuizContextType>(QuizContext);
  const { selectedOptions, setSelectedOptions, handleSubmit, handleChange  } = quizContext;

  return (
    <div>
      {quizData.map((question, index) => (
        <div key={index}>
          <h3 style={{ display: 'flex', alignItems: 'center', marginLeft: 60 }}>{`${index + 1})`} {question.question}</h3>
          {question.option.optionlist.map((option: string, optionIndex: number) => (
            <div key={optionIndex}>
              <label style={{ display: 'flex', alignItems: 'center', marginLeft: 60 }}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOptions[index] === option}
                  onChange={(event) => handleChange(event , index)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button style={{ boxSizing: 'border-box', backgroundColor: 'green', fontSize: 25 , marginTop : 20 , marginBottom : 60 }} onClick={handleSubmit}>
        Submit answer
      </button>
    </div>
  );
};
