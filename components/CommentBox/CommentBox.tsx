import React from 'react';
import { Box } from '@mui/system';
import { CustomParagraph } from '../CustomTypography/CustomTypography';

function CommentBox({ caption}: { caption: string}) {
    return (
        <Box sx={{ 
            width:"100%",
            border: "1px solid #000000",
            borderRadius : "10px",
            background:" #E8EBE7",
            padding:"1%"
         }}>
             <CustomParagraph content={caption} />
            
        </Box>
     
    );
  }

export default CommentBox;
