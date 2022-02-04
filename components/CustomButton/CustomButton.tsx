import { Button, Typography } from "@mui/material";
import "@fontsource/nunito/700.css";

function CustomButtonSecondary({ caption, OnClick, isDisabled }: { caption: string, OnClick?: ()=>void ,isDisabled?: boolean}) {
  return (
    <Button
    onClick={OnClick}
      sx={{
        borderRadius: "10px",
        border: "2px solid #F34F51",
        backgroundColor: "white",
        textTransform: "none",
        padding: "0px",
        transition: "all 0.4s ease",
        "&:hover": {
          backgroundColor: " #F34F51",
        },
      }}>
      <Typography
        sx={{
          fontFamily: "Nunito",
          color: "#000000",
          padding: "6px 15px",
          fontWeight: "700",
          fontSize: {xs: "11px",sm:"15px"},
          transition: "all 0.4s ease",
          "&:hover": {
            color: "white",
          },
        }}>
        {caption}
      </Typography>
    </Button>
  );
}

function CustomButtonPrimary({ caption, OnClick, isDisabled }: { caption: string, OnClick?: ()=>void ,isDisabled? :boolean}) {
  return (
    <Button
      onClick={OnClick}
      sx={{
        borderRadius: "10px",
        border: "2px solid #F34F51",
        backgroundColor: "#F34F51",
        textTransform: "none",
        padding: "0px",
        transition: "all 0.4s ease",
        "&:hover": {
          backgroundColor: "#F34F51",
          border: "2px solid #F34F51",
        },
      }}>
      <Typography
        sx={{
          fontFamily: "Nunito",
          color: "white",
          padding: "6px 15px",
          fontWeight: "700",
          fontSize: {xs: "11px",sm:"15px"}
        }}>
        {caption}
      </Typography>
    </Button>
  );
}

export { CustomButtonPrimary, CustomButtonSecondary };
