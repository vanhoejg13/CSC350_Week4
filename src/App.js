import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import pets from "./data";
import PetSearch from "./components/PetSearch";

/*
Component: App
Purpose: Main application component.
Stores the search term and filters pet data by animal type.

Variables:
- searchTerm: current value typed by the user
- filteredPets: pets that match the search term

Search is case-insensitive because both values
are converted to lowercase.
*/

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPets = pets.filter((pet) =>
    pet.animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-background min-vh-100">
      <PetSearch
        petList={filteredPets}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;