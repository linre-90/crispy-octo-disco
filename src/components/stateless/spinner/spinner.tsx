import React, { FC, ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type spinnerProps = {
    size: SizeProp,
    align: string
}
/**
 * General purpose spinner
 * @param props 
 * @returns 
 */
export const Spinner:FC<spinnerProps> = (props:spinnerProps):ReactElement => {
    let alignment = "";

    const spinnerRef = useRef(null);

    useEffect(() => {
        gsap.timeline().to(spinnerRef.current, {rotate: "+=360", repeat: -1, duration: 2});
    }, []);

    switch (props.align) {
        case "center":
            alignment = "text-center";
            break;
        case "end":
            alignment = "text-end"
            break;
        default:
            alignment = ""
            break;
    }

    return(
        <div className={alignment  + " mb-5"}>
            <p ref={spinnerRef}>
                <FontAwesomeIcon  size={props.size} icon={faSpinner}></FontAwesomeIcon>
            </p>
        </div>
    )
}

