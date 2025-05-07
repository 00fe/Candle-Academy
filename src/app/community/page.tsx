import { Navbar } from '@/components/navigation/navbar'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            Community
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <p className="text-gray-600 dark:text-gray-300">
              Join our community of traders to share experiences, strategies, and learn from each other.
              Coming soon!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 