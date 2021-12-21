import React, { ReactElement, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {Link} from "gatsby"
import {navMenuLinkData} from "../../../Addresses";
import Backdrop from "../backdrop/Backdrop";
import {gsap} from "gsap"
import { useRef } from "react";

/**
 * Navmenu prop types
 */
interface navMenuProps{
    header: string,
    innerHeader: string,
    navLinks: Array<navMenuLinkData>
}

/**
 * Nav menu component for site
 * - Fixed pug with bootstrap data target reveal randomly not working, changed behaviour to work through react state.
 * @returns React element
 */
const NavMenu: React.FC<navMenuProps> = (props: navMenuProps): ReactElement => {
    const [navBarVisible, setnavBarVisible] = useState(false);
    
    // Navmenu navigation
    const navMenuRef = useRef(null);
    useEffect(() => {
        if(navBarVisible){
            gsap.timeline().to(navMenuRef.current, {startAt: {x:"-320", top: 0}, opacity: "1", x:0, display: "block"})
        }else if(!navBarVisible){
            gsap.timeline().to(navMenuRef.current, {opacity: "0", top: -200, display: "none"})
        }
    }, [navBarVisible])

    return(
        <div  className="sticky-top" >
            {navBarVisible && <div className="d-xl-none"><Backdrop></Backdrop></div>}
            <div id="navmenuContainer" ref={navMenuRef} className="d-xl-none">
                <div className="bg-dark p-4">
                    <h5 className="h4">{props.innerHeader}</h5>
                    <div className="navbar-nav">
                        <ul className="navlist">
                            {props.navLinks.map((x) => {
                                return(
                                <li key={x.text} className="nav-item">
                                <Link className={`nav-link ${x.active? "active": ""}`} to={x.url}> 
                                    {x.text}
                                        {x.active == true &&
                                            <span>
                                            <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
                                        </span> 
                                        }
                                </Link>
                            </li>)
                            })}
                        </ul>
                        <button className="btn btn-primary" onClick={ () => setnavBarVisible(!navBarVisible) } type="button">Close</button>
                    </div>
                </div>
            </div>
        <nav className="navbar navbar-dark bg-dark d-xl-none">
            <div className="container-fluid">

                <h1 className="navbar-brand mb-0 h1">{props.header}</h1>
                <button onClick={ () => setnavBarVisible(!navBarVisible) } className="navbar-toggler ms-auto" type="button" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </div>
    );
}

export {NavMenu, navMenuLinkData};

