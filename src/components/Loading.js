import React from "react";
export const Loading = (props) => {
    return (
        <>
            <div className="loading"></div>
            <p>{props.text}</p>
        </>
    )
}