import React from "react";

const Child1=({count,handleAdd,handleReduce}) => {
    return(
        <>
        <h1>Counter Value is {count}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        </>
    )
}

export default Child1; 