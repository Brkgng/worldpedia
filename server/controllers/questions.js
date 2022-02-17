import questions from "../data/questions.js";

export const getQuestions = (req, res) => {
  return res.json(questions);
};
