import React, { ReactElement, FC } from "react";
import { NotReady } from "../components/projectComp/NotReady/notReady";

const Blog:FC = ():ReactElement => {
    const componentReady = false;

    if(componentReady){
        return <div></div>
    }
    else{
        return <NotReady pageName="Blog"></NotReady>;
    }
}

export default Blog;

