import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ filterSearch, onDelete}) {

  const renderListings = filterSearch.map(listing => 
  <ListingCard 
  listing={listing} 
  key={listing.id} 
  onDelete={onDelete}
  />)

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
