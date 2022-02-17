import React, { useState } from 'react';
// Quiz State
// import Initial from './Initial/Initial';
import Playing from './Playing/Playing';
import Result from './Result/Result';
// Components
import Navbar from '../../components/Navbar/Navbar';
// Styles
import { Wrapper } from './Quiz.styled';
import { UpdateBackgroundColor } from '../Countries/Countries.styled';
// Context
import { QuizContext } from '../../helpers/Contexts';
// Router
import { useNavigate } from 'react-router-dom';

const Quiz: React.FC = () => {
  const [gameState, setGameState] = useState('playing');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        bgColor="white"
        shadow
        buttonActive
        buttonText="Bütün Ülkeler"
        onClick={() => navigate('/countries')}
      />
      <Wrapper>
        <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
          {gameState === 'playing' && <Playing />}
          {gameState === 'result' && <Result />}
        </QuizContext.Provider>
      </Wrapper>
      <UpdateBackgroundColor />
    </>
  );
};

export default Quiz;
