import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Property } from '../types/property'
import { formatPrice } from '../lib/format'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/properties/${property.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative h-64">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {formatPrice(property.price)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{property.surface} m²</span>
            <span>{property.bedrooms} chambres</span>
            <span>{property.bathrooms} sdb</span>
          </div>
        </div>
      </div>
    </Link>
  )
}