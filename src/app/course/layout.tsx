import { CourseLayout } from '@/components/course/course-layout'
import { Navbar } from '@/components/navigation/navbar'

export default function CourseRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <CourseLayout>{children}</CourseLayout>
      </div>
    </div>
  )
} 