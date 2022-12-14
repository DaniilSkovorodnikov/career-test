import Answer from "./Answer";
import {useState} from "react";

export default function Question({question, answers}){
    const [inputAnswer, setInputAnswer] = useState('')

    return (
        <div className="question">
            <p className="question__text">{question}</p>
            <ul className="question__answers">
                {answers.length !== 1 ? answers.map((v, i) => <Answer answer={v} clearInput={setInputAnswer} answers={answers} key={i}/>) :
                    <div className="question__answers">
                        <input value={inputAnswer} onChange={(e) => setInputAnswer(e.target.value)}/>
                        <Answer answer={inputAnswer} clearInput={setInputAnswer} answers={answers}/>
                    </div>}
            </ul>
        </div>
    )
}