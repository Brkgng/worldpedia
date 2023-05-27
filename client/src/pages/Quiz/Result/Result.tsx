import React, { useContext } from 'react'
// Context
import { QuizContext } from '../../../helpers/Contexts'
// Styles
import { Button } from '../Playing/Playing.styled'

const Result: React.FC = () => {
  const { score, setScore, setGameState } = useContext(QuizContext)

  const newGame = () => {
    setScore(0)
    setGameState('playing')
  }

  return (
    <>
      <h1>Sonuç: {score}/10</h1>
      <Button onClick={newGame}>Yeniden Oyna</Button>
    </>
  )
}

export default Result
