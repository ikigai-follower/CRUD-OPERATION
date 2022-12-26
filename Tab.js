import React, { useState } from "react";
import './App.css';



export function Tab(props) {
   const {data, remove, edittable} =props;
  
    return(
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                        <th>skills</th>
                        <th colSpan={4}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length>0 ?
                    (data.map((datas,index)=>(                        <tr key={index}>
                        <td>{datas.name}</td>
                        <td>{datas.age}</td>
                        <td>{datas.skills}</td>
                        <td>
                            <button onClick={()=>edittable(datas)}>Edit</button></td>
                            <td><button onClick={()=>
                                remove(index)}>Delete</button>
                        </td>
                    </tr>
                    ))):( <tr>
                        <td colSpan={4}>No data found</td>
                        </tr>)
                        }
                   
                </tbody>
            </table>
        
        </div>
    )
    
}