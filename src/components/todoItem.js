import React, {useState} from "react";
import {connect} from "react-redux";
import {addItem} from "../Action/action"

function TodoItem(props) {
    const [input,setInput]= useState("")
    const addNewItem = () =>{
     props.addItem({
       id : Date.now(),
       text : input,
       isCompleted : false,
       isEditable:false
     })
     setInput("")
    }
  return (
    <div>
      <div className="header">
        <h1>TO-DO App!</h1>
        <p class="sousTitre">Add new To-Do</p>
        <input 
         type="text" 
         placeholder="Enter new task"
         class="item" 
         value={input} 
         onChange={(e)=>setInput(e.target.value)} 
        />
        <button type="submit" class="btn" onClick={()=>addNewItem()}>Add</button>
      </div>
      <div className="response-text">
        <h3>Let's get some works done!</h3>
        <hr />
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
    return {
      addItem:(payload) => dispatch(addItem(payload))
    }
}
export default connect(null,mapDispatchToProps)(TodoItem);
