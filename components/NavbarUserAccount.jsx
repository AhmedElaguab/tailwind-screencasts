export default function NavbarUserAccount() {
  return (
    <div className="ml-8 flex justify-center items-center">
      <button className="block w-8 h-8 rounded-full overflow-hidden border-2 border-gray-500 focus:outline-none focus:shadow-outline">
        <img className="w-full h-full object-cover" src="/avatar.png" />
      </button>
    </div>
  )
}
