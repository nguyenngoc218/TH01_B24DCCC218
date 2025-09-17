import React from 'react';
const ColorBox = (props) => {
    return (
        <button
            style={{
                height: "40px",
                width: "auto",
                border: "1px solid #000",
                color: "black",
                backgroundColor: "white",
                fontSize: "14px",
            }}
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default ColorBox;