import React, {useState, useEffect} from "react";


function BotsPage () {
    const [bots, setBots] = useState([]);
    const [botArmy, setBotArmy] = useEffect([]);

 useEffect((armyBot) => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then(bots => setBots(bots))
}, [])

 
    return(
       <div>

       </div> 
    )

    
}
 export default BotsPage;