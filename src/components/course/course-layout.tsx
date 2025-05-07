"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const modules = [
  {
    title: 'Introduction to Day Trading',
    lessons: [
      { title: 'What is Day Trading?', href: '/course/intro/what-is-day-trading' },
      { title: 'Key Terms and Concepts', href: '/course/intro/key-terms' },
      { title: 'Risk Management Basics', href: '/course/intro/risk-management' },
    ],
  },
  {
    title: 'Technical Analysis',
    lessons: [
      { title: 'Candlestick Patterns', href: '/course/technical/candlestick-patterns' },
      { title: 'Support and Resistance', href: '/course/technical/support-resistance' },
      { title: 'Trend Analysis', href: '/course/technical/trend-analysis' },
    ],
  },
  {
    title: 'Trading Strategies',
    lessons: [
      { title: 'Scalping Basics', href: '/course/strategies/scalping' },
      { title: 'Breakout Trading', href: '/course/strategies/breakout' },
      { title: 'Range Trading', href: '/course/strategies/range' },
    ],
  },
]

export function CourseLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Course Content</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span className="sr-only">Close sidebar</span>
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {modules.map((module) => (
            <div key={module.title} className="px-4 py-2">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{module.title}</h3>
              <ul className="mt-2 space-y-1">
                {module.lessons.map((lesson) => (
                  <li key={lesson.href}>
                    <Link
                      href={lesson.href}
                      className={`block px-4 py-2 text-sm rounded-md ${
                        pathname === lesson.href
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                          : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed bottom-4 left-4 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <ChevronRightIcon className="h-6 w-6 rotate-180" />
        </button>
      )}
    </div>
  )
} 