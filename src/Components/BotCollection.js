import React from "react";
import BotCard from "./BotCard";

function BotCollection ({bots, addBot, dischargeBot}) {
    return(
        <div className="navy-blue-bg">
       <div className="row">
      <div className="col-12 mx-auto border p-2">
        <div className= "row">
      <h2>Display of all bots</h2>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBot={addBot} handleDelete={dischargeBot}></BotCard>
        ))}

        </div>
     
     </div>
    
    </div> 
</div>
);
}export default BotCollection;