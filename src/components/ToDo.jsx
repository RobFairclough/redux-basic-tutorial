import React from "react";

const ToDo = ({ onClick, completed, text }) => {
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? "line-through" : "none"
            }}
        >
            {text}
        </li>
    );
};

export default ToDo;
