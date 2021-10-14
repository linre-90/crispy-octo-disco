import React, { ReactElement } from "react";


/**
 * props type for headline component
 */
interface HeaderProps{
    text: string,
    hSize: number
}

/**
 * Stateless react component.
 * @param props HeaderProps{ text:string, hSize: number[1-6] }
 * @returns Headline component 12 cols wide, text centered.
 */
const headline : React.FC<HeaderProps> = (props: HeaderProps):ReactElement => {
    const CustomTag = `h${props.hSize}` as keyof JSX.IntrinsicElements; // Define h1-h6
    return(
        <div className="col-12">
            <CustomTag className="text-center">
                {props.text}
            </CustomTag>
        </div>
    );
}

export default headline;