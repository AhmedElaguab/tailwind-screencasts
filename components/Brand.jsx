import Link from 'next/link'

export default function Brand(props) {
  return (
    <div className="flex-grow py-6 bg-gray-900">
      <Link href="/">
        <a className="flex-grow">
          <img
            className="h-10 lg:h-8 xl:h-10 block mx-auto"
            src="/logo-inverted.svg"
            alt="Worcation"
          />
        </a>
      </Link>
    </div>
  )
}
