import Brand from './Brand'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="flex">
      <Brand />
      <Navbar />
    </header>
  )
}
