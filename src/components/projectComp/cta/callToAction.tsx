import React, { ReactElement } from "react";
import { Link } from "gatsby";

/**
 * Call to action props
 */
interface CTAProps{
    text: string
    url: string
}

/**
 * Call to action button component
 * @param props - url: Url of the link
 * @param props - text: link text
 * @returns React component
 */
export const Cta: React.FC<CTAProps> = (props: CTAProps): ReactElement => {
    return(
        <div className="col">
            <Link type="button" className="btn btn-warning btn-lg rounded-0" to={props.url}>
                <span className="text-primary"><b>{props.text}</b></span>
            </Link>
        </div>
    );
}

