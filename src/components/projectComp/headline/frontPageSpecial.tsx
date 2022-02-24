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
        <div className="frontPageSpecialWrapper">
            <div className="row ">
                <p className="frontPageSpecial">{wordArray.words[0]}</p>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                    <p className="frontPageSpecial">{wordArray.words[1]}</p>   
                    <p className="frontPageSpecial">{wordArray.words[2]}</p>        
                </div>
            </div>
            <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                    <p className="frontPageSpecial">{wordArray.words[3]}</p>    
                </div>
            </div>
            <div className="row text-end">
                <p className="frontPageSpecial">{wordArray.words[4]}</p>            
            </div>
        </div>
    );
}