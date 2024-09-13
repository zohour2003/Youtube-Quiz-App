import React from 'react'

const Question = ({ question, options, showNextButton, onNext, onAnswer }) => {
    return (
        <div className='w-full'>
            <h2 className='font-bold text-black text-4xl text-center my-8'>{question}</h2>
            {options.map((option, index) => (
                <button
                    key={index}
                    className='w-full bg-white rounded-lg cursor-pointer font-normal py-4 my-2'
                    onClick={() => onAnswer(option)}
                >
                    {option}
                </button>
            ))}
            {showNextButton && <button className='text-center bg-green-700 text-white px-8 py-3 rounded-lg' onClick={onNext}>Next</button>}
        </div>
    )
}

export default Question