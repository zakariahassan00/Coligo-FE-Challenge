import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todosAction';

class WhatsDue extends Component {

    // getting the fake data from redux
    componentWillMount() {
        this.props.getTodos();
    }

    render() {
        return(
            <div className="whatsDue">
                <div className="todo_head">
                    <h3>What`s Due</h3>
                    <p>Somtimes "LATER" becomes "NEVER. Go Now!</p>
                    <a href="/">All</a>
                </div>

                
                {/* first check props.tods whether its ture or false  */}
                {this.props.todos ?

                    // if the props.todos is true render the content
                    (<div className="todo_body">
                        {this.props.todos.map( (todo) => (
                            <div className="todo_content" key={todo.id}>
                                <div className="todo_title">
                                    <h4><span><i className={todo.img}></i></span> {todo.todoName}</h4>
                                </div>
                                <div className="todo_info">
                                    <p>Course: {todo.course}</p>
                                    <p>Topic : {todo.topic}</p>
                                    <p>Due To: {todo.dueTo}</p>
                                </div>
                                <button type="submit" id="todo_btn">{todo.btn}</button>
                            </div>
                        ))}
                    </div>) :

                // if the props.todos is false render Loading
                (
                    <div id="loading"><h1>Loading...</h1></div>
                )
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos : state.todos.data
})

export default connect(mapStateToProps , {getTodos}) (WhatsDue) 