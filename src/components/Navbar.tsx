import { Home, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ImmoTchum</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </Link>
              <Link to="/properties" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Propriétés
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("sm:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/properties"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Propriétés
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}