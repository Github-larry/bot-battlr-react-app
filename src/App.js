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

  return (
    <div className="container">
      <h1 className="text-center mt-4 text-primary">🤖 Bot Battlr</h1>
      <YourBotArmy army={army} handleReleaseBot={handleReleaseBot} />
      <BotCollection handleAddBot={handleAddBot} />
    </div>
  );
}

export default App;
