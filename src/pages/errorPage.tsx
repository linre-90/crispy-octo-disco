import React, { useEffect, useState } from "react";
import { FC, ReactElement } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CookieBanner } from "../components/projectComp/cookie/cookie";
import { Helmet } from "react-helmet";



const ErrorPage:FC = ():ReactElement => {
    const [timer, setTimer] = useState(30);

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
            <Helmet>
                <title>JL - Portfolio something went wrong</title>
                <meta 
                    name="description" 
                    content="If you receive this page something went wrong."
                />
            </Helmet>

            <CookieBanner></CookieBanner>

            <FontAwesomeIcon icon={faExclamationTriangle} size="10x"></FontAwesomeIcon>
            <h2>Something went wrong</h2>
            <h4>Redirecting back to home in {timer} s.</h4>
            <h5 className="text-secondary mt-5">If any questions or want to report bug send email to: <a className="text-secondary" href={"mailto:" + process.env.IN_CASE_EMERGENCY_EMAIL}><u>{process.env.IN_CASE_EMERGENCY_EMAIL}</u></a> with description.</h5>
            <ul>
                <i>Recommended info</i>
                <li>what page lead here</li>
                <li>Error message if any</li>
                <li>Short description what happened</li>                
            </ul>
        </div>
    );
}


export default ErrorPage;