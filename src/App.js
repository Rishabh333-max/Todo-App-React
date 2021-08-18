import React, { useState } from "react";
import TodoList from "./TodoList";

const App=()=>{
  const[name,setName]=useState(null);
  const[fullName,setFullName]=useState([]);
  const createTodo=(e)=>{
 setName(e.target.value)
  }
  const setTodo=()=>{
     setFullName((oldItems)=>{
       return [...oldItems,name]
     })
     setName("");
  }
  const deleteItems=(id)=>{
  setFullName((oldItems)=>{
    return oldItems.filter((arrItems,index)=>{
   return index!==id;
    })
  })
  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input type="text" placeholder="add a item" onChange={createTodo} value={name} />
        <button onClick={setTodo}>+</button>

        <ol>
          {/* <li>{name}</li> */}
        {  fullName.map((item,index)=>{
    return  <TodoList key={index} 
    id={index} 
    text={item}
    onSelect={deleteItems}  
    />
          })}
        </ol>
      </div>
    </div>
    </>
  )
}
export default App;