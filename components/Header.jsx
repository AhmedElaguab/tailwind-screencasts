import {useState} from 'react'
import Link from 'next/link'
import Brand from './Brand'
import Navbar from './Navbar'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="lg:flex">
      <div className="flex w-full lg:w-2/10 ">
        <Brand />
        <div className="lg:hidden bg-white flex justify-center items-center px-8">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute bg-gray-800 text-white shadow-lg border p-4 w-full left-0 right-0 lg:hidden">
          <ul className="">
            <li>
              <Link href="/list">
                <a className="block p-2 font-semibold hover:bg-gray-700 rounded-sm">
                  List your property
                </a>
              </Link>
            </li>
            <li>
              <Link href="/trips">
                <a className="block p-2 font-semibold hover:bg-gray-700 rounded-sm">
                  Trips
                </a>
              </Link>
            </li>
            <li>
              <Link href="/messages">
                <a className="block p-2 font-semibold hover:bg-gray-700 rounded-sm">
                  Messages
                </a>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <a className="block p-2 font-semibold hover:bg-gray-700 rounded-sm">
                  Support
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <Navbar />
    </header>
  )
}
