import { ArrowLeft, Bath, BedDouble, MapPin, Ruler } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { properties } from '../data/properties'
import { formatPrice } from '../lib/format'
import { Carousel } from '../components/Carousel'

export function PropertyDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const property = properties.find(p => p.id === id)

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p>Propriété non trouvée.</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link
        to="/properties"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux propriétés
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="h-96 mb-4">
            <Carousel images={property.images} className="h-full rounded-lg" />
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{property.location}</span>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-6">
            {formatPrice(property.price)}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex items-center">
              <Ruler className="w-5 h-5 mr-2 text-gray-600" />
              <span>{property.surface} m²</span>
            </div>
            <div className="flex items-center">
              <BedDouble className="w-5 h-5 mr-2 text-gray-600" />
              <span>{property.bedrooms} chambres</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2 text-gray-600" />
              <span>{property.bathrooms} sdb</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Caractéristiques</h2>
            <ul className="grid grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Contactez-nous</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}