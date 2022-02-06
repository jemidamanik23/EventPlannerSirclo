import { Box } from "@mui/material"
import { CustomButtonPrimary } from "../components/CustomButton/CustomButton"
import { CustomH1 } from "../components/CustomTypography/CustomTypography"
import { CustomParagraph } from "../components/CustomTypography/CustomTypography"
import { TextInput } from "../components/TextInput/TextInput"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { GET_PROFILE } from "../utils/queries"
import client from "../utils/apollo-client"


const ProfileEdit = () => {
    const [name, setName] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [disabledVal, setDisabled] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>("");
    const router = useRouter(); 

    useEffect(() => {
      // if(localStorage.getItem("token")!==null){
      //         setToken(localStorage.getItem("token"))          
      //     }else{
      //         router.replace('/login-page')
      //     }

          fetchData();
    }, []);  

    const fetchData = async () => {
        // if (name === "") {
        //   setNameError("Name is required");
        // } else if (email === "") {
        //   setEmailError("Email is required");
        // } else if (emailError === "") {
        //   setDisabled(true);    
          const { data } = await client.query({
            query: GET_PROFILE,
            variables: { id:9 },
            context: {
              headers: { 
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            },
          });
          console.log(data);
          
          
          router.push('/profile')
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

    return(
        <Box  sx={{ 
            margin:"5% 10% 5% 10%",
            width:"100wh",
         }}>
             <CustomH1 content="Edit Profile"/>
             <Box sx={{ 
                 padding: "5% ",
              }}>
                  <Box sx={{ 
                      display:"flex",
                      flexDirection : "column",
                      gap : "3vh",
                      justifyContent :"flex-start",
                      width: "70wh",
                   }}>
                       <TextInput textLabel="Name" placeholder="Shay Pattrick Cormac" type="text" onChange={(e) => handleName(e)} errorVal={nameError}/>
                       <TextInput textLabel="Birthday" placeholder="Enter your birthday" type="text"/>
                       <TextInput textLabel="Email" placeholder="shaycormac@gmail.com" type="text" onChange={(e) => handleEmail(e)} errorVal={emailError}/>
                       <TextInput textLabel="Gender" placeholder="male" type="text"/>
                       <TextInput textLabel="Address" placeholder="Enter your address" type="text"/>
                       <TextInput textLabel="Phone Number" placeholder="Enter your phone number" type="text"/>
                       <TextInput textLabel="Image URL" placeholder="Enter your profile picture url" type="text"/>
                       <CustomButtonPrimary width="30%" caption="SUBMIT" OnClick={fetchData} isDisabled={disabledVal} />
                  </Box>
             </Box>
        </Box>
    )
}
export default ProfileEdit