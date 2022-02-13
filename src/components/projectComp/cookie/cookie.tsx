import { Link } from "gatsby";
import React, { FC, ReactElement, useEffect, useState } from "react";


/**
 * Cookie info pop up.
 * @returns react cookie component
 */
export const CookieBanner:FC = ():ReactElement => {
    
    const cookieVar:string = "cookieOk";
    let [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if(localStorage.getItem(cookieVar) === "ok"){
            setShouldRender(false);
        }
    },[])

    const acceptCookie = () => {
        setShouldRender(false);
        localStorage.setItem(cookieVar, "ok");
    }
    
    return(
        <div>
            {shouldRender &&
            
            <div className="bg-secondary border border-secondary p-4 fixed-top">

                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <h1 className="text-warning">Cookies</h1>
                            <p className="text-warning">
                                No unnescessary cookies for you! Check our <Link type="btn" className="btn btn-outline-warning btn-sm" to="/privacypolicy" >privacy policy</Link>     
                            </p>
                            <button onClick={() => acceptCookie()} type="button" className="btn btn-primary btn-lg">I accept</button>        
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

