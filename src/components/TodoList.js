import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    render() {
        return (
            <>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps} />
                ))}
            </>
        )
    }
}

export default TodoList