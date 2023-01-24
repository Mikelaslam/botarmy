import React from "react";
import BotCard from "./BotCard";



function MyBotArmy ({botArmy, releaseBot, dischargeBot}) {

    return (
        <div className="bg-success p-3">
        <div className="row">
        <div className="col-12 mx-auto border p-2">
        <div className="row"> 
        <h2>My Bot Army</h2>
         {botArmy.map((bot) => (
            
             <BotCard bot={bot} handleBot={releaseBot} handleDelete={dischargeBot} />))}
         
        </div>
     </div>
     </div>
</div>
    )
}
export default MyBotArmy;