import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLikeClick, onDeleteClick }) {

  const toyCollection = toys.map((t) => (
    <ToyCard
      key={t.id}
      toy={t}
      onLikeClick={onLikeClick}
      onDeleteClick={onDeleteClick}
    />
  ))
  

  
  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {toyCollection}
    </div>
  );
}

export default ToyContainer;
