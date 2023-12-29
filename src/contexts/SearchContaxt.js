
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};

export { SearchProvider };
