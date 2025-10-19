
import InputText from './input-text/InputText'
import Button from './button/Button'
import Suggestion from './suggestion/Suggestion'
import "./auto-complete.css"
import { useState } from 'react'

const AutoComplete = ({ suggestions }) => {
  const [query, setQuery] = useState('');
  const [showList, setShowList] = useState(false);

  const handleQueryChange = (value) => {
    setQuery(value);
    setShowList(true);
  };

  const handleSuggestionsSelect = (selectedSuggestions) => {
    setQuery(selectedSuggestions);
    setShowList(false);
  }

  const handleClear = () => {
    setQuery('');
    setShowList(false);
  }

  const filteredSuggestions = suggestions?.filter((suggestion) => {
    return suggestion.toLowerCase().includes(query.toLowerCase());
  })

  return (
    <div className='auto-complete'>
      <div className='input-box'>
        <InputText value={query} onChange={handleQueryChange} />
        <Button label="Clear" onClick={handleClear} />
      </div>
      {!!query.length && showList && <Suggestion suggestions={filteredSuggestions} onSelect={handleSuggestionsSelect} />}
    </div>
  )
}

export default AutoComplete