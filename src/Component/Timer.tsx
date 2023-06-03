import { useTimer } from "react-timer-hook"
import Swal from 'sweetalert2'
import { useContext } from "react"
import { QuizContext } from "../Context/Quizcontext"



type TimerProps = {
    expiryTimestamp: Date
    setShowQuiz : (value : boolean) => void
    setShowTimer : (value : boolean) => void
    
}

export const Timer: React.FC<TimerProps> = ({ expiryTimestamp , setShowQuiz ,setShowTimer}) => {
 const {handleSubmit} = useContext(QuizContext)

    const {
        seconds,
        minutes,
        start,
    } = useTimer({
        expiryTimestamp, onExpire: () => Swal.fire({
            title: 'Timeout',
            text: "Show your marks",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
             handleSubmit();
            }else{
                setShowQuiz(false);
                setShowTimer(false)
            }
          }), autoStart: false
    });

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return (
        <div>
            <h1 style={{ backgroundColor: "gray" }}>Timer {formattedMinutes} : {formattedSeconds}</h1>
            <button onClick={()=>{
                start();
                setShowQuiz(true)
            }} style={{boxSizing : "border-box" , backgroundColor : "green" , fontSize : 25  }}> Start Exam</button>
        </div>
    )
}