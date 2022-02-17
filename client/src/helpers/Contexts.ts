import { createContext } from 'react';
import IQuizContext from '../interfaces/quizContext';

export const QuizContext = createContext<IQuizContext>({} as IQuizContext);
