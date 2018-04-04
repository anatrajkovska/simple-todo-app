import React from "react";

function ListToDos(props) {
    return (
        <ul>
            {props.list.map(function(item, i) {
                return (
                    <li key={i}>{item}</li>                    
                )
            })}
        </ul>
    )
}

export default ListToDos;