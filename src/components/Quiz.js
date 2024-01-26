import React  from 'react';
import {useContext, useEffect} from "react";
import Question from './Question'
import {QuizContext} from "../contexts/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const apiUrl = 'https://opentdb.com/api.php?amount=50&category=10&type=multiple&encode=url3986';
    useEffect(() => {

        if(quizState.questions.length > 0) {
            return;
        }

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: "LOADED_QUESTIONS",
                    payload: data.results
                });
            });

    });
    return (
        <div className={'quiz container'}>
            {quizState.showResults && (
                <div className={'results'}>
                    <div className={'congratulations'}>Congratulations</div>
                    <div className={'results-info'}>
                        <div>You have completed the quiz.</div>
                        <div> You've got {quizState.correctAnswersCount} of {quizState.questions.length} correct</div>
                    </div>
                    <div className={'next-button'}
                         onClick={() => dispatch({type: "RESTART"})}>Restart
                    </div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length > 0 && (
                <div>
                    <div className={'score'}>
                        Question {quizState.currentQuestionIndex + 1}/
                        {quizState.questions.length}
                    </div>
                    <Question/>
                    <div className={'next-button'} onClick={() => dispatch({type: 'NEXT_QUESTION'})}>
                        Next question
                    </div>
                </div>
            )}
        </div>
    )
};

export default Quiz