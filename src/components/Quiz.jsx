import React, { useEffect, useState } from "react";
import { data } from "../data/Data";
// components
import Result from "./Result";
import Question from "./Question";
import toast from "react-hot-toast";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [timer, setTimer] = useState(30);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === data[currentQuestion].answer) {
            toast.success("Good Job");
            setCurrentQuestion(currentQuestion + 1);
            setScore(score + 1);
        } else {
            toast.error(selectedOption);
        }
        setShowNextButton(true);
    };
    const handleNext = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < data.length) {
            setCurrentQuestion(nextQuestion);
        }

        if (nextQuestion > data.length) {
            setShowResult(true);
            return;
        }
        setShowNextButton(true);
        setTimer(30);
    };

    useEffect(() => {
        if (timer === 0) {
            handleNext();
        }
        const timerId = setTimeout(() => {
            setTimer(timer - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timer]);

    return (
        <div className="quiz w-full">
            <div className="quiz-head flex justify-between items-center w-full">
                <div className="question-number bg-orange-600 text-white font-thin rounded-lg px-8 py-3">
                    <h2>
                        Questions: {currentQuestion + 1} / {data.length}
                    </h2>
                </div>
                <div className="timer bg-green-600 text-white px-8 py-3 rounded-lg font-thin">
                    Time Left : {timer} seconds
                </div>
            </div>

            {showResult && <Result score={score} totalQuestion={data.length} />}

            <Question
                question={data[currentQuestion]?.question}
                options={data[currentQuestion]?.options}
                onAnswer={handleAnswer}
                onNext={handleNext}
                showNextButton={showNextButton}
            />
        </div>
    );
};

export default Quiz;
