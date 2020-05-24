import Link from 'next/link'

export default function Brand(props) {
  return (
    <div className="bg-gray-900 w-2/10 py-6">
      <Link href="/">
        <a>
          <img
            className="h-10 block mx-auto"
            src="/logo-inverted.svg"
            alt="Worcation"
          />
        </a>
      </Link>
    </div>
  )
}
