import PropertyCard from './PropertyCard'

export default function PropertyList({city, description, properties = []}) {
  return (
    <div className="mt-2">
      <h1 className="text-2xl">{city}</h1>
      <p className="mt-1 text-md font-medium text-gray-600">{description}</p>
      <div className="mt-8 flex">
        {Array.isArray(properties) &&
          properties.length > 0 &&
          properties.map((property) => (
            <PropertyCard property={property} key={property.title} />
          ))}
      </div>
    </div>
  )
}
