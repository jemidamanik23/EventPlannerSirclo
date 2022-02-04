import * as React from "react";
import { Box, Typography } from "@mui/material";
import "@fontsource/nunito";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {ButtonDelete, ButtonEdit } from "../CustomButton/CustomButton";

interface eventcard {
  srcImage?: string;
  eventTitle?: string;
  time?: string;
  handleDelete?:()=>void
  handleEdit?:()=>void

}

function EventCard(props: eventcard) {
  return (
      <Box sx={{ 
          width: "100%",
          background: "#A95050",
          borderRadius:"10px",
          boxShadow:"5px 5px 0px rgba(0, 0, 0, 0.5)",


       }}>
           <Box sx={{ 
               padding:"1%",

            }}>
            <Box>
               <Typography>
                   Event
               </Typography>
            </Box>
            <Box sx={{ 
                display:"flex",
                flexDirection:"row",
                gap:"5px",
                justifyContent: "space-between", 
             }}>
                <Box sx={{ width: '80%' }}>
                    <Typography>
                        Kategori : Technology
                    </Typography>
                    <Typography>
                        Dijadwalkan pada : 13 Januari 2022
                    </Typography>

                </Box>
                <Box sx={{ 
                    width:"20%",
                    display:"flex",
                    flexDirection:"row",
                    gap:"5%", }}>
                    <ButtonEdit/>
                    <ButtonDelete/>
                    

                </Box>
            </Box>

           </Box>
          

      </Box>

  );
}

export default EventCard;
