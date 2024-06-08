import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem("google_access_token") === undefined || !sessionStorage.getItem("google_access_token")){
      navigate("/auth/google");
    }
  },[])
  return (
     <h1>customhook</h1>
  )
}

export default useLogin
