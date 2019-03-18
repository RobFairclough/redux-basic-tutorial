import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <ToDo
                    key={index}
                    {...todo}
                    onClick={() => onTodoClick(index)}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
