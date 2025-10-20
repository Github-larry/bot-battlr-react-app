import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, handleReleaseBot, handleDeleteBot }) {
  return (
    <div className="container mt-5">
      <h3 className="text-center text-danger">Your Bot Army</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleReleaseBot={handleReleaseBot}
            handleDeleteBot={handleDeleteBot}
            showAddButton={false}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
