import React, { useState, useContext } from 'react';
// Hooks
import { useQuestionFetch } from '../../../hooks/useQuestionFetch';
// Context
import { QuizContext } from '../../../helpers/Contexts';
// Styles
import { Title, Option, Options, Button, Bold, QuestionInfo } from './Playing.styled';
import { Content } from '../Quiz.styled';

const Playing: React.FC = () => {
  const { setGameState, setScore } = useContext(QuizContext);
  const { questions, currQuestion, setCurrQuestion } = useQuestionFetch();
  const [disableOption, setDisableOption] = useState({ A: false, B: false, C: false, D: false });
  const [selected, setSelected] = useState({ A: '', B: '', C: '', D: '' });

  const checkAnswer = (selectedAnswer: string, option: string) => {
    if (questions[currQuestion].answer === selectedAnswer) {
      // Add points if the user has answered the question correctly at the first time
      if (Object.values(disableOption).every((option) => option === false))
        setScore((prev) => prev + 1);
      setSelected((prev) => ({ ...prev, [option]: 'correct' }));
      setDisableOption({ A: true, B: true, C: true, D: true });
    } else {
      setSelected((prev) => ({ ...prev, [option]: 'wrong' }));
      setDisableOption((prev) => ({ ...prev, [option]: true }));
    }
  };

  const nextQuestion = () => {
    setCurrQuestion((prev) => prev + 1);
    setSelected({ A: '', B: '', C: '', D: '' });
    setDisableOption({ A: false, B: false, C: false, D: false });
  };

  const showResults = () => {
    setGameState('result');
  };

  return (
    <>
      {questions.length > 0 && (
        <>
          <Content>
            <QuestionInfo>{currQuestion + 1}/10</QuestionInfo>
            <Title>{questions[currQuestion].country}</Title>
            <h2>Bu ülkenin başkenti neresidir?</h2>
            <Options>
              <Option
                onClick={() => checkAnswer(questions[currQuestion].optionA, 'A')}
                selected={selected.A}
                disabled={disableOption.A}
              >
                <Bold>A)</Bold> {questions[currQuestion].optionA}
              </Option>
              <Option
                onClick={() => checkAnswer(questions[currQuestion].optionB, 'B')}
                selected={selected.B}
                disabled={disableOption.B}
              >
                <Bold>B)</Bold> {questions[currQuestion].optionB}
              </Option>
              <Option
                onClick={() => checkAnswer(questions[currQuestion].optionC, 'C')}
                selected={selected.C}
                disabled={disableOption.C}
              >
                <Bold>C)</Bold> {questions[currQuestion].optionC}
              </Option>
              <Option
                onClick={() => checkAnswer(questions[currQuestion].optionD, 'D')}
                selected={selected.D}
                disabled={disableOption.D}
              >
                <Bold>D)</Bold> {questions[currQuestion].optionD}
              </Option>
            </Options>
          </Content>
          {/* Show the next question only when user gives the correct answer */}
          {Object.values(selected).some((option) => option === 'correct') &&
            (currQuestion === 9 ? (
              <Button onClick={showResults}>Testi bitir</Button>
            ) : (
              <Button onClick={nextQuestion}>Sonraki Soru</Button>
            ))}
        </>
      )}
    </>
  );
};

export default Playing;
