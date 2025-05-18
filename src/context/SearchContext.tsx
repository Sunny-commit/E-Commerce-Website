import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../types';
import { searchProducts } from '../data/products';

interface SearchContextType {
  query: string;
  results: Product[];
  searching: boolean;
  search: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [searching, setSearching] = useState(false);

  const search = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    
    setSearching(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const searchResults = searchProducts(searchQuery);
      setResults(searchResults);
      setSearching(false);
    }, 300);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  return (
    <SearchContext.Provider value={{ query, results, searching, search, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};