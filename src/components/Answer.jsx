import {useContext} from "react";
import {Context} from "../App";
import {useNavigate} from "react-router-dom";
import {abilityAnswers, abilityIndexes, interestAnswers, interestIndexes, isInterestOrAbility} from "./answers-base";

export default function Answer({answer, clearInput, answers}){
    const {currentQuestion, setCurrentQuestion, userAnswers,
        setUserAnswers, interestScores, abilityScores, currentSection, setCurrentSection, setIsOnPageResults} = useContext(Context)
    const redirect = useNavigate()
    return (
        <button onClick={() => {
            setCurrentQuestion(currentQuestion + 1)
            setUserAnswers([...userAnswers, answer])
            clearInput('')
            const questionType = isInterestOrAbility(currentQuestion)
            if (questionType === "interest"){
                const questionId = interestIndexes.indexOf(currentQuestion);
                if (interestAnswers[questionId].map((v) => answers[v]).indexOf(answer) !== -1){
                    interestScores[currentSection]++;
                }
            }
            else if(questionType === "ability"){
                const questionId = abilityIndexes.indexOf(currentQuestion);
                if (abilityAnswers[questionId].map((v) => answers[v]).indexOf(answer) !== -1){
                    abilityScores[currentSection]++;
                }
            }
            else {
                const questionIdInterest = interestIndexes.indexOf(currentQuestion);
                const questionIdAbility = abilityIndexes.indexOf(currentQuestion);
                if (interestAnswers[questionIdInterest].map((v) => answers[v]).indexOf(answer) !== -1){
                    interestScores[currentSection]++;
                }
                if (abilityAnswers[questionIdAbility].map((v) => answers[v]).indexOf(answer) !== -1){
                    abilityScores[currentSection]++;
                }
            }
            if([14, 24, 38, 46, 58, 67, 77, 86, 95, 106, 115].indexOf(currentQuestion) !== -1){
                setCurrentSection(currentSection + 1)
            }
            if (currentQuestion === 124){
                setIsOnPageResults(true)
                redirect('/results')
            }
        }} className="answer">
            {answer}
        </button>
    )
}