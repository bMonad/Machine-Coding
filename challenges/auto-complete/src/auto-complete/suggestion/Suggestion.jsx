import React from 'react'
import './suggestion.css'
import Listitem from './Listitem'

const Suggestion = ({ suggestions, onSelect }) => {
  return (
    <div className='suggestion'>
      {suggestions?.map(suggestion => {
        return <Listitem key={suggestion} suggestion={suggestion} onSelect={onSelect} />
      })}
    </div>
  )
}

export default Suggestion