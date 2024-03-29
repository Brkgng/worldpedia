import { useState, useEffect } from 'react'
// API
import { fetchQuestions } from '../api/apiQuestions'
// Interface
import { IQuestion } from '../interfaces/questions'

export const useQuestionFetch = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([] as IQuestion[])
  const [currQuestion, setCurrQuestion] = useState(0)

  const getShuffledQuestions = async () => {
    // Check if local storage has questions
    // if not fetch questions
    const questionStorage = localStorage.getItem('questions')
    const questionArr = questionStorage ? JSON.parse(questionStorage) : await fetchQuestions()
    if (!questionStorage) localStorage.setItem('questions', JSON.stringify(questionArr))
    // Shuffle questions then get random 10 question
    const randomNum = Math.floor(Math.random() * 51)
    const shuffled = questionArr.sort(() => 0.5 - Math.random()).slice(randomNum, randomNum + 10)
    setQuestions(shuffled)
  }

  useEffect(() => {
    getShuffledQuestions()
  }, [])

  return { questions, currQuestion, setCurrQuestion }
}
