import React from "react";
import { Card, Button } from "react-bootstrap";

function BotCard({ bot, handleAddBot, handleReleaseBot, showAddButton = true }) {
  return (
    <Card className="m-2 shadow-sm" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={bot.avatar_url} alt={bot.name} />
      <Card.Body>
        <Card.Title>{bot.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{bot.bot_class}</Card.Subtitle>
        <Card.Text>
          <strong>Health:</strong> {bot.health} <br />
          <strong>Damage:</strong> {bot.damage} <br />
          <strong>Armor:</strong> {bot.armor} <br />
          <em>{bot.catchphrase}</em>
        </Card.Text>

        {showAddButton ? (
          <Button variant="primary" onClick={() => handleAddBot(bot)}>
            Add to Army
          </Button>
        ) : (
          <Button variant="warning" onClick={() => handleReleaseBot(bot)}>
            Release
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default BotCard;
