import React, { Component } from 'react';

class WhatsDue extends Component {
    state = {}

    componentDidMount() {
        // when the component mount get the data from the fake quizes from fakeAnnouncmentService
        const todos = this.fakeQuizesService ();
        this.setState({todos});
    }

    fakeQuizesService () {
        const fakeData = [
        {
            todo: 'quiz',
            todoName: 'Unit 2 Quiz',
            img : 'fas fa-hourglass-half',
            course: 'Physics 02',
            topic : 'Unit 2 Motion and forces',
            dueTo: '20 Dec 2017 - 09:00 PM',
            btn: 'Solve Assignment'
        },
        {
            todo: 'Assigmment',
            todoName: '12 - 12 Assignment',
            img : 'fas fa-clipboard-check',
            course: 'Arabic K12',
            topic : 'الوحده الثانيه - الافعال',
            dueTo: '20 Dec 2017 - 09:00 PM',
            btn: 'Solve Assignment'
        }];
        return fakeData;    
    }

    render() {
        return(
            <div className="whatsDue">
                <div className="todo_head">
                    <h3>What`s Due</h3>
                    <p>Somtimes "LATER" becomes "NEVER. Go Now!</p>
                    <a href="#">All</a>
                </div>
                
                    {
                        this.state.todos ? (
                            <div className="todo_body">
                                {this.state.todos.map( (todo) => (
                                    <div className="todo_content">
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
                            </div>
                        ) :
                        (
                            <div id="loading"><h1>Loading...</h1></div>
                        )


                    }

                </div>
        )
    }
}

export default WhatsDue 