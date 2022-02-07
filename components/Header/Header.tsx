import React from 'react';
import { Box } from '@mui/material';
import logo from "../../images/logo.png";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import LoginRounded from "@mui/icons-material/LoginRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export type headerHandlerType = {
  isHidden?: boolean,
  handleGetText?: (e:React.ChangeEvent<HTMLInputElement>)=> void,
  handleSendText?: ()=>void
}

function Header({
  handleGetText,
  handleSendText,
  isHidden,
}: headerHandlerType) {
  const [auth, setAuth] = useState<boolean>(false);
  const router = useRouter();  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if(localStorage.getItem('token')!==null){
      setAuth(true)
    }
    
  },);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toLogin = () => {

  };

  const toEvent = () => {

  };

  const toProfile = () => {

  };

  const toHome = () => {
;
  };

  return (
      <Box sx={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        display: "flex",
        height: "80px",
        backgroundColor: "#A95050",
        padding: { xs: "17px 20px", sm: "10px 50px" },
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.250);",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Image src={logo} alt="eventkoe" width="120" height="50" 
          onClick={() => router.push('/')} />
          </Box>

          <Box>
        <Box
          sx={{
            display: `${!isHidden ? "flex" : "none"}`,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F34F51",
            height: "40px",
            width: { xs: "270px", sm: "300px" },
            borderRadius: "10px",
          }}>
          <Box
            onClick={handleSendText}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <SearchRoundedIcon sx={{ color: "white" }} />
            <input
              onChange={handleGetText}
              className='input-search'
              type='text'
              style={{ outline: "none", border: "none", background: "#F34F51" }}
              placeholder='Search'
            />
          </Box>
        </Box>
      </Box>


      </Box>

  )
};

export default Header;
