"use client"

import { useState } from 'react'

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: QuizQuestion[]
}

export function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      {!showResult ? (
        <>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {question.question}
          </h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {selectedAnswer === question.correctAnswer
              ? 'Great job! You understand this concept well.'
              : `The correct answer was: ${question.options[question.correctAnswer]}`}
          </p>
          {isLastQuestion ? (
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Quiz Complete! Your score: {score}/{questions.length}
              </p>
              <button
                onClick={handleRestart}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Try Again
              </button>
            </div>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  )
} 