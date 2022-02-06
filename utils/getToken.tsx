import React, { useEffect, useState } from "react";

function getToken() {
    const [auth, setAuth] = useState<string|null>("");
    let token: string | null = "";

    useEffect(()=> {
        if(localStorage.getItem("token") !== null){
            setAuth(localStorage.getItem("token"))
        }
        token = auth;
    }, [])

    return(
        token
    );
}

export default getToken;