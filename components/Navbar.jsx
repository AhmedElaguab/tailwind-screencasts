import NavbarSearchInput from './NavbarSearchInput'
import NavbarItems from './NavbarItems'
import NavbarUserAccount from './NavbarUserAccount'

export default function Navbar() {
  return (
    <nav className="hidden lg:flex w-7/10 lg:w-8/10 bg-white flex-grow px-8 py-5 shadow-xs">
      <div className="flex-grow flex items-center">
        <NavbarSearchInput />
        <NavbarItems />
      </div>
      <NavbarUserAccount />
    </nav>
  )
}
