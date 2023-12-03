
import { useState , useEffect } from "react";
import "../CSS/navbar.css";
import "../CSS/container.css";

import Navbar from "../partials/navbar";
import TeamDetails from "./team_details";
import Overview from "./overview";

const Container = ()=>{
    const [page,setPage] = useState(0);
    const [overviewData,setOverviewData] = useState([]);
    const [alert,setAlert] = useState({display: true , heading: "No player data found" , message: "Please importer your roster first"});
    const [starters,setStarters] = useState([]);

    useEffect(()=>{
        let start = [];
        overviewData.forEach((item)=>{
            if(item.Starter == 'Yes')
                start.push(item);
        })

        if(start.length == 11)
        {
            setAlert({display:false});
        }

        if(start.length < 11 && start.length != 0)
        {
            let message = {
                display: true,
                heading: "Not enough starters",
                message: "Your team does'nt have enough starters for one or more of the position in the 4-3-3 formation"
            }
            setAlert(message);
        }
    },[overviewData]);
    return(
        <div className="body">
            <Navbar Set={setPage}/>
            {
                page === 0 ? <TeamDetails Overview={setOverviewData}/> : <Overview Alert={alert} Overview={overviewData}/>
            }
        </div>
    )
}

export default Container;