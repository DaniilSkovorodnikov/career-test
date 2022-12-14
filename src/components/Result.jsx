import {abilityResults, categories, getResults, interestResults} from "./answers-base";

export default function Result({interestScores, abilityScores}){
    return (
        <div className="results">
            <h1 className="results__title">Результаты</h1>
            {categories.map((v, i) => <div className="result" key={i}>
                <h2 className="result__category">{v}</h2>
                <h3>Интересы:</h3>
                <p className="result__interests">{getResults(i, interestScores[i], true)}</p>
                <h3>Способности:</h3>
                <p className="result__abilities">{getResults(i, abilityScores[i], false)}</p>
            </div>)}
        </div>
    )
}