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
import { GET_MYEVENT, DELETE_EVENT} from "../utils/queries"
import client from "../utils/apollo-client"
import { useMutation } from '@apollo/client';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

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

const Event = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");
    const eventsDefault: eventsTypes[] = [];
    const [dataEvents, setDataComment] = useState(eventsDefault);
    const [deleteEvent] = useMutation(DELETE_EVENT);

      const fetchData = async () => {

          const { data } = await client.query({
            query: GET_MYEVENT,
            variables: { id: localStorage.getItem("id_user") },
            context: {
              headers: { 
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            },
          });
          console.log((data.myEvent).length); 
          console.log(data)
          if((data.myEvent).length!==0){
            setDataComment(data.myEvent)
          }    
          
      };

      useEffect(() => {
        if(localStorage.getItem("token")!==null){
                setToken(localStorage.getItem("token"));  
                fetchData();        
            }else{
                router.replace('/login-page')
            }
      }, []); 

      const addEvent = async () => {
          router.push('/create-event')
    }

    const nextEvent = async () => {
        router.push('/eventHistory')
    }


      const handleEdit =async (id: number) => {
        router.push('/update-event/5')
        

      }

      const handleDelete =async (id: number) => {
        deleteEvent({
          variables: { id:id },
          context: {
                    headers: { 
                      Authorization: `Bearer ${token}`,
                    },
                  },
        })

      }

  return (
    <Box>
      <Header/>
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
               
               {dataEvents.map((value) => (
                <Grid item key={value.id}>
                    <Box>
                        <EventCard eventTitle={value.title} time={value.start_date} category={value.id_category} handleEdit={() => handleEdit(value.id)} handleDelete={() => handleDelete(value.id)} />
                    </Box>
               </Grid>

               ))}

             </Box>
      </Box>
      <Footer/>
      </Box>
  );
};

export default Event;
