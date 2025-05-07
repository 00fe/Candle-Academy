"use client"

import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Trade {
  type: 'buy' | 'sell'
  price: number
  timestamp: number
  stopLoss?: number
  takeProfit?: number
}

interface TradingSimulatorProps {
  initialData: {
    labels: string[]
    prices: number[]
  }
  onTradeComplete: (trade: Trade) => void
}

export function TradingSimulator({ initialData, onTradeComplete }: TradingSimulatorProps) {
  const [currentPrice, setCurrentPrice] = useState(initialData.prices[initialData.prices.length - 1])
  const [isTrading, setIsTrading] = useState(false)
  const [stopLoss, setStopLoss] = useState<number | null>(null)
  const [takeProfit, setTakeProfit] = useState<number | null>(null)
  const [tradeType, setTradeType] = useState<'buy' | 'sell' | null>(null)

  const chartData = {
    labels: initialData.labels,
    datasets: [
      {
        label: 'Price',
        data: initialData.prices,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price Chart'
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }

  const handleTrade = (type: 'buy' | 'sell') => {
    if (!isTrading) {
      setTradeType(type)
      setIsTrading(true)
      onTradeComplete({
        type,
        price: currentPrice,
        timestamp: Date.now(),
        stopLoss: stopLoss || undefined,
        takeProfit: takeProfit || undefined
      })
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Stop Loss
          </label>
          <input
            type="number"
            value={stopLoss || ''}
            onChange={(e) => setStopLoss(Number(e.target.value))}
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white"
            placeholder="Enter stop loss"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Take Profit
          </label>
          <input
            type="number"
            value={takeProfit || ''}
            onChange={(e) => setTakeProfit(Number(e.target.value))}
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white"
            placeholder="Enter take profit"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => handleTrade('buy')}
          disabled={isTrading}
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Buy
        </button>
        <button
          onClick={() => handleTrade('sell')}
          disabled={isTrading}
          className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sell
        </button>
      </div>

      {isTrading && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200">
            Active {tradeType} trade at {currentPrice}
            {stopLoss && ` with stop loss at ${stopLoss}`}
            {takeProfit && ` and take profit at ${takeProfit}`}
          </p>
        </div>
      )}
    </div>
  )
} 