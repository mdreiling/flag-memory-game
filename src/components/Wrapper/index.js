import React from "react";
import "./index.css"

function Wrapper(props) {
    return <div className="wrapper row z-depth-4">{props.children}</div>;
}

export default Wrapper;