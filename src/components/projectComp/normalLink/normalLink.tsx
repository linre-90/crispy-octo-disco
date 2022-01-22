import React, { FC, ReactElement } from "react";

type normalProp = {
    text:string,
    url: string
}

export const NormalLink:FC<normalProp> = (props):ReactElement => {
    return (
        <p>- <a className="text-info" href={props.url}>{props.text}</a> -</p>
    )
}