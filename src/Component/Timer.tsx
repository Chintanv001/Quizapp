import { useTimer } from "react-timer-hook"
import Swal from 'sweetalert2'
import { useContext } from "react"
import { QuizContext } from "./Quiz"



type TimerProps = {
    expiryTimestamp: Date
    setShowQuiz : (value : boolean) => void
    
}

export const Timer: React.FC<TimerProps> = ({ expiryTimestamp , setShowQuiz}) => {
 const {handleSubmit} = useContext(QuizContext)

    const {
        seconds,
        minutes,
        start,
    } = useTimer({
        expiryTimestamp, onExpire: () => Swal.fire({
            title: 'Timeout',
            text: "Do you Want to show your marks?",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
             handleSubmit();
            }else{
                setShowQuiz(false)
            }
          }), autoStart: false
    });
    return (
        <div>
            <h1 style={{ backgroundColor: "gray" }}>Timer {minutes} : {seconds}</h1>
            <button onClick={start} style={{boxSizing : "border-box" , backgroundColor : "green" , fontSize : 25  }}> Start Exam</button>
        </div>
    )
}