import { Typography } from "@mui/material";
import "@fontsource/nunito/700.css";

function CustomH1({ content }: { content:string | undefined}) {
    return (
      <Typography sx={{ 
        fontFamily: "Nunito",
        fontSize:{xs:"30px", sm:"40px",md:"48px"},
       }}>
           {content}
      </Typography>
    );
  }

  function CustomH2({ content }: { content:string | undefined}) {
    return (
      <Typography sx={{ 
        fontFamily: "Nunito",
        fontSize:{xs:"20px", sm:"24px",md:"28px"},
       }}>
           {content}
      </Typography>
    );
  }

  function CustomPlaceholder({ content }: { content:string | undefined}) {
    return (
      <Typography sx={{ 
        fontFamily: "Nunito",
        fontSize:{xs:"24px", sm:"18px",md:"12px"},
        color:"rgba(0, 0, 0, 0.6)",
       }}>
           {content}
      </Typography>
    );
  }

  function CustomParagraph({ content }: { content:string | undefined | number}) {
    return (
      <Typography sx={{ 
        fontFamily: "Nunito",
        fontSize:{xs:"12px", sm:"18px",md:"20px"},
        color:"#000000",
       }}>
           {content}
      </Typography>
    );
  }

  function CustomParticipantBox({ content }: { content:string | undefined }) {
    return (
      <Typography sx={{ 
        fontFamily: "Nunito",
        fontSize:{xs:"12px", sm:"18px",md:"20px"},
        color:"#000000",
        textAlign: "center"
       }}>
           {content}
      </Typography>
    );
  }

  function CustomParticipantNumberBox({ content }: { content:string | number | undefined | Element}) {
    return (
      <Typography sx={{ 
        fontFamily: "Nunito",
        fontSize:{xs:"12px", sm:"18px",md:"20px"},
        color:"#000000",
        textAlign: "center"
       }}>
          Participants ({content})
      </Typography>
    );
  }

  function CustomTitle({ content }: { content:string | undefined}) {
    return (
      <Typography sx={{ 
        fontFamily: "Nunito",
        fontSize:{xs:"30px", sm:"40px",md:"48px"},
        textAlign: "center"
       }}>
           {content}
      </Typography>
    );
  }
  
  
  export { CustomH1, CustomPlaceholder, CustomH2, CustomParagraph, CustomParticipantBox, CustomParticipantNumberBox, CustomTitle };