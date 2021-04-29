import React,{useState} from "react";
import Header from "./Header";
import Form from "./Form.jsx";
import Item from "./Item.jsx";
import Footer from "./Footer.jsx";

function App()
{

    const [memos,setmemos] = useState([]);

    function handleSubmit(memo)
    {
        setmemos(
            (prevmemos) =>{
                
                return ([
                ...prevmemos,
                memo
            ]);
        }
        );
    }

    function handleDelete(id)
    {
        setmemos((prevmemos) => {
            return prevmemos.filter(
            (memo,index) => {
                return id !== index;
            }
        );

        });
    }

    return (
        <div>
        <Header />
        <Form 
            handleForm={handleSubmit}
        />
        {memos.map((memo,index) => {

            return (
            <Item 
                key={index}
                id={index}
                title={memo.title}
                description={memo.description}
                onDel={handleDelete}
            />
            );
        })}

        <Footer />
        </div>
    );
}

export default App;