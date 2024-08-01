import React from "react";

const SearchFilter = ({
  searchQuery,
  setSearchQuery,
  filterCitizens,
  citizens,
}) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterCitizens(query, citizens);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
