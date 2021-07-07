import React from "react";

function Button(props) {


    return (
        <button className="homepageButtons btn btn-secondary" value={props.value} onClick={props.handleClick} >{props.text}</button>
    );
}


export default Button;