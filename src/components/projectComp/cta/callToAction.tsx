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
            <Link type="button" className="btn btn-secondary btn-lg" to={props.url}>
                {props.text}
            </Link>
        </div>
    );
}

