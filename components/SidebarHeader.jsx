import SidebarInput from './SidebarInput'
import SidebarSelect from './SidebarSelect'

export default function SidebarHeader() {
  return (
    <header>
      <div className="mb-8 flex justify-between">
        <SidebarInput
          className="w-5/12"
          label="Bedrooms"
          defaultValue="4"
          id="beds"
        />
        <SidebarInput
          className="w-5/12"
          label="bathrooms"
          defaultValue="1"
          id="baths"
        />
      </div>
      <SidebarSelect label="Price range" />
    </header>
  )
}
