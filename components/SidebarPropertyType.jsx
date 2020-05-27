import {useState} from 'react'
import SidebarInputLabel from './SidebarInputLabel'
import SidebarRadio from './SidebarRadio'

const types = [
  {type: 'House', checked: true},
  {type: 'Appartment', checked: false},
  {type: 'Loft', checked: false},
  {type: 'Townhouse', checked: false},
]

export default function SidebarPropertyType() {
  const [checkedType, setCheckedType] = useState('Appartment')
  const handleRadioChange = (e) => {
    setCheckedType(e.target.value)
  }
  return (
    <div className="pt-5">
      <SidebarInputLabel label="Property Type" />
      <div>
        {types.map((t) => (
          <SidebarRadio
            key={t.type}
            name="type"
            value={t.type}
            onChange={handleRadioChange}
            checked={checkedType === t.type}
          />
        ))}
      </div>
    </div>
  )
}
