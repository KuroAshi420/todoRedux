import React, {useState} from 'react';
import {connect} from 'react-redux';
import {deleteItem,completeItem,editItem,saveItem} from "../Action/action"

function Itemss(props) {
  const [newInput,setNewInput] = useState("")
    return (<div>
        <div className="affichage">
            <ul>
              {props.list.map((el)=>(
                  <div>
                  {el.isEditable ?
                  <li>
                      <input className="new_input" type="text" value={!el.isEditable?newInput:el.text} onChange={(e)=>setNewInput(e.target.value)}></input>
                      <button className="delete" onClick={()=>props.saveItem({id:el.id,text:newInput})}>Save</button>
                  </li>:
                  <li key={el.id}>
                     <button className="complete" onClick={()=>props.completeItem(el.id)}>{el.isCompleted ? "Undo" : "Complete"} </button>
                     <button className="delete" onClick={()=>props.deleteItem(el.id)}>Delete</button>
                     <button className="delete" onClick={()=>{props.editItem(el.id); setNewInput(el.text);}}>edit</button>
                      <span className="txt" style={{ textDecoration: (el.isCompleted) && "line-through" }} >{el.text}</span>
                  </li> }
                  </div>
              ))}
            </ul>
        </div>
        
    </div>);
}
const mapDispatchToProps = (dispatch) => {
    return {
      deleteItem:(payload) => dispatch(deleteItem(payload)),
      completeItem:(payload) => dispatch(completeItem(payload)),
      editItem:(payload) => dispatch(editItem(payload)),
      saveItem:(payload) => dispatch(saveItem(payload))
    }
}

const mapStateToProps = (state) => ({
    list : state.item
})
export default connect(mapStateToProps,mapDispatchToProps)(Itemss)