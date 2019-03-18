import { connect } from "react-redux";
import ToDoList from "../components/ToDoList";
import { toggleTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => {
        dispatch(toggleTodo(id));
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);

export default VisibleTodoList;
