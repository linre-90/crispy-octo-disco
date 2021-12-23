import React, { useEffect, useState } from "react";
import { FC, ReactElement } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ErrorPage:FC = ():ReactElement => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        
        let interval = setInterval(() => {
            setTimer(timer - 1);
            clearInterval(interval);
        }, 1000)
    },[timer]);

    useEffect(() => {
        if(timer <= 0){
            window.location.href = "/"
        }
        
    }, [timer]);

    return(
        <div className="container text-center mt-5">
            <FontAwesomeIcon icon={faExclamationTriangle} size="10x"></FontAwesomeIcon>
            <h2>Something went wrong</h2>
            <h4>Redirecting back to home in {timer} s.</h4>
            <h5 className="text-secondary mt-5">If any questions send email to: <a className="text-secondary" href={"mailto:" + process.env.IN_CASE_EMERGENCY_EMAIL}>{process.env.IN_CASE_EMERGENCY_EMAIL}</a></h5>
        </div>
    );
}


export default ErrorPage;