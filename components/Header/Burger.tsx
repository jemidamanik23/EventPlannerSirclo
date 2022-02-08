import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import LoginRounded from "@mui/icons-material/LoginRounded";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import "@fontsource/nunito/700.css";
import ClassIcon from '@mui/icons-material/Class';
import { useRouter } from 'next/router';

type burgerProps = {
  isAuth?: boolean,
  name?: string
  onLogOut?: ()=>void
}

function Burger({ isAuth, name, onLogOut }: burgerProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();  

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toLogin = () => {
    router.push('/login-page')
  };

  const toEvent = () => {
    router.push('/events')
  };

  const toProfile = () => {
    router.push('/profile')

  };

  const toHome = () => {
    router.push('/')

  };

  const handleLogOut = () => {
    localStorage.clear()
    router.push('/login-page')
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title='Menu'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}>
            <MenuIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <MenuItem
          sx={{ display: `${isAuth ? "flex" : "none"}` }}
          onClick={toProfile}>
          <Avatar />
          <Typography sx={{fontFamily: "Nunito"}}>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={toEvent}>
          <ListItemIcon>
            <ClassIcon sx={{ 
              color:"#000000"
             }} />
          </ListItemIcon>
          <Typography sx={{ fontFamily: "Nunito" }}>My Event</Typography>
        </MenuItem>
        <MenuItem onClick={toHome}>
          <ListItemIcon>
            <HomeRoundedIcon fontSize='small' />
          </ListItemIcon>
          <Typography sx={{ fontFamily: "Nunito" }}>Home</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={toLogin}
          sx={{ display: `${isAuth ? "none" : "flex"}` }}>
          <ListItemIcon>
            <LoginRounded fontSize='small' />
          </ListItemIcon>
          <Typography sx={{ fontFamily: "Nunito" }}>Login</Typography>
        </MenuItem>
        <MenuItem onClick={onLogOut} sx={{ display: `${isAuth ? "flex" : "none"}` }}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          <Typography sx={{ fontFamily: "Nunito" }}>Log Out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Burger;