"use client"

import { Navbar } from '@/components/navigation/navbar'
import { Line } from 'react-chartjs-2'

// Mock data for the dashboard
const performanceData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Win Rate',
      data: [65, 70, 75, 68, 72, 80, 85],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
}

const achievements = [
  {
    id: 1,
    title: 'First Profitable Trade',
    description: 'Completed your first profitable trade',
    completed: true,
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'Risk Management Master',
    description: 'Maintained proper risk management for 10 consecutive trades',
    completed: false,
    progress: '7/10'
  },
  {
    id: 3,
    title: 'Quick Learner',
    description: 'Completed all beginner modules',
    completed: true,
    date: '2024-03-14'
  }
]

const recentTrades = [
  {
    id: 1,
    type: 'buy',
    symbol: 'EUR/USD',
    entry: 1.0850,
    exit: 1.0870,
    profit: 20,
    date: '2024-03-15 10:30'
  },
  {
    id: 2,
    type: 'sell',
    symbol: 'GBP/USD',
    entry: 1.2650,
    exit: 1.2630,
    profit: 20,
    date: '2024-03-15 11:15'
  }
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            Your Dashboard
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Performance Overview */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Performance Overview
                </h2>
                <div className="h-64">
                  <Line data={performanceData} />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Trades
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Symbol
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Entry
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Exit
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Profit
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {recentTrades.map((trade) => (
                        <tr key={trade.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              trade.type === 'buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {trade.type.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {trade.symbol}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {trade.entry}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {trade.exit}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            ${trade.profit}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {trade.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Statistics */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Statistics
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Win Rate</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">75%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Trades</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average Profit</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">$18.50</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Achievements
                </h2>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg ${
                        achievement.completed
                          ? 'bg-green-50 dark:bg-green-900/30'
                          : 'bg-gray-50 dark:bg-gray-700/50'
                      }`}
                    >
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                      {achievement.completed ? (
                        <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                          Completed on {achievement.date}
                        </p>
                      ) : (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Progress: {achievement.progress}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 