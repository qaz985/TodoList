import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

class Todo extends React.Component {
    state = {
        todoList: []
    };
    render() {
        return(
            <Container>
                <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress} />
                <TodoList todoList={this.state.todoList}></TodoList>
            </Container>
        );
    }

    componentDidMount() {
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) || []
        });
    }

    handleInputKeyPress = event => {
        const {
            target: {value}
        } = event;
        if (event.key === "Enter") {
            this.setState(state => ({todoList: [...state.todoList, value]}),
            () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
            event.target.value="";
        }
    };
}