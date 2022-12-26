import React, { useState } from "react";
import './App.css';

export default function Form(props){
    
    const initialState ={id:null,name:"",age:"",skills:""}
    
    const [user,SetUser] = useState(initialState);

    const handleChange=(event)=>{
        const {name,value} =event.target;
        SetUser({...user,[name]:value});
        // SetUser([...user,value])
        // console.log(value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        
        if(!user.name||!user.age||!user.skills) return alert("Enter all input field");
        console.log(user.name);
        props.adduser(user);
        SetUser(initialState);
    }

    
    return(
        <div className="form-container"> 
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" value={user.name} onChange={handleChange}/>
                <label>age: </label>
                <input type="text" name="age" value={user.age} onChange={handleChange}/>
                <label>skill: </label>
                <input type="text" name="skills" value={user.skills} onChange={handleChange}/>
                <button>Add User</button>

                
            </form>
        </div>
    )
}