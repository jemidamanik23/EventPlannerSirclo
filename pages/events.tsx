import React from 'react';
import { Box } from '@mui/system';
import { CustomH1, CustomParagraph } from '../components/CustomTypography/CustomTypography';
import { TextInput, TextArea } from '../components/TextInput/TextInput';
import { CustomButtonPrimary, CustomButtonSecondary } from '../components/CustomButton/CustomButton';
import { useState } from 'react';
import {EventCard} from '../components/EventCard/EventCard';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import { useEffect } from 'react';


const Event = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");
    const [events, setEvents] = useState<{title: string, time: string, category: string}[]>([
        {
        title: "Nobar LFC",
        time: "13 Januari 2022",
        category: "Technology"
          },
        {
        title: "Nobar LFC",
        time: "13 Januari 2022",
        category: "Technology"
            },
        {
        title: "Nobar LFC",
        time: "13 Januari 2022",
        category: "Technology"
            },

      ]);

      useEffect(() => {
        if(localStorage.getItem("token")!==null){
                setToken(localStorage.getItem("token"))          
            }else{
                router.replace('/login-page')
            }
      }, []); 

      const addEvent = async () => {
          router.push('/cu-event')
    }

    const nextEvent = async () => {
        router.push('/eventHistory')
    }

      const handleEdit = async () => {
      }

      const handleDelete = async () => {
      }




  return (
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
               <Box sx={{ 
                   display:"flex",
                   flexDirection:"row",
                   gap:"3vh",
                }}>
                    <Box sx={{ 
                        width: "50%",
                        display:"flex",
                        flexDirection:"row",
                        gap:"2%",
                     }}  >
                    <CustomButtonSecondary OnClick={addEvent} caption='Tambahkan Event Baru'/>
                    </Box>
                    <Box sx={{ 
                        width: "50%",
                        textAlign:"end"
                     }}>
                    <CustomButtonPrimary OnClick={nextEvent} width='40%' caption='Event yang diikuti'/>
                    </Box>                   
               </Box>
               
               {events.map((value) => (
                <Grid item key={1}>
                    <Box>
                        <EventCard eventTitle={value.title} time={value.time} category={value.category} handleEdit={handleEdit} handleDelete={handleDelete} />
                    </Box>
               </Grid>

               ))}

             </Box>
      </Box>
  );
};

export default Event;
