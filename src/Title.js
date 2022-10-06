import React from "react";

export default function Title() {


    return (
        <h1 style={h1Style}>stars<span style={spanStyle}>.css</span></h1>
    )
}

const h1Style = {
    fontSize: '60px',
    color: 'white',
}

const spanStyle = {
    color: 'yellow',
}