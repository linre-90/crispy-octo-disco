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
            
            <div className="bg-info p-4 fixed-top">

                <div className="container border border-start-0 border-bottom-0 p-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 border-start">
                            <h1 className="text-secondary">Cookies</h1>
                            <p className="text-secondary">
                                No unnescessary cookies for you! Check our <Link type="btn" className="btn btn-outline-danger btn-sm" to="/privacypolicy" >privacy policy</Link>     
                            </p>
                            <button onClick={() => acceptCookie()} type="button" className="btn btn-danger btn-lg"><b className="text-primary">I accept</b></button>        
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

