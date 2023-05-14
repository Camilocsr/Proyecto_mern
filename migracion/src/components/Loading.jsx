import React from "react";
import Error202 from "./Error202";
const Loading = ()=>{
    return (
        <>
        <div className="loading">
        <div className="circle darkmagenta"></div>
        <div className="circle darkblue"></div>
        <div className="circle blue"></div>
        </div><br></br>
        <Error202/>
        </>
    )
}

export default Loading;