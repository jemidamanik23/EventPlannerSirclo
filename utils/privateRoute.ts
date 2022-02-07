import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/router";
import getToken from './getToken';



const PrivateRoute = async () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");

    if(localStorage.getItem("token")!==null){
        setToken(localStorage.getItem("token"))   
    } else{
        router.replace('/register')
    }
   
      
  };

  export default PrivateRoute;
