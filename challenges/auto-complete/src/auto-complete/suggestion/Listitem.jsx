import React from 'react'
import Button from '../button/Button'

const Listitem = ({ suggestion, onSelect }) => {

  const handleSelect = () => {
    onSelect(suggestion);
  }

  return <Button label={suggestion} onClick={handleSelect} />
}

export default Listitem