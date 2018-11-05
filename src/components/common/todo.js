import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo_content">
      <div className="todo_title">
        <h4>
          <span>
            <i className={todo.img} />
          </span>{" "}
          {todo.todoName}
        </h4>
      </div>
      <div className="todo_info">
        <p>Course: {todo.course}</p>
        <p>Topic : {todo.topic}</p>
        <p>Due To: {todo.dueTo}</p>
      </div>
      <button type="submit" id="todo_btn">
        {todo.btn}
      </button>
    </div>
  );
};

export default Todo;
