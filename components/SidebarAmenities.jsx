import {useState} from 'react'
import SidebarInputLabel from './SidebarInputLabel'
import SidebarCheckbox from './SidebarCheckbox'

const amenities = [
  'Balcony',
  'Air conditioning',
  'Pool',
  'Beach',
  'Pet friendly',
  'Kid friendly',
  'Parking',
]

export default function SidebarAmenities() {
  const [checkedCheckboxes, setCheckedCheckboxes] = useState(['Pool'])
  const handleCheckboxChange = (e) => {
    const newAmenity = e.target.value
    if (checkedCheckboxes.includes(newAmenity)) {
      setCheckedCheckboxes(checkedCheckboxes.filter((a) => a !== newAmenity))
    } else {
      setCheckedCheckboxes([...checkedCheckboxes, newAmenity])
    }
  }
  return (
    <div className="mt-5">
      <SidebarInputLabel label="Amenities" />
      <div>
        {amenities.map((amenity) => (
          <SidebarCheckbox
            amenity={amenity}
            key={amenity}
            name="amenities"
            onChange={handleCheckboxChange}
            checked={checkedCheckboxes.includes(amenity)}
          />
        ))}
      </div>
    </div>
  )
}
