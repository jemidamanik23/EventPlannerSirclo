import React, { useState } from 'react';
import { Box } from '@mui/system';
import { CustomH1, CustomParagraph } from '../components/CustomTypography/CustomTypography';
import { TextInput } from '../components/TextInput/TextInput';
import { CustomButtonPrimary, CustomButtonSecondary } from '../components/CustomButton/CustomButton';
import { Typography } from '@mui/material';

const Register = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [disabledVal, setDisabled] = useState<boolean>(false);


    const fetchData = async () => {
        if (name === "") {
          setNameError("Name is required");
        } else if (email === "") {
          setEmailError("Email is required");
        } else if (email === "") {
          setPasswordError("Password is required");
        } else if (emailError === "") {
          setDisabled(true);    
          
          
        }
      };
      const login = () => {
      };    

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);
        var len = e.target.value.length;
        if (len > 20) {
          setNameError("your name is too long");
        } else {
          setNameError("");
        }
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
          margin:"5px 200px 5px 200px"
       }}>
           <Box sx={{ 
               padding:"2% 5% 2% 5%",
            }}>
                <CustomH1 content='Register' />
           </Box>
           <Box sx={{ 
               width: "1000px",
               height: "600px",
               border: "5px solid #C4C4C4",
               bordeRadius: "10%",
               padding: "7%",
               display:"flex",
               flexDirection:"column",
               gap:"10%",

            }}>
                <TextInput textLabel='Name' placeholder='Enter your fullname' type='text' onChange={(e) => handleName(e)} errorVal={nameError}/>
                <TextInput textLabel='Email' placeholder='jemi@gmail.com' type='text' onChange={(e) => handleEmail(e)} errorVal={emailError}/>
                <TextInput textLabel='Password' placeholder='Enter Your Password' type='password' onChange={(e) => handlePassword(e)} errorVal={passwordError} />
                <CustomButtonPrimary caption='Submit' width='30%' OnClick={fetchData} isDisabled={disabledVal}/>  
                <Box sx={{ 
                    margin:"0% 5% 0% 5%",
                    display:"flex",
                    flexDirection:"row",                    
                 }}>
                     <CustomParagraph content='Already have an account? '/>
                     <Typography onClick={login}>
                         Login
                     </Typography>
                     <span onClick={login} style={{ color: "#F34F51" }}>{" "} Login {" "}</span>{" "}
                    
                </Box>  
                       
            </Box>

           

      </Box>
  )
};

export default Register;
