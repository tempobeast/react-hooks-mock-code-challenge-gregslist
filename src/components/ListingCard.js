import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {

  const {id, description, image, location} = listing

  const [favorite, setFavorite] = useState(true)

  function handleFavClick(e) {
    setFavorite(!favorite)
  }

  function handleDelete(e) {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(console.log(listing))
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite === true ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
