
import React from "react";
import { Card, Button } from "react-bootstrap";

function BotCard({
  bot,
  handleAddBot,
  handleReleaseBot,
  handleDeleteBot,
  showAddButton = true,
}) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={bot.avatar_url}
        alt={bot.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{bot.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {bot.bot_class}
        </Card.Subtitle>
        <Card.Text>
          <strong>Health:</strong> {bot.health} <br />
          <strong>Damage:</strong> {bot.damage} <br />
          <strong>Armor:</strong> {bot.armor}
        </Card.Text>

        {/* 👇 Buttons section */}
        {showAddButton ? (
          <Button variant="primary" onClick={() => handleAddBot(bot)}>
            Add to Army
          </Button>
        ) : (
          <div className="d-flex justify-content-around">
            <Button variant="warning" onClick={() => handleReleaseBot(bot)}>
              Release
            </Button>
            <Button variant="danger" onClick={() => handleDeleteBot(bot.id)}>
              ❌ Discharge
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default BotCard;
