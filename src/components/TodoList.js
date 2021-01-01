import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
    return (
        <>
            {props.todos.map(todo => (
                <TodoItem key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps} />
            ))}
        </>
    )
}

export default TodoList