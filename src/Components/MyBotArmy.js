import React from "react";
import BotCard from "./BotCard";

function MyBotArmy ({botArmy, releaseBot, dischargeBot}) {

    return (
        <div> {botArmy.map((bot) => (
             <BotCard bot={bot} handleBot={releaseBot} handleDelete={dischargeBot} />))}
          My Bot Army
        </div>
    )
}
export default MyBotArmy;