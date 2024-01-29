import React  from 'react';

const Answer = ({
                    answerText,
                    onSelectAnswer,
                    index,
                    currentAnswer,
                    correctAnswer
                }) => {

    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
    const disabledClass = currentAnswer ? 'disabled-answer opacity-50 cursor-not-allowed' : '';

    return (
        <div className={`rounded-md answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
             onClick={() => onSelectAnswer(answerText)}>
            <div className={'answer-letter'}>{letterMapping[index]}</div>
            <div className={'answer-text'}>
                {answerText}
            </div>
        </div>
    );
};

export default Answer