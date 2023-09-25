import React from "react";

const Button =({label,func}) => {
    return(
        <button onClick={() => func()}>{label}</button>
    )
}

export default Button