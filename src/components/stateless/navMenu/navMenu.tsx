import React, { ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {Link} from "gatsby"
import {navMenuLinkData} from "../../../Addresses";

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
 * @returns React element
 */
const NavMenu: React.FC<navMenuProps> = (props: navMenuProps): ReactElement => {
    return(
        <div className="sticky-top">
        <div className="collapse" id="navbarToggleExternalContent">
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
                </div>
            </div>
        </div>
        <nav className="navbar navbar-dark bg-dark d-xl-none">
          <div className="container-fluid">
              <h1 className="navbar-brand mb-0 h1">{props.header}</h1>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
    </div>
    );
}

export {NavMenu, navMenuLinkData};

