import { createContext , useState } from "react";
import Swal from 'sweetalert2';
import { quizData } from '../Data/Quizdata';

 export type QuizContextType = {
    selectedOptions: Array<string | null>;
    setSelectedOptions: React.Dispatch<React.SetStateAction<Array<string | null>>>;
    handleSubmit: () => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => void;
  };

  type QuizProviderProps = {
    children: React.ReactNode;
    setShowQuiz: (value: boolean) => void;
    setShowTimer: (value: boolean) => void;
  };

export const QuizContext = createContext<QuizContextType>({
    selectedOptions: [],
    setSelectedOptions: () => {},
    handleSubmit: () => {},
    handleChange: () => {},
  });

  export const QuizProvider: React.FC<QuizProviderProps> = ({ setShowQuiz, children , setShowTimer}) => {
    const [selectedOptions, setSelectedOptions] = useState<Array<string | null>>(Array(quizData.length).fill(null));
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => {
      const updatedSelectedOptions = [...selectedOptions];
      
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
     
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Score - ${score}`,
        showConfirmButton: true,
      }).then(() => {setShowQuiz(false); setShowTimer(false)});
    };
  
    const quizContextValue: QuizContextType = {
      selectedOptions,
      setSelectedOptions,
      handleSubmit,
      handleChange,
    };
  
    return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>;
  };