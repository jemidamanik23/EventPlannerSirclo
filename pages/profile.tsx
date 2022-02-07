import { Email, Router } from "@mui/icons-material";
import { Box } from "@mui/material"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CustomH1, CustomParagraph } from "../components/CustomTypography/CustomTypography"
import client from '../utils/apollo-client'
import { Users } from '../types/users'
import GetToken from "../utils/getToken";
import PrivateRoute from "../utils/privateRoute";
import { CustomButtonPrimary, CustomButtonSecondary } from "../components/CustomButton/CustomButton";

const Profile = () => {
    const [name, setName] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [token, setToken] = useState<string | null>("");
    const router = useRouter();    

    useEffect(() => {
        if(localStorage.getItem("token")!==null){
                setToken(localStorage.getItem("token"))          
            }else{
                router.replace('/login-page')
            }
      }, []);  

      const goEdit = () => {
        router.push('/profile-edit')
      };



    return(
        <Box  sx={{ 
            margin:"5% 10% 5% 10%"
         }}>
             <CustomH1 content="Profile"/>
             <Box sx={{ 
                 display: "flex",
                 flexDirection :"column-reverse",                 
                 justifyContent :"center",
                 alignItems :"center",
                 margin: "3% 0%"
              }}>
                  
                 <Box >
                    <img
                        style={{
                        height: "200px",
                        width: "200px",
                        maxWidth: "140px",
                        minWidth: "250px",
                        }}
                        src={image}
                        alt='vga'
                    />
                 </Box>
             </Box>
             
             <Box sx={{ 
                 padding: "5%",
                 display:"flex",
                 flexDirection : "column",
                 gap : "5vh",
              }}>
                  <Box sx={{ 
                      display:"flex",
                      flexDirection : "row",
                      gap : "5%",
                      justifyContent :"flex-start",
                   }}>
                       <Box sx={{ 
                           width: "50%",
                           display:"flex",
                           flexDirection : "column",
                            gap : "5vh",                            
                        }}>
                            <CustomParagraph content="Name" />
                            <CustomParagraph content="Birthday" />
                            <CustomParagraph content="Email" />
                            <CustomParagraph content="Password" />
                            <CustomParagraph content="Gender" />
                            <CustomParagraph content="Address" />
                            <CustomParagraph content="Phone Number" />
                            
                       </Box>
                       <Box sx={{ 
                           width: "50%",
                           display:"flex",
                           flexDirection : "column",
                            gap : "5vh",
                        }}>
                            <CustomParagraph content={name} />
                            <CustomParagraph content={birthday} />
                            <CustomParagraph content={email} />
                            <CustomParagraph content={password}/>
                            <CustomParagraph content={gender} />
                            <CustomParagraph content={address}/>
                            <CustomParagraph content={phone} /> 
                       </Box>
                       
                  </Box>
                  <Box sx={{ 
                      display:"flex",
                      flexDirection: "row", 
                   }}>
                      <Box sx={{ 
                          width:"50%"
                       }}>
                      <CustomButtonSecondary width="30%" caption="EDIT" OnClick={goEdit}/>
                      </Box>
                      <Box sx={{ 
                          width:"50%",
                          textAlign:"end"
                       }}>
                      <CustomButtonPrimary width="30%" caption="DELETE"/>
                      </Box>
                       
                  </Box>

             </Box>

        </Box>
    )
}

export default Profile