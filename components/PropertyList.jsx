import PropertyCard from './PropertyCard'

export default function PropertyList({city, description, properties = []}) {
  return (
    <div className="mb-16">
      <h1 className="text-2xl">{city}</h1>
      <p className="mt-1 text-md font-medium text-gray-600">{description}</p>
      <div className="mt-8 flex flex-wrap lg:justify-between">
        {Array.isArray(properties) &&
          properties.length > 0 &&
          properties.map((property, i) => (
            <PropertyCard property={property} key={property.id} />
          ))}
      </div>
    </div>
  )
}
