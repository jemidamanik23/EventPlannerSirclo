import { Box } from "@mui/material"
import { CustomButtonPrimary } from "../components/CustomButton/CustomButton"
import { CustomH1 } from "../components/CustomTypography/CustomTypography"
import { CustomParagraph } from "../components/CustomTypography/CustomTypography"
import { TextInput } from "../components/TextInput/TextInput"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { EDIT_PROFILE, GET_PROFILE } from "../utils/queries"
import client from "../utils/apollo-client"
import { ApolloError, useMutation } from "@apollo/client"
import { alertType } from "../types/users"
import Header from "../components/Header/Header"
import Footer from "../components/Footer"


const ProfileEdit = () => {
    const [name, setName] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [id, setId] = useState<string|null>("");
    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [birthdayError, setBirthdayError] = useState<string>("");
    const [genderError, setGenderError] = useState<string>("");
    const [addressError, setAddressError] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [imageError, setImageError] = useState<string>("");
    const [disabledVal, setDisabled] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>("");
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alert, setAlert] = useState<alertType>({
      message: "",
      status: "info",
    });
    const router = useRouter(); 
    let idUser: number|string|null  ;
    const [editProfile, { loading: loadingRegister, error: errorRegister, data: dataRegister}] = useMutation(EDIT_PROFILE)

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
              setToken(localStorage.getItem("token"))       
              setId(localStorage.getItem("id_user"));
              fetchData();   
          }else{
              router.replace('/login-page')
          }

      
    }, []);  

    const fetchData = async () => {
      const { data } = await client.query({
        query: GET_PROFILE,
        variables: {id: localStorage.getItem("id_user")},
        context: {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
      })

      setName(data.usersById.name)
      setEmail(data.usersById.email)
      setBirthday(data.usersById.birth_date)
      setGender(data.usersById.gender)
      setAddress(data.usersById.address)
      setPhone(data.usersById.phone_number)
      setImage(data.usersById.photo)
      setPassword(data.usersById.password)
    };

    const handleEdit = async() =>{
      editProfile(
      {variables: 
        {
          name: name, 
          email: email, 
          gender: gender,
          birth_date: birthday,
          phone_number: phone,
          photo: image,
          address: address,
          password: password,
          id: id,
        },
        onCompleted: (data)=> {
          console.log(data);
          setName("")
          setEmail("")
          setPassword("")
          router.push('/home')
        },
        onError:(error:ApolloError)=>{
          console.log(error.message);
        },
        context: {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      })

      if (dataRegister!=null) {
        setAlert({
          message: "Register Berhasil",
          status: "success",
        });
        setOpenAlert(true);
      }
      
      router.push('/profile')
    }

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

    const handleBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setBirthday(value);
      var len = e.target.value.length;
      if (len > 30) {
        setBirthdayError("your birthday is too long");
      } else {
        setBirthdayError("");
      }
    };

    const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setGender(value);
      var len = e.target.value.length;
      if (value !== "Male" && value!=="Female") {
        setGenderError("your gender is invalid");
      } else {
        setGenderError("");
      }
    };

    const handleAddres = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAddress(value);
      var len = e.target.value.length;
      if (len > 30) {
        setAddressError("your address is too long");
      } else {
        setAddressError("");
      }
    };

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPhone(value);
      var len = e.target.value.length;
      if (len > 20) {
        setPhoneError("your number is too long");
      } else {
        setPhoneError("");
      }
    };

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setImage(value);
      var len = e.target.value.length;
      if (len > 100) {
        setImageError("your image url is too long");
      } else {
        setImageError("");
      }
    };

    return(
      <Box>
        <Header isHidden={true}/>
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
                       <TextInput textLabel="Name" placeholder="Shay Pattrick Cormac" type="text" onChange={(e) => handleName(e)} errorVal={nameError} value={name}/>
                       <TextInput textLabel="Birthday" placeholder="Enter your birthday" type="text" onChange={(e) => handleBirthday(e)} errorVal={birthdayError} value={birthday}/>
                       <TextInput textLabel="Email" placeholder="shaycormac@gmail.com" type="text" onChange={(e) => handleEmail(e)} errorVal={emailError} value={email}/>
                       <TextInput textLabel="Gender" placeholder="male" type="text" onChange={(e) => handleGender(e)} errorVal={genderError} value={gender}/>
                       <TextInput textLabel="Address" placeholder="Enter your address" type="text" onChange={(e) => handleAddres(e)} errorVal={addressError} value={address}/>
                       <TextInput textLabel="Phone Number" placeholder="Enter your phone number" type="text" onChange={(e) => handlePhone(e)} errorVal={phoneError} value={phone}/>
                       <TextInput textLabel="Image URL" placeholder="Enter your profile picture url" type="text" onChange={(e) => handleImage(e)} errorVal={imageError} value={image}/>
                       <CustomButtonPrimary width="30%" caption="SUBMIT" OnClick={handleEdit} isDisabled={disabledVal} />
                  </Box>
             </Box>
        </Box>
        <Footer/>
        </Box>
    )
}
export default ProfileEdit