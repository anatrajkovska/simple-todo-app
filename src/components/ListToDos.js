import React from "react";

function ListToDos(props) {
    return (
        <ul>
            {props.list.map(function(item) {
                return (
                    <li>{item}</li>                    
                )
            })}
        </ul>
    )
}

export default ListToDos;