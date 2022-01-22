import React, { FC, ReactElement } from "react";

type footerComponents = {
    header: string,
    children?: ReactElement | ReactElement[]
}

export const FooterSection:FC<footerComponents> = ({header, children}:footerComponents):ReactElement => {
    return(
        <div className="col-sm-12 col-md-6 col-lg-4">
            <h3>{header}</h3>
            {children}
            <hr className="d-sm-block d-md-none" />
        </div>
    )
}