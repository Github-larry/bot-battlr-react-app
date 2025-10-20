import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ handleAddBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center text-success">Available Bots</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleAddBot={handleAddBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
