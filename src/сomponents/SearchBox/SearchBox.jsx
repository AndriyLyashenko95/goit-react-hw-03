import React from 'react';

const SearchBox = ({ handleSearch, filter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleSearch}
      placeholder="Search by name"
    />
  );
};

export default SearchBox;