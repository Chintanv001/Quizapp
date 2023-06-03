import React, { useContext } from "react";
import { QuizContext } from "../Context/Quizcontext";
import { quizData } from "../Data/Quizdata";

export const Answer = () => {
  const { selectedOptions } = useContext(QuizContext);

  const isCorrect = (questionIndex: number) => {
    const selectedOption = selectedOptions[questionIndex];
    const correctAnswer = quizData[questionIndex].option.correctanswer;
    return selectedOption === correctAnswer;
  };

  const isOptionSelected = (questionIndex: number, option: string) => {
    const selectedOption = selectedOptions[questionIndex];
    return selectedOption === option;
  };

  return (
    <div>
      {quizData.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3 style={{ display: 'flex', alignItems: 'center', marginLeft: 60 }}>
            {`${questionIndex + 1})`} {question.question}
          </h3>
          {question.option.optionlist.map((option, optionIndex) => {


            const optionStyle = {
              display: 'flex',
              alignItems: 'center',
              marginLeft: 60,
              backgroundColor: isCorrect(questionIndex) && option === quizData[questionIndex].option.correctanswer
                ? 'green'
                : isOptionSelected(questionIndex, option)
                  ? 'red'
                  : quizData[questionIndex].option.correctanswer === option
                    ? 'yellow'
                    : '',
              paddingLeft: 10,
              borderRadius: 5,
              marginTop: 5,
            };
            return (
              <div key={optionIndex}>


                <li style={optionStyle}>{option}</li>

              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
