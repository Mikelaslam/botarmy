import React, {useState, useEffect} from "react";
import MyBotArmy from "./MyBotArmy";
import BotCollection from "./BotCollection";

function BotsPage () {
    const [bots, setBots] = useState([]);
    const [botArmy, setBotArmy] = useEffect([]);

 useEffect((armyBot) => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then(bots => setBots(bots))
}, [])

  function addBotToArmy(armyBot){
    const selectBot = bots.find(bot => bot === armyBot)
    setBotArmy([...botArmy, selectBot])
  }
   function releaseBotFromArmy(armyBot){
    const remainedBotArmyList = botArmy.filter((bot) => bot !== armyBot)
    setBotArmy(remainedBotArmyList)
  }
    return(
       <div>
         <MyBotArmy botArmy={botArmy} releaseBot={releaseBotFromArmy} dischargeBot={deleteBot} />
         <BotCollection bots={bots} addBot={addBotToArmy} dischargeBot={deleteBot} />
       </div>
        
    )
    }export default BotsPage;