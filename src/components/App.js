import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys"
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => setToys(data))
  }, []) 

  function handleFormClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToySubmit(newToy) {
    setToys([...toys, newToy])
  }

  function handleLikeClick(toy, newLikes) {
    console.log(toy.likes)
     setToys(toys.map((t) => (toy.id === t.id ? { ...t, likes: newLikes} : t)))
    
  }

  function handleDeleteClick(toy) {
    setToys(toys.filter((t) => (toy.id !== t.id)))

  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={handleNewToySubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleFormClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onLikeClick={handleLikeClick} onDeleteClick={handleDeleteClick}/>
    </>
  );
}

export default App;
