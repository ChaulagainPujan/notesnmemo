import React, {useState} from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
function Form(props)
{
    const [memo, setmemo] = useState({
        title:"",
        description:""
    });

    function handleChange(event)
    {
        const name = event.target.name;
        const val = event.target.value;

        setmemo((prevmemo) =>
        {
            return {
                ...prevmemo,
                [name]: val,
                                
            }
        }

        );
        
        //event.preventDefault();
    }

    return (
    <div className="form-wrapper">
    <form className="form" onSubmit={ (event) => {props.handleForm(memo);event.preventDefault();setmemo({title:"",description:""}) }}>
        <input type="text" name="title" placeholder="Title" value={memo.title} onChange={handleChange}></input><br />
        <input type="text" name="description" placeholder="description" value={memo.description} onChange={handleChange}></input><br />
        <button type="submit" > <AddCircleOutlineIcon /> </button>
    </form>
    </div>
    );
}

export default Form;