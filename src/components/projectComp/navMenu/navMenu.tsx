import React, { ReactElement, useEffect, useState, useRef } from "react";
import { Link } from "gatsby"
import { gsap } from "gsap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import type {navMenuLinkData} from "../../../Addresses"
import { Backdrop } from "../backdrop/Backdrop";
import {StaticImage} from "gatsby-plugin-image";


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
        <div className="" >
            {navBarVisible && <div className="d-xl-none"><Backdrop></Backdrop></div>}
            <div id="navmenuContainer" ref={navMenuRef} className="d-xl-none">
                <div className="bg-primary p-4">
                    <h5 className="h4 border-info border-bottom border-start ps-2 pb-2">{props.innerHeader}</h5>
                    <div className="navbar-nav">
                        <ul className="navlist">
                            {props.navLinks.map((x) => {
                                return(
                                <li key={x.text} className="nav-item border-info border-start mb-2 ps-2">
                                <Link className={`text-secondary nav-link  ${x.active? "active": ""}`} to={x.url}> 
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
                        <div className="border-info border-end border-top pt-2">
                            <div className="row">
                                <div className="col-6"></div>                    
                                <button className="btn btn-secondary col-5" onClick={ () => setnavBarVisible(!navBarVisible) } type="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <nav className="navbar navbar-light d-xl-none border-bottom border-info">
            <div className="container-fluid">
                <h1 className="navbar-brand mb-0 h1 ps-2 border-info border-start border-bottom">{props.header}</h1>
                <button onClick={ () => setnavBarVisible(!navBarVisible) } className="navbar-toggler ms-auto border-danger border-top-0 border-bottom-0" type="button" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FontAwesomeIcon icon={faEllipsisH} className="text-danger"></FontAwesomeIcon>
                    </span>
                </button>
            </div>
        </nav>

        {/*DESKTOP NAV -------->*/}
        <nav className="navbar navbar-expand-xl navbar-ligth d-none d-xl-block">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <StaticImage src="../../../images/icon.png" width={50} height={50} alt="Main Logo" className="d-inline-block align-text-top"></StaticImage>
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        {props.navLinks.map((x) => {
                            return(
                            <li key={x.text} className="nav-item px-4">
                            <Link className={`nav-link text-secondary border-info border-bottom border-end ${x.active? "active": ""}`} to={x.url}> 
                                {x.text}
                            </Link>
                        </li>)
                        })}
                    </ul>
                </div>
            </div>
            
        </nav>

    </div>
    );
}

export {NavMenu, navMenuLinkData};

