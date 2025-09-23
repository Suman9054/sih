import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import bg from '/bg.jpg';
interface Question {
  question: string;
  options: string[];
  correct: string;
}

interface QuizState {
  currentQuestion: number;
  score: number;
  showResult: boolean;
  selectedAnswer: string;
  showAnswerFeedback: boolean;
  isAnswerCorrect: boolean;
}

const QuizPage: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    showResult: false,
    selectedAnswer: '',
    showAnswerFeedback: false,
    isAnswerCorrect: false
  });

  const questions: Question[] = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: "Mars"
    },
    {
      question: "What is 15 + 27?",
      options: ["41", "42", "43", "44"],
      correct: "42"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correct: "Leonardo da Vinci"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: "Pacific Ocean"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: "Au"
    },
    {
      question: "Which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: "1945"
    }
  ];

  const handleAnswerClick = (answer: string): void => {
    if (quizState.showAnswerFeedback) return;

    const isCorrect = answer === questions[quizState.currentQuestion].correct;

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answer,
      showAnswerFeedback: true,
      isAnswerCorrect: isCorrect
    }));
  };

  const handleNextQuestion = (): void => {
    const newScore = quizState.isAnswerCorrect ? quizState.score + 1 : quizState.score;

    if (quizState.currentQuestion + 1 < questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        score: newScore,
        selectedAnswer: '',
        showAnswerFeedback: false,
        isAnswerCorrect: false
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        score: newScore,
        showResult: true
      }));
    }
  };

  const restartQuiz = (): void => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      showResult: false,
      selectedAnswer: '',
      showAnswerFeedback: false,
      isAnswerCorrect: false
    });
  };

  const getScoreColor = (): string => {
    const percentage = (quizState.score / questions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (): string => {
    const percentage = (quizState.score / questions.length) * 100;
    if (percentage >= 80) return "Excellent work! 🎉";
    if (percentage >= 60) return "Good job! 👍";
    if (percentage >= 40) return "Not bad, keep practicing! 📚";
    return "Keep studying! 💪";
  };

  const getOptionStyle = (option: string): string => {
    if (!quizState.showAnswerFeedback) {
      return quizState.selectedAnswer === option
        ? 'border-purple-500 bg-purple-100 text-purple-800 shadow-md'
        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-700';
    }

    const isCorrectAnswer = option === questions[quizState.currentQuestion].correct;
    const isSelectedAnswer = option === quizState.selectedAnswer;

    if (isCorrectAnswer) {
      return 'border-green-500 bg-green-100 text-green-800 shadow-md';
    } else if (isSelectedAnswer && !isCorrectAnswer) {
      return 'border-red-500 bg-red-100 text-red-800 shadow-md';
    } else {
      return 'border-gray-200 bg-gray-50 text-gray-500';
    }
  };

  const getOptionIcon = (option: string): JSX.Element | null => {
    if (!quizState.showAnswerFeedback) return null;

    const isCorrectAnswer = option === questions[quizState.currentQuestion].correct;
    const isSelectedAnswer = option === quizState.selectedAnswer;

    if (isCorrectAnswer) return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (isSelectedAnswer && !isCorrectAnswer) return <XCircle className="w-5 h-5 text-red-600" />;
    return null;
  };

  if (quizState.showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 "
       style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏆</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
            <p className="text-gray-600">{getScoreMessage()}</p>
          </div>

          <div className="mb-8">
            <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
              {quizState.score}/{questions.length}
            </div>
            <div className="text-lg text-gray-600">
              {Math.round((quizState.score / questions.length) * 100)}% Correct
            </div>
          </div>

          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestionData = questions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4"
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Knowledge Quiz</h1>
          </div>
          <div className="text-sm text-gray-500">
            Question {quizState.currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(((quizState.currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((quizState.currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Answer Feedback */}
        {quizState.showAnswerFeedback && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
              quizState.isAnswerCorrect
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            {quizState.isAnswerCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            )}
            <div>
              <p
                className={`font-semibold ${
                  quizState.isAnswerCorrect ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {quizState.isAnswerCorrect ? 'Correct!' : 'Incorrect!'}
              </p>
              {!quizState.isAnswerCorrect && (
                <p className="text-red-700 text-sm">
                  The correct answer is: <strong>{currentQuestionData.correct}</strong>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
            {currentQuestionData.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestionData.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={quizState.showAnswerFeedback}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
                  getOptionStyle(option)
                } ${quizState.showAnswerFeedback ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        quizState.selectedAnswer === option && !quizState.showAnswerFeedback
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {quizState.selectedAnswer === option && !quizState.showAnswerFeedback && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                  {getOptionIcon(option)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Score: {quizState.score}/{questions.length}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!quizState.showAnswerFeedback}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
              quizState.showAnswerFeedback
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {quizState.currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
