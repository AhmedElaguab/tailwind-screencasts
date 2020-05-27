import SidebarInputLabel from './SidebarInputLabel'

export default function SidebarInput({label, defaultValue = 1, id, className}) {
  return (
    <div className={className}>
      <SidebarInputLabel label={label} htmlFor={id} />
      <input
        className="block bg-gray-700 p-2 rounded-lg w-full text-white"
        type="number"
        min="0"
        max="21"
        id={id}
        defaultValue={defaultValue}
      />
    </div>
  )
}
