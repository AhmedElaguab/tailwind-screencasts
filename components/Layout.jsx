import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen">
      <Header />
      <div className="flex items-stretch">
        <Sidebar />
        <main className="px-8 py-5 h-screen">{children}</main>
      </div>
    </div>
  )
}
