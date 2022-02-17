interface IQuizContext {
  gameState: string;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default IQuizContext;
