import NavbarSearchInput from './NavbarSearchInput'
import NavbarItems from './NavbarItems'
import NavbarUserAccount from './NavbarUserAccount'

export default function Navbar() {
  return (
    <nav className="bg-white flex-grow px-8 py-5 shadow-xs flex">
      <div className="flex-grow flex items-center">
        <NavbarSearchInput />
        <NavbarItems />
      </div>
      <NavbarUserAccount />
    </nav>
  )
}
