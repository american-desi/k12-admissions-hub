import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Search, Clock, Checklist, Globe } from 'lucide-react'

// Placeholder pages
const SearchPage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Your School</h2>
      <p className="text-gray-600 mb-6">Search and filter NYC schools by district, grade level, and programs.</p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by school name, district, or program..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
          Search
        </button>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-4 border rounded-lg hover:shadow-lg transition">
          <h3 className="font-bold text-lg">School {i}</h3>
          <p className="text-sm text-gray-500">District {i} • Grades K-8</p>
          <div className="mt-3 space-y-1 text-sm">
            <p className="text-gray-700">Programs: Bilingual, STEM</p>
            <p className="text-gray-700">Acceptance Rate: {80 + i * 3}%</p>
          </div>
          <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
            View Details →
          </button>
        </div>
      ))}
    </div>
  </div>
)

const TimelinePage = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Admissions Timeline</h2>
    <p className="text-gray-600">Key dates and deadlines for NYC K-12 school enrollment.</p>

    <div className="space-y-4">
      {[
        { month: 'October', event: 'Open House Season', status: 'upcoming' },
        { month: 'January 15', event: 'Application Deadline (MS)', status: 'upcoming' },
        { month: 'February', event: 'Screened Program Auditions', status: 'current' },
        { month: 'March', event: 'Acceptance Letters Released', status: 'upcoming' },
      ].map((item, i) => (
        <div key={i} className="flex gap-4 p-4 border rounded-lg">
          <div className={`w-3 h-3 rounded-full mt-2 ${item.status === 'current' ? 'bg-green-500' : 'bg-gray-300'}`} />
          <div>
            <p className="font-semibold text-gray-800">{item.month}</p>
            <p className="text-gray-600">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ChecklistPage = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Application Checklist</h2>
    <p className="text-gray-600">Stay organized with personalized requirement checklists.</p>

    <div className="space-y-3">
      {[
        'Gather transcripts and test scores',
        'Complete online application form',
        'Write essay responses',
        'Collect teacher recommendations',
        'Schedule school visits',
        'Submit application by deadline',
        'Track application status',
      ].map((task, i) => (
        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-blue-50 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-700">{task}</span>
        </label>
      ))}
    </div>
  </div>
)

const LanguagesPage = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Multilingual Support</h2>
    <p className="text-gray-600">Information available in Spanish, Mandarin, Arabic, and Bengali.</p>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {['English', 'Español', '中文', 'العربية', 'বাংলা'].map((lang, i) => (
        <button
          key={i}
          className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition font-medium text-gray-700"
        >
          {lang}
        </button>
      ))}
    </div>
  </div>
)

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">NY</span>
                </div>
                <span className="font-bold text-lg">Admissions Hub</span>
              </Link>
              <div className="hidden md:flex gap-8">
                <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                  <Search className="w-4 h-4" /> Search
                </Link>
                <Link to="/timeline" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                  <Clock className="w-4 h-4" /> Timeline
                </Link>
                <Link to="/checklist" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                  <Checklist className="w-4 h-4" /> Checklist
                </Link>
                <Link to="/languages" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                  <Globe className="w-4 h-4" /> Languages
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/languages" element={<LanguagesPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-16 py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600">NYC K-12 Admissions Navigator • Accessibility • Privacy</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}
