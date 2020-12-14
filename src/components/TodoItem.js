import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoItem = (props) => {
  // Fetch data from state selector
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  // Remove todo
  const removeTodoItem = (todoId) => {
    let filteredTodos = todoList.filter((item) => item.id !== todoId);
    dispatch({ type: "REMOVE_TODO", payload: filteredTodos });
  };

  return (
    <li key={props.item.id}>
      {props.item.content}
      <span
        onClick={() => {
          removeTodoItem(props.item.id);
        }}
      >
        <button>clear</button>
      </span>
    </li>
  );
};

export default TodoItem;
