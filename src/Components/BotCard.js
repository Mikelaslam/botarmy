import React from 'react';

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({bot, handleBot, handleDelete}) {
 return (
    <div className="col-md-3 col-sm-12">
      <div
        className="card my-5 mx-5 p-4 m-3"
        key={bot.id}
        onClick={() => handleBot(bot)}
      >
        <div className="card-image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="card-content p-2">
          <div className="card-header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="card-meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="t">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield " />
            {bot.armor}
          </span>
          <div className="text-center">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(bot)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
 )};
 
 export default BotCard;
