import React from "react";

/*
Component: PetSearch
Purpose: Displays the search box and filtered pet data in a table.

Props:
- petList: array of filtered pet objects
- searchTerm: current search text
- setSearchTerm: updates the search text

Output:
- Search box
- Bootstrap table with image, name, animal, and specialty
*/

function PetSearch({ petList, searchTerm, setSearchTerm }) {
  return (
    <div className="container py-4">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold mb-2">Week 4 Assignment - Favorite Pets Search</h1>
          <p className="mb-1"><strong>Name:</strong> John Van Hoesen</p>
          <p className="mb-1"><strong>Date:</strong> April 5, 2026</p>
          <p className="mb-4 subtitle-text">
            Search your favorite pet by animal type like dog, cat, bird, or rabbit.
          </p>

          <input
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="Enter an animal type"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>

      <div className="table-wrapper mx-auto">
        <table className="table table-striped table-hover align-middle shadow pet-table">
          <thead>
            <tr>
              <th className="image-col">Image</th>
              <th className="name-col">Name</th>
              <th className="animal-col">Animal</th>
              <th className="specialty-col">Specialty</th>
            </tr>
          </thead>
          <tbody>
            {petList.length > 0 ? (
              petList.map((pet) => (
                <tr key={pet.id}>
                  <td className="image-col">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="img-thumbnail pet-image"
                    />
                  </td>
                  <td className="name-col">{pet.name}</td>
                  <td className="animal-col">{pet.animal}</td>
                  <td className="specialty-col">{pet.specialty}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-danger fw-bold py-4">
                  No animals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PetSearch;