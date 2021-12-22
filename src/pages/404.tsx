import * as React from "react"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "gatsby"



const NotFoundPage: React.FC = ():React.ReactElement => {

  return (
    <div className="container text-center mt-5">
      <FontAwesomeIcon icon={faTimesCircle} size="10x"></FontAwesomeIcon>
      <h1>Page does not exists!</h1>
      <Link className="text-secondary" to="/">Go to home page</Link>
    </div>
    
  );
}

export default NotFoundPage
