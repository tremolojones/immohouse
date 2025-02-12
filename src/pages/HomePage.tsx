import { ArrowRight, Search } from 'lucide-react'
import { Home, User, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PropertyCard } from '../components/PropertyCard'
import { properties } from '../data/properties'

export function HomePage() {
  const featuredProperties = properties.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trouvez le bien de vos rêves
          </h1>
          <p className="text-xl mb-8">
            Des milliers de propriétés vous attendent
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Ville, code postal..."
                  className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <select className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Type de bien</option>
                  <option value="house">Maison</option>
                  <option value="apartment">Appartement</option>
                  <option value="villa">Villa</option>
                  <option value="kot">Kot</option>

                </select>
              </div>
              <div className="flex-1">
                <select className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Budget max</option>
                  <option value="200000">200 000 €</option>
                  <option value="500000">500 000 €</option>
                  <option value="1000000">1 000 000 €</option>
                  <option value="2000000">2 000 000 €</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Biens à la une</h2>
          <Link
            to="/properties"
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            Voir tout
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
   {/* Featured Properties */}
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Biens à la une</h2>
          <Link
            to="/properties"
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            Voir tout
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Large sélection</h3>
              <p className="text-gray-600">
                Des milliers de biens disponibles dans toute la France
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experts qualifiés</h3>
              <p className="text-gray-600">
                Une équipe de professionnels à votre service
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
              <p className="text-gray-600">
                Un suivi personnalisé tout au long de votre projet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}