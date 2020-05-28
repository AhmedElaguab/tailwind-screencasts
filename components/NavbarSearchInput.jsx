export default function NavbarSearchInput() {
  return (
    <div className="relative w-4/10">
      <svg
        className="absolute m-2 w-6 h-6 fill-current text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          className="heroicon-ui"
          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        />
      </svg>
      <input
        className="block w-full  p-2 pl-10 text-lg text-gray-600 placeholder-gray-600 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search by keywords"
      />
    </div>
  )
}
