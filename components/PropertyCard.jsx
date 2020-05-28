export default function PropertyCard({property}) {
  return (
    <div className="max-w-md mr-6 text-gray-900">
      <div className="shadow-xs h-64 rounded-lg overflow-hidden">
        <img
          className="block h-full w-full object-cover object-center"
          src={property.imageUrl}
        />
      </div>
      <div className="relative -mt-16 mx-5 p-4 bg-white rounded-lg shadow-lg">
        <div>
          <span className="inline-block mr-1 text-xs text-gray-600 font-semibold uppercase tracking-wide">
            {property.type}
            <span className="ml-1">&bull;</span>
          </span>
          <span className="inline-block mr-1 text-xs text-gray-600 font-semibold uppercase tracking-wide">
            {property.beds} beds
            <span className="ml-1">&bull;</span>
          </span>
          <span className="inline-block mr-1 text-xs text-gray-600 font-semibold uppercase tracking-wide">
            {property.baths} baths
          </span>
        </div>
        <h3 className="mt-1 text-xl font-semibold truncate">
          {property.title}
        </h3>
        <p className="mt-2">
          {property.formattedPrice} <span className="text-gray-600">/wk</span>
        </p>
        <div className="mt-3 flex">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                className={`w-5 h-5 fill-current ${
                  s <= property.rating ? 'text-yellow-700' : 'text-gray-600'
                }`}
                version="1.1"
                id="Star"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 20 20"
                enableBackground="new 0 0 20 20"
              >
                <path d="M10,1.3l2.388,6.722H18.8l-5.232,3.948l1.871,6.928L10,14.744l-5.438,4.154l1.87-6.928L1.199,8.022h6.412L10,1.3z" />
              </svg>
            ))}
          </div>
          <p className="ml-3 text-gray-600 font-semibold">
            {property.reviewCount} reviews
          </p>
        </div>
      </div>
    </div>
  )
}
