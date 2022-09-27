import React from 'react'
import { Question } from '../../models'

interface GameProps {
  percentage: number,
  question: Question,
  onClick: (idx: number) => void,
}

function Game({ percentage, question, onClick }: GameProps) {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <div className="question">
        <h1 className="title">{question.title}</h1>
        <ul className="variant-list">
          {question.variants.map((variant, idx) => (
            <li key={idx} className="variant-item" onClick={() => onClick(idx)}>
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Game
