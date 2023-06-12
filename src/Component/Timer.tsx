import { useTimer } from "react-timer-hook"
import Swal from 'sweetalert2'
import { useContext } from "react"
import { QuizContext } from "../Context/Quizcontext"



type TimerProps = {
    expiryTimestamp: Date



}

export const Timer: React.FC<TimerProps> = ({ expiryTimestamp }) => {
    const { handleSubmit } = useContext(QuizContext)

    const {
        seconds,
        minutes,
        start,
        pause
    } = useTimer({
        expiryTimestamp, onExpire: () => Swal.fire({
            title: 'Timeout',
            text: "Show your marks",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
        }).then(() => handleSubmit()

        ), autoStart: true
    });

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return (
        <div>
            <h1 style={{ backgroundColor: "gray" }}>Timer {formattedMinutes} : {formattedSeconds}</h1>

        </div>
    )
}