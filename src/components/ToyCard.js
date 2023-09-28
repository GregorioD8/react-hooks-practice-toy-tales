import React, { useState } from "react";

function ToyCard({ toy, onLikeClick, onDeleteClick }) {
  const [likes, setLikes] = useState(toy.likes)



  function handleLikeClick(e) {
  e.preventDefault()
  const updatedLikes = likes + 1
  setLikes(updatedLikes)

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: (updatedLikes)})
    })
    .then((res) => res.json())
    .then((t) => onLikeClick(t, updatedLikes))
  }
  
  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE", 
    })
    .then((res) => res.json())
    .then(() => onDeleteClick(toy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
