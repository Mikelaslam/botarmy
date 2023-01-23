import React from "react";
import BotCard from "./BotCard";

function BotCollection ({bots, addBot, removeBot}) {
    return(
       <div className="ui four column grid">
      <div className="row">
        {<ul>{bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBot={addBot} handleDelete={removeBot}></BotCard>
        ))}</ul>

        }
        Collection of all bots

      </div>
    </div> 
    );
}export default BotCollection;