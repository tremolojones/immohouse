import { useState } from 'react'
import { PropertyCard } from '../components/PropertyCard'
import { properties } from '../data/properties'
import { Property } from '../types/property'

export function PropertiesPage() {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    maxPrice: '',
  })

  const filteredProperties = properties.filter((property) => {
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    if (filters.type && property.type !== filters.type) {
      return false
    }
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) {
      return false
    }
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Nos propriétés</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Ville, code postal..."
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value as Property['type'] })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Type de bien</option>
            <option value="house">Maison</option>
            <option value="apartment">Appartement</option>
            <option value="villa">Villa</option>
            <option value="kot">Kot</option>
          </select>
          <select
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Budget max</option>
            <option value="200000">200 000 €</option>
            <option value="500000">500 000 €</option>
            <option value="1000000">1 000 000 €</option>
            <option value="2000000">2 000 000 €</option>
            
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Aucune propriété ne correspond à vos critères.</p>
        </div>
      )}
    </div>
  )
}