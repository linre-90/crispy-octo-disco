import React from "react";
import {faTools} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Data to page not ready component
 * @param pageName - Page that is under construction
 */
type PageData = {
    pageName: string,
}

const NotReady:React.FC<PageData> = (props:PageData): React.ReactElement => {
    return(
        <div className="col-12 mt-5">
            <div className="row">
                <h1 className="col-12 text-center">{props.pageName} page is currently under contruction!</h1>
            </div>
            <div className="row mt-5">
                <div className= "col-12 text-center">
                    <FontAwesomeIcon className="fa-5x rotating" icon={faTools} ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export  {NotReady, PageData};