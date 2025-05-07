import { Navbar } from '@/components/navigation/navbar'
import Link from 'next/link'

const modules = [
  {
    title: 'Introduction to Day Trading',
    description: 'Learn the basics of day trading and essential concepts',
    lessons: [
      { title: 'What is Day Trading?', href: '/course/intro/what-is-day-trading' },
      { title: 'Key Terms and Concepts', href: '/course/intro/key-terms' },
      { title: 'Risk Management Basics', href: '/course/intro/risk-management' },
    ],
  },
  {
    title: 'Technical Analysis',
    description: 'Master the art of reading charts and market patterns',
    lessons: [
      { title: 'Candlestick Patterns', href: '/course/technical/candlestick-patterns' },
      { title: 'Support and Resistance', href: '/course/technical/support-resistance' },
      { title: 'Trend Analysis', href: '/course/technical/trend-analysis' },
    ],
  },
  {
    title: 'Trading Strategies',
    description: 'Learn proven trading strategies for different market conditions',
    lessons: [
      { title: 'Scalping Basics', href: '/course/strategies/scalping' },
      { title: 'Breakout Trading', href: '/course/strategies/breakout' },
      { title: 'Range Trading', href: '/course/strategies/range' },
    ],
  },
]

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            Course Content
          </h1>

          <div className="space-y-12">
            {modules.map((module, index) => (
              <div key={module.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {index + 1}. {module.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {module.description}
                </p>
                <div className="space-y-4">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.href}
                      href={lesson.href}
                      className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {lesson.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 