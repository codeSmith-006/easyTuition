import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'About Us - TuitionConnect',
  description: 'Learn more about TuitionConnect and our mission',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
          About TuitionConnect
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            TuitionConnect is a premium online tutoring platform that connects students
            with expert teachers for personalized learning experiences.
          </p>
          <p>
            Our mission is to make quality education accessible to everyone, everywhere.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
