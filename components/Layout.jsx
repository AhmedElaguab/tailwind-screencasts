import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div className="text-gray-900">
      <Header />
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <Sidebar />
        <main className="sm:w-6/10 lg:w-8/10 px-8 py-5 flex-grow">
          {children}
        </main>
      </div>
    </div>
  )
}
