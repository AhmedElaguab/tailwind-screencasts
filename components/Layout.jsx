import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen">
      <Header />
      <div className="flex items-stretch">
        <Sidebar />
        <main className="w-8/10 px-8 py-5 h-screen flex-grow">{children}</main>
      </div>
    </div>
  )
}
