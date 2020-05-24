export default function SidebarInput({label, defaultValue = 1, id, className}) {
  return (
    <div className={className}>
      <label
        className="block mb-2 text-gray-500 font-semibold text-sm "
        htmlFor={id}
      >
        {label}
      </label>
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
