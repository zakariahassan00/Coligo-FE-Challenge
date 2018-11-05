import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./common/loading";
import Todo from "./common/todo";
import SectionTop from "./common/sectionTop";
import { getTodos } from "../actions/todosAction";

class WhatsDue extends Component {
  // getting the fake data from redux
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="whatsDue">
        <div className="todo_head">
          <SectionTop
            title={"What`s Due"}
            mssg={'Somtimes "LATER" becomes "NEVER. Go Now!'}
            link={""}
          />
        </div>
        {/* first check todos whether its ture or false  */}
        {todos ? (
          // if the todos is true render Todos
          <div className="todo_body">
            {todos.map(todo => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </div>
        ) : (
          // if the todos is false render Loading
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.data
});

export default connect(
  mapStateToProps,
  { getTodos }
)(WhatsDue);
