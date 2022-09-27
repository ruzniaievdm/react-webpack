import React, { useState } from 'react'
import Game from './components/Game'
import Result from './components/Result'
import { questionsList } from './questions'
import './assets/scss/index.scss'

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questionsList[step]
  const percentage = Math.round((step / questionsList.length) * 100)

  const handleVariantClick = (idx: number) => {
    if (question.correct === idx) {
      setCorrect(correct + 1)
    }
    setStep(step + 1)
  }

  function handleAgain (){
    setStep(0)
    setCorrect(0)
  }
  
  return (
    <div className="App">
      {step < questionsList.length ? (
        <Game
          percentage={percentage}
          question={question}
          onClick={handleVariantClick}
        />
      ) : (
        <Result
          correctCount={correct}
          questionLength={questionsList.length}
          onClick={handleAgain}
        />
      )}
    </div>
  )
}

export default App
