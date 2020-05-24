import Header from './Header'

export default function Layout({children}) {
  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen">
      <Header />
      {children}
    </div>
  )
}
