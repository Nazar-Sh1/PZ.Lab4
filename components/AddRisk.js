// components/AddRisk.js
import React, { useState } from "react";
import axios from "axios";

function AddRisk() {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [likelihood, setLikelihood] = useState(1);
  const [impact, setImpact] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/risks", {
      name,
      source,
      likelihood,
      impact,
    });
    setName("");
    setSource("");
    setLikelihood(1);
    setImpact(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Додати новий ризик</h2>
      <input
        placeholder="Назва ризику"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Джерело ризику"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ймовірність"
        value={likelihood}
        onChange={(e) => setLikelihood(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Вплив"
        value={impact}
        onChange={(e) => setImpact(Number(e.target.value))}
      />
      <button type="submit">Додати ризик</button>
    </form>
  );
}

export default AddRisk;
