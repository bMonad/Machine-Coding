import React from 'react'
import './inputText.css'
const InputText = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  }
  return (
    <div className='input'>
      <input type="text" placeholder="Search..." value={value} onChange={handleChange} />
    </div>
  )
}

export default InputText