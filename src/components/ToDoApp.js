import React from 'react';
import AddToDo from './AddToDo';
import ListToDos from './ListToDos';
import ClearToDos from './ClearToDos';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props)
        let toDos = window.localStorage.getItem("toDos")

        if (toDos) {
            toDos = JSON.parse(toDos)
        } else {
            toDos = []
        }
        
        this.state = {
            toDos
        }
    }
    onAddToDo(toDoValue) {
        this.setState({toDos: [...this.state.toDos, toDoValue]}, function(){
            let serializedToDos = JSON.stringify(this.state.toDos)
            window.localStorage.setItem("toDos", serializedToDos)
        })
    }
    onClickClear() {
        this.setState({toDos: []})
        window.localStorage.removeItem("toDos")
        
    }
    render() {
        return (
            <div>
                <AddToDo onAddToDo={this.onAddToDo.bind(this)} />
                <ListToDos list={this.state.toDos} />
                <ClearToDos onClickClear={this.onClickClear.bind(this)} />
            </div>
        )
    }
}

export default ToDoApp;