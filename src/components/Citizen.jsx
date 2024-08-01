import React from "react";

const Citizen = ({ index, citizen, toggleStatus }) => {
  return (
    <li className="citizen-item">
      <span>{index + 1}</span>
      <span>{citizen.name}</span>
      <span>{citizen.age}</span>
      <span>{citizen.address}</span>
      <span>{citizen.status}</span>
      <button onClick={toggleStatus}>
        {citizen.status === "Active" ? "Inactive" : "Active"}
      </button>
    </li>
  );
};

export default Citizen;
