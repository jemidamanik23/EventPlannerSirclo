import React from 'react';
import { Box } from "@mui/material"
import Link from 'next/link';
import { Typography } from "@mui/material";
import { CustomH1, CustomTitle } from "../components/CustomTypography/CustomTypography";

const NotFound = () => {
  return (
    <Box sx={{ 
        background:"#A95050",
        height:"30vh",
        textAlign: "center",
        width:"70%",
        margin:"20% 15%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
     }}>
        <CustomH1 content='Are you in lost?'/>
        <Typography sx={{ 
            color:"#FFFFFF"
         }}>Back To <Link href="/">Home</Link></Typography>
        
    </Box>

  )
  
};

export default NotFound;
