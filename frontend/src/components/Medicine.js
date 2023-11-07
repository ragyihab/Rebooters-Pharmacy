import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Medicine({ modelName }) {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [medicinalUse, setMedicinalUse] = useState("");

  const viewMedicineInventory = async () => {
    try {
      const response = await fetch(`/api/${modelName}/viewMedicineInventory`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchMedicineByName = async () => {
    try {
      const response = await fetch(`/api/${modelName}/searchMedicineByName`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ medicineName: searchTerm }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSearchTerm("");
      setMedicines(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterMedicineByMedicinalUse = async () => {
    try {
      const response = await fetch(
        `/api/${modelName}/filterMedicineByMedicinalUse`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ medicinalUse }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMedicinalUse("");
      setMedicines(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <h1 className="mb-4">Medicine Inventory</h1>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control d-inline w-50"
          />
          <button
            className="btn btn-primary ml-2"
            onClick={searchMedicineByName}
          >
            Search
          </button>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Filter by Medicinal Use"
            value={medicinalUse}
            onChange={(e) => setMedicinalUse(e.target.value)}
            className="form-control d-inline w-50"
          />
          <button
            className="btn btn-primary ml-2"
            onClick={filterMedicineByMedicinalUse}
          >
            Filter
          </button>
        </div>
      </div>
      <hr />
      <div>
        <h2>Medicine List</h2>
        <button
          className="btn btn-primary mr-2"
          onClick={viewMedicineInventory}
        >
          View All Medicines
        </button>
        <ul className="list-group card">
          {medicines.map((medicine, index) => (
            <li key={index} className="list-group-item">
              <h3>{medicine.name}</h3>
              <p>Price: {medicine.price}</p>
              <p>Description: {medicine.description}</p>
              <p>Active Ingredients: {medicine.activeIngredients}</p>
              <p>Medicinal Use: {medicine.medicinalUse}</p>
              <p>Quantity: {medicine.quantity}</p>
              {medicine.image.filename ? (
                <img src={`${medicine.image.filename}`} alt="Medicine" />
              ) : (
                <p>No Image Available</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Medicine;