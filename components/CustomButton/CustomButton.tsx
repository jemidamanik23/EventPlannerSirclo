import { Button, Typography } from "@mui/material";
import "@fontsource/nunito/700.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

function CustomButtonPrimary({width, caption, OnClick, isDisabled }: {width:string, caption: string, OnClick?: ()=>void ,isDisabled? :boolean}) {
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
        width:{width},
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

function ButtonEdit({  OnClick }: { OnClick?: ()=>void}) {
  return (
    <Button
      onClick={OnClick}
      sx={{
        borderRadius: "0px",
        backgroundColor: "#FFFFFF",
        padding: "0px",
        transition: "all 0.4s ease",
        width:"61px",
        height:"38px",
        "&:hover": {
          backgroundColor: "#FFFFFF",
        },
      }}>
        <ModeEditIcon color="action"/>
    </Button>
  );
}

function ButtonDelete({  OnClick }: { OnClick?: ()=>void}) {
  return (
    <Button
      onClick={OnClick}
      sx={{
        borderRadius: "0px",
        backgroundColor: "#FFFFFF",
        padding: "0px",
        transition: "all 0.4s ease",
        width:"61px",
        height:"38px",
        "&:hover": {
          backgroundColor: "#FFFFFF",
        },
      }}>
        <DeleteForeverIcon color="action"/>


    </Button>
  );
}


export { CustomButtonPrimary, CustomButtonSecondary, ButtonEdit, ButtonDelete };
