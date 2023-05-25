import React, { useState, createContext, useContext } from 'react';
import { quizData } from '../Data/Quizdata';
import Swal from 'sweetalert2';

export type QuizProps = {
  setShowQuiz: (value: boolean) => void;
};

type QuizProviderProps = {
  children: React.ReactNode;
  setShowQuiz: (value: boolean) => void;
};

type QuizContextType = {
  selectedOptions: Array<string | null>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Array<string | null>>>;
  handleSubmit: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => void;
};

export const QuizContext = createContext<QuizContextType>({
  selectedOptions: [],
  setSelectedOptions: () => {},
  handleSubmit: () => {},
  handleChange: () => {},
});

export const QuizProvider: React.FC<QuizProviderProps> = ({ setShowQuiz, children }) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string | null>>(Array(quizData.length).fill(null));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    console.log('handleChange called')
    updatedSelectedOptions[questionIndex] = event.target.value;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleSubmit = () => {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (selectedOptions[i] === quizData[i].option.correctanswer) {
        score++;
      }
    }
   console.log('handleSubmit called')
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Score - ${score}`,
      showConfirmButton: true,
    }).then(() => setShowQuiz(false));
  };

  const quizContextValue: QuizContextType = {
    selectedOptions,
    setSelectedOptions,
    handleSubmit,
    handleChange,
  };

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>;
};

export const Quiz: React.FC<QuizProps> = ({ setShowQuiz }) => {
  const quizContext = useContext<QuizContextType>(QuizContext);
  const { selectedOptions, setSelectedOptions, handleSubmit, handleChange } = quizContext;

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
