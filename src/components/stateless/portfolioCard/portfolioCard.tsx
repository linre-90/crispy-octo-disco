import React, { FC, ReactElement } from "react";
import {Link} from "gatsby";


type cardProps = {
    appName: string,
    appDescription: string,
    imgUrl: string
}

export const PortfolioCard:FC<cardProps> = (props:cardProps):ReactElement => {
    return (
        <div className="p-3">
            <div className="card bg-dark border-secondary">
                <img className="" src={props.imgUrl} alt="Image showing application"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.appName}</h5>
                    <p className="card-text">{props.appDescription}</p>
                    <Link className="btn btn-primary" to={`/${props.appName.replace(" ", "").toLowerCase()}`}>Check out</Link>
                </div>
            </div>
        </div>
    );
}