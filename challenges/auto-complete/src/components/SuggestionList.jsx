import React from 'react'

const SuggestionList = ({ suggestions = [], highlight, datakey, onSuggestionClick }) => {

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? <b key={i}>{part}</b> : part
        )}
      </span>
    )
  }
  return (
    <React.Fragment>
      {suggestions.map((item, index) => {
        const currSuggestion = datakey ? item[datakey] : item;
        return (
          <li key={index} className={`suggestion-item ${highlight === index ? 'highlighted' : ''}`} onClick={() => onSuggestionClick(item)} id={`suggestion-${index}`}>
            {getHighlightedText(currSuggestion, highlight)}
          </li>
        );
      })}
    </React.Fragment>
  )
}

export default SuggestionList