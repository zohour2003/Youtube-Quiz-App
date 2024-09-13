import React from 'react'

const Result = ({ score, totalQuestion }) => {
    return (
        <div>

            <h2>Quiz Complete</h2>

            <p>your score is {score} out of {totalQuestion}</p>

        </div>
    )
}

export default Result