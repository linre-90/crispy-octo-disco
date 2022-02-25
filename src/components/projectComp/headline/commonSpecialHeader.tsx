import React, {} from "react";



/**
 * Props for this component
 */
type CommonSpecialHeadlineProps = {
    header: string;
}

export const CommonSpecialHeadline:React.FC<CommonSpecialHeadlineProps> = (headline: CommonSpecialHeadlineProps):React.ReactElement => {
    return(
        <div>
            <p className="commonSpecialHeadline">{headline.header}</p>
        </div>
    )
}