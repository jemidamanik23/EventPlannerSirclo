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
import Burger from './Burger';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Menu from "@mui/material/Menu";
import { MenuItem } from '@mui/material';
import { Divider } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { CustomButtonPrimary } from '../CustomButton/CustomButton';

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
    console.log(auth)
    
  },);

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
    router.push('/')

  };

  const toHome = () => {
    router.push('/')

  };

  const handleLogOut = () => {

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


      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: "20px",
        }}>
        <Tooltip title='Shopping Cart'>
          <Box
            onClick={toEvent}
            sx={{
              cursor: "pointer",
              padding: "5px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F34F51",
              height: "40px",
              borderRadius: "10px",
              gap: "10px",
            }}>
            <BookIcon sx={{ color: "white" }} />            
          </Box>
        </Tooltip>
        {auth ? (
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}>
              <Tooltip title='Menu'>
                <Button
                  onClick={handleClick}
                  size='small'
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#F34F51",
                    textTransform: "none",
                    padding: "7px 10px",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      backgroundColor: "#F34F51",
                    },
                  }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? "true" : undefined}>
                  <Avatar

                    sx={{ width: "25px", height: "25px" }}
                  />

                  <Typography sx={{ fontFamily: "Nunito", marginLeft: "10px", color: "white" }}>
                    Profile
                  </Typography>
                </Button>
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
                sx={{ display: `${auth ? "flex" : "none"}` }}
                onClick={toProfile}>
                <Avatar
                  sx={{ width: "10px", height: "10px" }}
                />
                <Typography sx={{ fontFamily: "Nunito" }}>Profile</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={toHome}>
                <ListItemIcon>
                  <HomeRoundedIcon fontSize='small' />
                </ListItemIcon>
                <Typography sx={{ fontFamily: "Nunito" }}>Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={toLogin}
                sx={{ display: `${auth ? "none" : "flex"}` }}>
                <ListItemIcon>
                  <LoginRounded fontSize='small' />
                </ListItemIcon>
                <Typography sx={{ fontFamily: "Nunito" }}>Login</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleLogOut}
                sx={{ display: `${auth ? "flex" : "none"}` }}>
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box>
            <CustomButtonPrimary caption='Log In' OnClick={toLogin} />
          </Box>
        )}
      </Box>


      </Box>

  )
};

export default Header;
