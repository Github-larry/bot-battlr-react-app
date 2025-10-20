import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [army, setArmy] = useState([]);

  // Add bot to army
  function handleAddBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  // Release bot from army
  function handleReleaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Discharge bot forever (delete from backend)
  function handleDeleteBot(id) {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  }

  return (
    <div className="container">
      <h1 className="text-center mt-4 text-primary">🤖 Bot Battlr</h1>
      <YourBotArmy
        army={army}
        handleReleaseBot={handleReleaseBot}
        handleDeleteBot={handleDeleteBot}
      />
      <BotCollection handleAddBot={handleAddBot} />
    </div>
  );
}

export default App;
