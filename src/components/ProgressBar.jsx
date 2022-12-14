import {questions} from "./answers-base";

export default function ProgressBar({currentQuestion}){
    return(
        <div className="progress">
            <p className="progress__value">{currentQuestion + 1}/{questions.length}</p>
            <div className="progress__bar">
                <div className="progress__line" style={{width: `${(currentQuestion + 1)* 100 / questions.length }%`}}></div>
            </div>
        </div>
    )
}