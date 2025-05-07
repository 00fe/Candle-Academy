import { Navbar } from '@/components/navigation/navbar'
import Link from 'next/link'

const simulations = [
  {
    id: 'scalping-1m',
    title: '1-Minute Scalping',
    description: 'Practice scalping with 1-minute timeframe data',
    difficulty: 'Beginner'
  },
  {
    id: 'breakout-5m',
    title: '5-Minute Breakout',
    description: 'Learn breakout trading with 5-minute charts',
    difficulty: 'Intermediate'
  },
  {
    id: 'range-15m',
    title: '15-Minute Range Trading',
    description: 'Master range trading with 15-minute timeframe',
    difficulty: 'Advanced'
  }
]

export default function SimulationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            Trading Simulations
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {simulations.map((simulation) => (
              <Link
                key={simulation.id}
                href={`/simulations/${simulation.id}`}
                className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {simulation.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {simulation.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {simulation.difficulty}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 