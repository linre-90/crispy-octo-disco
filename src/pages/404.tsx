import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { CookieBanner } from "../components/projectComp/cookie/cookie";


const NotFoundPage: React.FC = ():React.ReactElement => {

  return (
    <div className="container text-center mt-5">
      <CookieBanner></CookieBanner>

      <FontAwesomeIcon icon={faTimesCircle} size="10x"></FontAwesomeIcon>
      <h1>Page does not exists!</h1>
      <Link className="text-secondary" to="/">Go to home page</Link>
    </div>
    
  );
}

export default NotFoundPage
