import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then((data) => setListings(data))
  }, [])

console.log(listings)
console.log(search)


  const filterSearch = listings.filter((listing) => {
    if (search === "") {
      return true
    } else {
      return listing.description.includes(search)
    }
  })


function handleDeleteListing(toDelete) {
  const updatedListings = listings.filter((listing) => listing.id !== toDelete.id)
  setListings(updatedListings)
}

function handleSearchChange(event) {
  setSearch(event.target.value)
}

  return (
    <div className="app">
      <Header 
      //onSubmitSearch={handleSubmitSearch} 
      onSearchChange={handleSearchChange}
      search={search} 
      />
      <ListingsContainer 
      filterSearch={filterSearch} 
      onDelete={handleDeleteListing}
      
      />
    </div>
  );
}

export default App;
