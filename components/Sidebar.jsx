import SidebarHeader from './SidebarHeader'
import SidebarPropertyType from './SidebarPropertyType'
import SidebarAmenities from './SidebarAmenities'
import SidebarUpdate from './SidebarUpdate'

export default function Sidebar() {
  return (
    <aside className="w-2/10 py-8 px-5 bg-gray-800 text-white ">
      <SidebarHeader />
      <hr className="mt-6 -mx-5 border border-gray-900" />
      <SidebarPropertyType />
      <hr className="mt-6 -mx-5 border border-gray-900" />
      <SidebarAmenities />
      <SidebarUpdate />
    </aside>
  )
}
