import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
    
    state={
        todos: [],
        todosToShow: 'all'
    };

    addTodo = (todo) => {
        //Create copy of array and passing it to newTodos
        //Taking our current state (keeping all values that we have in there) and adding it to "todo" at beginning 
        const newTodos = [todo, ...this.state.todos];

        this.setState({
            todos: newTodos
        });
    }

    toggleComplete =(id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    // Supposed to update
                    return {
                        ...todo, //this replaces the stuff that don't change (id, text)
                        // id: todo.id,
                        // text: todo.text,
                        complete: !todo.complete
                    };
                }
                else{
                    // Return no change, keep text the same
                    return todo;
                }
            })
        })
    }
    
    updateTodoToShow = (item) => {
        this.setState({
            todosToShow: item
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render(){
        let todos =[];

        if(this.state.todosToShow === 'all'){
            todos = this.state.todos;
        // } else if (this.state.todosToShow === 'active') {
        //     todos = this.state.todos.filter(item => !item.complete)
        } else if (this.state.todosToShow === 'completed') {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
        <div>
            <TodoForm onSubmit={this.addTodo}/>
            {/* {JSON.stringify(this.state.todos)} */}
            {todos.map(todo => (
                <Todo 
                    key ={todo.id} 
                    toggleComplete={() => this.toggleComplete(todo.id)}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                    todo={todo}/>
                ))}
            <br/>
            <div>Number of tasks left: {this.state.todos.filter(item => !item.complete).length}
            <div>Number of tasks to be completed: {this.state.todos.filter(item => item.complete).length}
            <br/>
            <div>
                <button onClick={() => this.updateTodoToShow('all')}>See all tasks</button>
                {/* <button onClick={() => this.updateTodoToShow('active')}>active</button> */}
                <button onClick={() => this.updateTodoToShow('completed')}>See completed tasks</button>
            </div>
            </div>
            </div>
        </div>
        );
    }
}