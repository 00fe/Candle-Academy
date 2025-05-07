import { Quiz } from '@/components/course/quiz'

const quizQuestions = [
  {
    question: "What is the main goal of day trading?",
    options: [
      "To hold positions for several months",
      "To make profits from short-term price movements within a single day",
      "To invest in long-term market trends",
      "To accumulate stocks for retirement"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a typical characteristic of day trading?",
    options: [
      "Trading multiple times per day",
      "Holding positions overnight",
      "Using technical analysis",
      "Managing risk with stop-loss orders"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the primary advantage of day trading?",
    options: [
      "No need to monitor the market",
      "Ability to profit from both rising and falling markets",
      "Guaranteed profits",
      "No risk involved"
    ],
    correctAnswer: 1
  }
]

export default function WhatIsDayTrading() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        What is Day Trading?
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Day trading is a trading strategy where traders buy and sell financial instruments within the same trading day. The goal is to profit from short-term price movements in stocks, currencies, or other financial instruments.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Key Characteristics
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>All positions are closed before the market closes</li>
          <li>Traders make multiple trades per day</li>
          <li>Focus on short-term price movements</li>
          <li>Use of technical analysis and real-time data</li>
          <li>Requires active market monitoring</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Benefits of Day Trading
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>No overnight market risk</li>
          <li>Ability to profit in both rising and falling markets</li>
          <li>Quick feedback on trading decisions</li>
          <li>No need to worry about overnight news events</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Important Considerations
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Requires significant time commitment</li>
          <li>Needs proper risk management</li>
          <li>Requires emotional discipline</li>
          <li>Needs a solid trading strategy</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Pro Tip
          </h3>
          <p className="text-blue-700 dark:text-blue-200">
            Successful day trading requires a combination of technical knowledge, emotional control, and strict risk management. Start with a demo account to practice without risking real money.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Test Your Knowledge
        </h2>
        <Quiz questions={quizQuestions} />
      </div>
    </div>
  )
} 