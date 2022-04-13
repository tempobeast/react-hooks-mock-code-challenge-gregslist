import React from "react";

function Search({ onSubmitSearch, search, onSearchChange }) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitSearch();
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
