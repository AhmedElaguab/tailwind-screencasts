export default function SidebarRadio({value, checked, onChange}) {
  return (
    <div className="flex items-center py-2">
      <input
        type="radio"
        value={value}
        id={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="ml-4" htmlFor={value}>
        {value}
      </label>
    </div>
  )
}
