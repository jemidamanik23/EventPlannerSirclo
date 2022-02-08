import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomH1 } from "../components/CustomTypography/CustomTypography";
import {EventCard, EventHistoryCard} from "../components/EventCard/EventCard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { GET_MYEVENT, GET_HISTORY} from "../utils/queries"
import client from "../utils/apollo-client"
import { Grid } from '@mui/material';
import Link from "next/link";

export type eventsTypes = {
    id: number,
    id_user: number,
    id_category: number,
    title: string,
    start_date: string,
    end_date: string,
    location: string,
    details: string,
    photo: string
  }

const EventHistory = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");
    const eventsDefault: eventsTypes[] = [];
    const [dataEvents, setData] = useState(eventsDefault);
    // dummy
    const [sejarah, setSejarah] = useState<{id: number, title: string, status: string}[]>([
        {id: 1, title: "Nobar LFC", status: "Waiting"},
        {id: 2, title: "Nobar Spiderman", status: "Finished"}
    ]);

    useEffect(() => {
        if(localStorage.getItem("token")!==null){
                setToken(localStorage.getItem("token"))  
                fetchData();        
            }else{
                router.replace('/login-page')
            }
      }, []); 

      const fetchData = async () => {

        const { data } = await client.query({
          query: GET_HISTORY,
          variables: { id: localStorage.getItem("id_user") },
          context: {
            headers: { 
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        });
        // console.log((data.myEvent).length); 
        console.log(data)
        if((data.eventHistory).length!==0){
          setData(data.eventHistory)
        }    
        
    };

    return(
        <Box>
      <Header isHidden={true} />
      <Box sx={{ 
          width: "90wh", 
          margin: "5% ",
       }}>
           <Box sx={{ 
               textAlign:"center",
            }}>
               <CustomH1 content='My Events'/>
           </Box>
           <Box sx={{ 
               display:"flex",
               flexDirection:"column",
               gap:"2vh",

            }}>

               
               {dataEvents.map((value) => (
                   <Link key={value.id} href={`/details/${value.id}`}>
                <Grid item key={value.id}>
                    <Box>
                        <EventHistoryCard eventTitle={value.title}  />
                    </Box>
               </Grid>
               </Link>

               ))}

             </Box>
      </Box>
      <Footer/>
      </Box>
    )
}
export default EventHistory;