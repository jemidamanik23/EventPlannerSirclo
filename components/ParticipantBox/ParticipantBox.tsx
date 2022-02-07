import React from 'react';
import { Box } from '@mui/system';
import { CustomParticipantBox, CustomParticipantNumberBox } from '../CustomTypography/CustomTypography';
import { Typography } from '@mui/material';

function ParticipantBox({ participant }: { participant: string }) {
    return (
        <Box sx={{ 
            width:"200px",
            border: "2px solid #A95050",
            borderRadius : "0px",
            padding:"3px"
         }}>
            <Typography sx={{ 
                fontFamily: "Nunito",
                fontSize:{xs:"12px", sm:"18px",md:"20px"},
                color:"#000000",
                textAlign: "center"
            }}>
                {participant}
            </Typography>
            
        </Box>
     
    );
}

function ParticipantNumber({ content }: { content: number | string | null}) {
    return (
        <Box sx={{ 
            width:"200px",
            border: "2px solid #A95050",
            borderRadius : "0px",
            padding:"3px"
         }}>
             <Typography sx={{ 
                fontFamily: "Nunito",
                fontSize:{xs:"12px", sm:"18px",md:"20px"},
                color:"#000000",
                textAlign: "center"
            }}>
                Participants ({content})
            </Typography>
             {/* <CustomParticipantNumberBox content={participantNumber} /> */}
            
        </Box>
     
    );
}

export { ParticipantBox, ParticipantNumber };