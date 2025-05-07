"use client"

import { useParams } from 'next/navigation'
import { Navbar } from '@/components/navigation/navbar'
import { TradingSimulator } from '@/components/simulations/trading-simulator'

// Mock data for the simulation
const mockData = {
  labels: Array.from({ length: 20 }, (_, i) => `10:${i.toString().padStart(2, '0')}`),
  prices: [
    100, 101, 102, 101, 103, 104, 103, 105, 106, 105,
    107, 108, 107, 109, 110, 109, 111, 112, 111, 113
  ]
}

export default function SimulationPage() {
  const params = useParams()
  const simulationId = params.id as string

  const handleTradeComplete = (trade: any) => {
    console.log('Trade completed:', trade)
    // Here you would typically:
    // 1. Save the trade to the user's history
    // 2. Update their statistics
    // 3. Show feedback about their decision
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Basic Scalping Simulation
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Practice your scalping strategy with this 1-minute timeframe simulation. Try to identify quick profit opportunities and manage your risk effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TradingSimulator
                initialData={mockData}
                onTradeComplete={handleTradeComplete}
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Trading Tips
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Look for quick price movements</li>
                  <li>• Set tight stop losses</li>
                  <li>• Take profits quickly</li>
                  <li>• Don't hold positions too long</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Your Performance
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Win Rate</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">0%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average Profit</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">$0.00</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Best Trade</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">$0.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 