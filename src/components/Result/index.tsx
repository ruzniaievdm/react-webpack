import React from 'react'

interface ResultProps {
  onClick: () => void,
  correctCount: number,
  questionLength: number,
}

const Result = ({ onClick, correctCount, questionLength }: ResultProps) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You answered right {correctCount} of {questionLength} question</h2>
      <button onClick={onClick}>Again?</button>
    </div>
  )
}

export default Result
