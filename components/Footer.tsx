import React from 'react';
import { Box } from '@mui/material';

function Footer() {

  return (
      <Box sx={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        display: "flex",
        height: "60px",
        backgroundColor: "#A95050",
        padding: { xs: "17px 20px", sm: "10px 50px" },
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.250);",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

      </Box>

  )
};

export default Footer;
