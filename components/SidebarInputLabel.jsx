export default function SidebarInputLabel({label, htmlFor, children}) {
  return (
    <label
      className="block mb-2 text-gray-500 font-semibold text-sm "
      htmlFor={htmlFor}
    >
      {label || children}
    </label>
  )
}
