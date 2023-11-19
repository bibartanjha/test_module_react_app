// Autocomplete.tsx
import React, { useState, useEffect } from 'react';

const suggestions=["apple", "banana", "orange", "grape", "kiwi", "mango", "strawberry", "pineapple", "watermelon", "cherry"];

const FilteredListFruits: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
      // Initialize filtered suggestions with all suggestions on component mount
      setFilteredSuggestions(suggestions);
    }, [suggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredSuggestions(suggestions.filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div>
      <input type="text" id="filtered_list_input" value={inputValue} onChange={handleInputChange} />
      <div id="listOfFruits" style={{display: 'inline-block', marginLeft: '10px'}}>List: {filteredSuggestions.join(', ')}</div>
    </div>
  );
};

export { FilteredListFruits };
