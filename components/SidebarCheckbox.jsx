export default function SidebarCheckbox({amenity, name, checked, onChange}) {
  return (
    <div className="py-2">
      <input
        type="checkbox"
        name={name}
        value={amenity}
        checked={checked}
        id={amenity}
        onChange={onChange}
      />
      <label className="ml-4" htmlFor={amenity}>
        {amenity}
      </label>
    </div>
  )
}
