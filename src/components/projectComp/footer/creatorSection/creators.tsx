import React from "react";
import { FC, ReactElement } from "react";

type creatorProp = {
    name:string,
    url: string
}

/**
 * Component to display people who created images et.
 * @returns react component presenting people who's work is used in project.
 */
export const Creator:FC<creatorProp> = (props:creatorProp):ReactElement => {
    return(
        <div>
            <p key={props.name} >- <a href={props.url}>{props.name}</a> -</p>
        </div>
    )
}

