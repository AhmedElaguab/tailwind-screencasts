import React from 'react'

export default function SidebarSelect() {
  return (
    <div>
      <label
        className="block mb-2 text-gray-500 font-semibold text-sm "
        htmlFor="baths"
      >
        Price Range
      </label>
      <select
        className="block bg-gray-700 p-2 rounded-lg w-full text-white"
        type="text"
        id="baths"
        defaultValue="Up to $2,000 /wk"
      >
        <option>Up to $1000</option>
        <option>Up to $1500</option>
        <option>Up to $2000</option>
        <option>Up to $2500</option>
      </select>
    </div>
  )
}
