import React from 'react';

class AddToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoValue : ""
        };
    }
    onChange(event) {
       let enteredValue = event.target.value;
       this.setState({toDoValue: enteredValue}) 
    }
    onSubmit(event) {
        event.preventDefault()
        this.props.onAddToDo(this.state.toDoValue)
        this.setState({toDoValue: ""})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input placeholder="Add To Do" type="text" value={this.state.toDoValue} onChange={this.onChange.bind(this)} />
                </form>
            </div>
        )
    }
}

export default AddToDo;