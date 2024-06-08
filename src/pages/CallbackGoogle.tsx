import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CallbackGoogle = () => {
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const accessToken = window.location.hash?.split("=")[1]?.split('&')[0];
            console.log(accessToken)
            await sessionStorage.setItem("google_access_token", accessToken);
            navigate("/"); 
        })();
    }, []);
    return (<div>Callback</div>);
}
export default CallbackGoogle;