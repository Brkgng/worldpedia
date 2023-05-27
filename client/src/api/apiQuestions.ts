import axios from 'axios'

const apiEndpoint = 'http://localhost:4000/questions'

export const fetchQuestions = async () => {
  return await (
    await axios(apiEndpoint)
  ).data
}
