import NavbarItem from './NavbarItem'

const links = [
  {label: 'List your property', href: '/list'},
  {label: 'Trips', href: '/trips'},
  {label: 'Messages', href: '/messages'},
  {label: 'Support', href: '/support'},
]

export default function NavbarItems() {
  return (
    <ul className="flex flex-grow justify-end">
      {links.map(({label, href}) => (
        <NavbarItem label={label} href={href} key={href} />
      ))}
    </ul>
  )
}
