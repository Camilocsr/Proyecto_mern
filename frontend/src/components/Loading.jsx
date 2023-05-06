import React from "react";
import Error202 from "./Error202";
const Loading = ()=>{
    return (
        <>
        <div class="loading">
        <div class="circle darkmagenta"></div>
        <div class="circle darkblue"></div>
        <div class="circle blue"></div>
        </div><br></br>
        <Error202/>
        </>
    )
}

export default Loading;