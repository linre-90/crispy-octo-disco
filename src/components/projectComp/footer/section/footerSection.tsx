import React, { FC, ReactElement } from "react";

type footerComponents = {
    header: string,
    children?: ReactElement | ReactElement[]
}

export const FooterSection:FC<footerComponents> = ({header, children}:footerComponents):ReactElement => {
    return(
        <div className=" pt-2 col-sm-12 col-md-6 col-lg-4 border-start border-bottom border-info">
            <h3>{header}</h3>
            {children}
        </div>
    )
}