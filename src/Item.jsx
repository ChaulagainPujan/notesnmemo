import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
function Item(props)
{
    return (
        <div className="item">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <button onClick={() => {props.onDel(props.id) }}><DeleteIcon /></button>
        </div>
    );
}

export default Item;