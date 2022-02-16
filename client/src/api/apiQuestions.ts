import axios from 'axios';

const apiEndpoint = 'http://192.168.1.21:4000/questions';

export const fetchQuestions = async () => {
  return await (
    await axios(apiEndpoint)
  ).data;
};
