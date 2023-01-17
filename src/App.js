import './App.scss';
import Question from "./components/Question";
import {answers, questions} from "./components/answers-base";
import {createContext, useState} from "react";
import ProgressBar from "./components/ProgressBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Result from "./components/Result";

export const Context = createContext()

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [interestScores, setInterestScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [abilityScores, setAbilityScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [currentSection, setCurrentSection] = useState(0)
    const [isOnPageResults, setIsOnPageResults] = useState(false)

  return (
    <div className="App" style={{height: isOnPageResults ? "min-content" : "100%"}}>
        <BrowserRouter>
            <Context.Provider value={{currentQuestion, setCurrentQuestion, userAnswers,
                setUserAnswers, interestScores, abilityScores, currentSection, setCurrentSection, setIsOnPageResults}}>
                <Routes>
                    <Route path="*/" element={<div className="App__questions">
                        <Question question={questions[currentQuestion]} answers={answers.getAnswer(currentQuestion)}/>
                        <ProgressBar currentQuestion={currentQuestion}/>
                    </div>}/>
                    <Route path="*/results" element={<Result interestScores={interestScores} abilityScores={abilityScores}/>}/>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
