import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";

const names = ["Chin", "Izumi", "Jay Ann", "John", "Christine"];

const getRandomAge = () => Math.floor(Math.random() * (70 - 20 + 1)) + 20;

const getRandomName = () => names[Math.floor(Math.random() * names.length)];

const Citizens = () => {
  const [citizens, setCitizens] = useState([
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Minglanilla",
      status: "Active",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Dumanjug",
      status: "Active",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Barili",
      status: "Active",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Mambaling",
      status: "Active",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Badian",
      status: "Inactive",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Talisay",
      status: "Inactive",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Japan",
      status: "Active",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "China",
      status: "Active",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Texas",
      status: "Inactive",
    },
    {
      name: getRandomName(),
      age: getRandomAge(),
      address: "Banilad",
      status: "Inactive",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCitizens, setFilteredCitizens] = useState(citizens);

  const toggleStatus = (index) => {
    const updatedCitizens = citizens.map((citizen, i) =>
      i === index
        ? {
            ...citizen,
            status: citizen.status === "Active" ? "Inactive" : "Active",
          }
        : citizen
    );
    setCitizens(updatedCitizens);
    filterCitizens(searchQuery, updatedCitizens);
  };

  const filterCitizens = (query, citizenList) => {
    const filtered = citizenList.filter((citizen) =>
      citizen.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCitizens(filtered);
  };

  return (
    <div className="citizens-container">
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterCitizens={filterCitizens}
        citizens={citizens}
      />
      <ul className="citizens-list">
        <li>
          <span>No.</span>
          <span>Name</span>
          <span>Age</span>
          <span>Address</span>
          <span>Status</span>
          <span>Active or Inactive</span>
        </li>
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={index}
            index={index}
            citizen={citizen}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Citizens;
