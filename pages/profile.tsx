import { Email } from "@mui/icons-material";
import { Box } from "@mui/material"
import { useState, useEffect } from "react";
import { CustomH1, CustomParagraph } from "../components/CustomTypography/CustomTypography"

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



    useEffect(() => {
        setImage("")       
      }, []);  


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
                           height : "40vh",
                            gap : "10%",                            
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
                           height : "40vh",
                            gap : "10%",
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

             </Box>

        </Box>
    )
}

export default Profile