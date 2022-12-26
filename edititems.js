import React, { useState, useEffect } from "react";
import './App.css';

export function Edit_items(props){

    const{setEditing,currentUser,Updated} =props 
    const [user,SetUser] = useState(currentUser);
    useEffect(()=>{
      SetUser(currentUser);
    },[props])
  
    const handleClick=()=>{
        setEditing(false);
    }
    const handleChange=(event)=>{
        const {name,value} =event.target;
        SetUser({...user,[name]:value});
        // SetUser([...user,value])
        // console.log(value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!user.name||!user.age||!user.skills) return;
        Updated(user.id,user);
       
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
                <button>Update Changes</button>
                <button onClick={()=>handleClick()}>Cancel</button>
                
            </form>
        </div>
    )
    ;

}