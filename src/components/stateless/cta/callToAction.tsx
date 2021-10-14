import React, { ReactElement } from "react";

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
const cta: React.FC<CTAProps> = (props: CTAProps): ReactElement => {
    return(
        <div className="col">
            <a type="button" className="btn btn-outline-primary btn-lg" href={props.url}>
                {props.text}
            </a>
        </div>
    );
}

export default cta;