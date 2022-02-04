import React from 'react';
import { Box } from '@mui/system';
import { CustomParticipantBox, CustomParticipantNumberBox } from '../CustomTypography/CustomTypography';

function ParticipantBox({ participant }: { participant: string }) {
    return (
        <Box sx={{ 
            width:"200px",
            border: "2px solid #A95050",
            borderRadius : "0px",
            padding:"3px"
         }}>
             <CustomParticipantBox content={participant} />
            
        </Box>
     
    );
}

function ParticipantNumber({ participantNumber }: { participantNumber: number }) {
    return (
        <Box sx={{ 
            width:"200px",
            border: "2px solid #A95050",
            borderRadius : "0px",
            padding:"3px"
         }}>
             <CustomParticipantNumberBox content={participantNumber} />
            
        </Box>
     
    );
}

export { ParticipantBox, ParticipantNumber };