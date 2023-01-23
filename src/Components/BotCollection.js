import React from "react";
import BotCard from "./BotCard";

function BotCollection ({bots}) {
    return(
       <div className="ui four column grid">
      <div className="row">
        {<ul>{bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBot={addBot} handleDelete={dischargeBot}></BotCard>
        ))}</ul>

        }
        Collection of all bots

      </div>
    </div> 
    );
}