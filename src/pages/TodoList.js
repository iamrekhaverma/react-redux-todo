import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");
  const [errMsg, setErrMsg] = useState("");

  //Handle onChange event
  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  const addNewTodo = () => {
    if (inputTodo.trim().length > 1) {
      setErrMsg("");
      let newTodoObject = {
        id: Math.random(),
        content: inputTodo,
      };
      dispatch({ type: "ADD_TODO", payload: newTodoObject });
      setInputTodo("");
    } else {
      setErrMsg("Please input something...");
    }
  };

  return (
    <div>
      <h3>Todo List</h3>
      {todoList.length > 0 && (
        <ul>
          {todoList.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </ul>
      )}
      <div>
        <p>{errMsg}</p>
        <div>
          <input
            onChange={handleInput}
            value={inputTodo}
            placeholder="Add todo..."
            id="todo-input"
            type="text"
          />
        </div>
        <button onClick={addNewTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoList;
