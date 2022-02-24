import React, { FC, ReactElement } from "react";  
import { Headline } from "../headline/headline";

type sectionProps = {
    header: string,
    text: string,
    headerSize: number,
    children?: JSX.Element | JSX.Element[]
}

/**
 * General Text section 
 * @param param0 
 * @returns 
 */
export const TextSection:FC<sectionProps> = ({header, text, headerSize, children}: sectionProps):ReactElement => {
    return(
        <div className="row ">
            <div className="col-1"></div>
            <div className="col-10 align-self-center pt-3 pb-5 border-info border border-bottom-0 border-start-0">
                <Headline text={header} hSize={headerSize}></Headline>
                <p className="text-secondary">{text}</p>
                {children}
            </div>
            <div className="col-1"></div>
        </div>
    )
}