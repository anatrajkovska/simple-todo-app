import React from 'react';
import AddToDo from './AddToDo';
import ListToDos from './ListToDos';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDos : []
        }
    }
    onAddToDo(toDoValue) {
        this.setState({toDos: [...this.state.toDos, toDoValue]})
    }
    render() {
        return (
            <div>
                <AddToDo onAddToDo={this.onAddToDo.bind(this)} />
                <ListToDos list={this.state.toDos} />
            </div>
        )
    }
}

export default ToDoApp;