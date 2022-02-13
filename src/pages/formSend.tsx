import React, { useEffect, useState, useRef } from "react";
import { FC, ReactElement } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {gsap} from "gsap";
import { CookieBanner } from "../components/projectComp/cookie/cookie";

const FormSend:FC = ():ReactElement => {
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

    const iconRef = useRef();
    useEffect(() => {
        gsap.timeline().to(iconRef.current, { startAt: {scale: "1", opacity: "1"}, opacity: "0", scale: "0", repeat: -1, duration: "14" });
    },[]);

    return(
        <div className="container text-center mt-5">
            <CookieBanner></CookieBanner>

            <div ref={iconRef}>
                <FontAwesomeIcon icon={faEnvelope} size="8x"></FontAwesomeIcon>
            </div>
            
            <h2>Form received, thank you for the feedback!</h2>
            <h4>Redirecting back to home in {timer} s.</h4>
        </div>
    );
}


export default FormSend;