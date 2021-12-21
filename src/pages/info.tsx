import React from "react";
import { NotReady } from "../components/stateless/NotReady/notReady";

const Info:React.FC = ():React.ReactElement => {
    const componentReady = false;
    
    if(componentReady){
        return (<div></div>)
    }
    else{
        return <NotReady pageName="Info"></NotReady>;
    }
}

export default Info;