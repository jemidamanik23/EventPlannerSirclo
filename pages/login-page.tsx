import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { CustomH1, CustomParagraph } from '../components/CustomTypography/CustomTypography';
import { TextInput } from '../components/TextInput/TextInput';
import { CustomButtonPrimary, CustomButtonSecondary } from '../components/CustomButton/CustomButton';
import { Alert, Snackbar, Typography } from '@mui/material';
import client from '../utils/apollo-client';
import { GET_LOGIN } from '../utils/queries';
import { useRouter } from "next/router";
import { alertType } from '../types/users';

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [disabledVal, setDisabled] = useState<boolean>(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alert, setAlert] = useState<alertType>({
      message: "",
      status: "error",
    });
    const router = useRouter();

    const handleCloseAlert = (
      event?: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenAlert(false);
    };

    useEffect(() => {
      if(localStorage.getItem("token")!==null){
              router.replace('/')
          }
    }, []); 

    const fetchData = async () => {
        if (email === "") {
          setEmailError("Email is required");
        } else if (password === "") {
          setPasswordError("Password is required");
        } else if (emailError === "" && passwordError === "") {
          setDisabled(true);   
          const { data } = await client.query({
            query: GET_LOGIN,
            variables: { email, password },
            errorPolicy: `ignore`,
          })
          if(data==null){
            setAlert({
              message: "Login Gagal",
              status: "error",
            });
            setOpenAlert(true);
          } else {
            localStorage.setItem("token", data.login.token);
            localStorage.setItem("id_user", data.login.id_user);
            setEmail("");
            setPassword("");
            router.push('/home')
          } 
        }   
      };
      const signup = () => {
        router.push('/register')
      };



    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        let regexpEmail = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");
        if (!regexpEmail.test(e.target.value)) {
          setEmailError("Email is invalid");
        } else {
          setEmailError("");
        }
      };
    
      const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        var len = e.target.value.length;
        if (len > 20) {
          setPasswordError("your password is too long");
        } else {
          setPasswordError("");
        }
      };
  return (
      <Box sx={{ 
          margin:"5% 10% 5% 10%"
       }}>
           <Box sx={{ 
               padding:"2% 5% 2% 5%",
            }}>
                <CustomH1 content='Login' />
           </Box>
           <Box sx={{ 
               width: "100%",
               height: "600px",
               border: "5px solid #C4C4C4",
               bordeRadius: "10%",
               padding: "7%",
               display:"flex",
               flexDirection:"column",
               gap:"10%",

            }}>
                <TextInput textLabel='Email' placeholder='jemi@gmail.com' type='text' onChange={(e) => handleEmail(e)} errorVal={emailError}/>
                <TextInput textLabel='Password' placeholder='Enter Your Password' type='password' onChange={(e) => handlePassword(e)} errorVal={passwordError} />
                <CustomButtonPrimary caption='Submit' width='30%' OnClick={fetchData} isDisabled={disabledVal}/>  
                <Box sx={{ 
                    margin:"0% 5% 0% 5%",
                    display:"flex",
                    flexDirection:"row",   
                    gap:"3px"                 
                 }}>
                     <CustomParagraph content="Don't have any account?"/>
                     <Typography sx={{ 
                         color:"#F34F51"
                      }} 
                      onClick={signup}>
                     {" "}Register
                     </Typography>
                </Box>     
            </Box>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert}>
                <Alert
                  onClose={handleCloseAlert}
                  color={alert.status}
                  sx={{ width: "100%" }}>
                  {alert.message}
                </Alert>
            </Snackbar>
      </Box>
  )
};

export default Login;
