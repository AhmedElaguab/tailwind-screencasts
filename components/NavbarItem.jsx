import Link from 'next/link'

export default function NavbarItem({label, href}) {
  return (
    <li>
      <Link href={href}>
        <a className="block font-semibold ml-6">{label}</a>
      </Link>
    </li>
  )
}
