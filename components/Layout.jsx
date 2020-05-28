import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div className="text-gray-900">
      <Header />
      <div className="flex items-stretch">
        <Sidebar />
        <main className="w-8/10 px-8 py-5 h-screen flex-grow">{children}</main>
      </div>
    </div>
  )
}
