import React, { useState } from "react";
import './App.css';
import { Edit_items } from "./edititems";
import Form from "./form";
import { Tab } from "./Tab";





export default function App(){

  const details=[
  {
    id:1,name:"Harini",age: 89,skills:"c"
  },
  {
    id:2,name:"jana",age: 20,skills:"java"
  },
  {
    id:3,name:"Guna",age: 9,skills:"c++"
  },
]
const [data,setData]=useState(details);

//add 
 const adduser=(user)=>{
    // user.id = data.length +1;
    setData([...data,user])

 }

//delete

 const remove =(index)=>{
  const deletedata =[...data];
  deletedata.splice(index,1);
  setData(deletedata);
}
//edit
const [editing,setEditing] =useState(false);
const initialState ={id:null,name:"",age:"",skills:""}
const [currentUser,SetCurrentUser]= useState(initialState);

const edittable=(user)=>{
  setEditing(true);
  SetCurrentUser({id:user.id,name:user.name,age:user.age,skills:user.skills})
}
const Updated =(id,updateduser)=>{
  setEditing(false)
  setData(data.map((user)=>(user.id===id?updateduser:user)))
  

}
 return(
   <div className="class-container">
    <h1 className="class1">CRUD Operation</h1>
    <Tab data={data} remove={remove} edittable={edittable}/>
    {editing?(
      <div>
        <h3 className="items-add">Edit items</h3>
        <Edit_items setEditing={setEditing} currentUser={currentUser} Updated={Updated}/>
      </div>
    ):( <div>
        <h3 className="items-add">Add items</h3>
    <Form adduser={adduser}/>
      </div>)}
    
   </div>
  

 );
}