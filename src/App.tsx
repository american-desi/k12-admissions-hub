import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Search, Clock, ListChecks, Globe } from 'lucide-react'

const SearchPage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border">
      <h2 className="text-3xl font-bold mb-2">Find Your School</h2>
      <p className="text-gray-600 mb-6">Search and filter NYC schools.</p>
      <input type="text" placeholder="Search..." className="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {[1,2,3,4].map(i => (
        <div key={i} className="p-4 border rounded-lg">
          <h3 className="font-bold">School {i}</h3>
          <p className="text-sm text-gray-500">District {i} • K-8</p>
        </div>
      ))}
    </div>
  </div>
)
const TimelinePage = () => (<div><h2 className="text-3xl font-bold mb-4">Timeline</h2><p>Key admission dates.</p></div>)
const ChecklistPage = () => (<div><h2 className="text-3xl font-bold mb-4">Checklist</h2></div>)
const LanguagesPage = () => (<div><h2 className="text-3xl font-bold mb-4">Languages</h2><div className="grid gap-4 md:grid-cols-4">{['English','Español','中文','العربية'].map(l => <button key={l} className="p-4 border rounded-lg">{l}</button>)}</div></div>)

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="border-b bg-white sticky top-0"><div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">NYC Admissions Hub</Link>
          <div className="flex gap-6"><Link to="/"><Search className="w-4 h-4 inline"/> Search</Link><Link to="/timeline"><Clock className="w-4 h-4 inline"/> Timeline</Link><Link to="/checklist"><ListChecks className="w-4 h-4 inline"/> Checklist</Link><Link to="/languages"><Globe className="w-4 h-4 inline"/> Languages</Link></div>
        </div></nav>
        <main className="max-w-7xl mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/languages" element={<LanguagesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
