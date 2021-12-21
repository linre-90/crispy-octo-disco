import React from "react";
import { NotReady } from "../components/stateless/NotReady/notReady";

const Contact:React.FC = ():React.ReactElement => {
    const componentReady = false;
    
    if(componentReady){
        return <div></div>
    }
    else{
        return <NotReady pageName="Contact"></NotReady>;
    }
}

export default Contact;