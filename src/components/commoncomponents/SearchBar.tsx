import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { debounce } from '../../utils/services';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Debounce the onSearch function
    const debouncedSearch = debounce(onSearch, 300); // Adjust the debounce delay as needed
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchQuery(query);
      debouncedSearch(query); // Call the debounced function
    };
  

  return (
    <div className="main-search">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button>
        <FaSearch/>
      </button>
    </div>
  );
};

export default SearchBar;
