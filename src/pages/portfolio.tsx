import React from "react";
import { NotReady } from "../components/stateless/NotReady/notReady";

const Portfolio:React.FC = ():React.ReactElement => {
    const componentReady = false;
    
    if(componentReady){
        return (<div></div>)
    }
    else{
        return <NotReady pageName="Portfolio"></NotReady>;
    }
}

export default Portfolio;