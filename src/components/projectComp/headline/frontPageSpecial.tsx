import React, { ReactElement } from "react";


/**
 * Special props for frontpagespecial
 */
type frontPageSpecialProps = {
    words: string[]
}


/**
 * Stateless react component.
 * @param props frontPageSpecialProps
 * @returns Headline component 12 cols wide, text centered.
 */
export const FrontPageSpecial : React.FC<frontPageSpecialProps> = (wordArray: frontPageSpecialProps):ReactElement => {
    return(
        <div className="pb-3">
                <p className="frontPageSpecial">{wordArray.words[0]}</p>
                <p className="frontPageSpecial">{wordArray.words[1]}</p>   
                <p className="frontPageSpecial text-center">{wordArray.words[2]}</p>    
                <p className="frontPageSpecial">{wordArray.words[3]}</p>    
                <p className="frontPageSpecial text-end">{wordArray.words[4]}</p>       
        </div>
    );
}