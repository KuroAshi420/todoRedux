 const initialState = { item : []}

 export default function reducer (state=initialState, action){
     switch (action.type){
         case "Add_ITEM" :
             return {item:[...state.item,action.payload]}
         case "DELETE_ITEM" :
             return {item : state.item.filter((el,index)=> (el.id!==action.payload))}
         case "COMPLETE_ITEM" :
             return {item : state.item.map((el,index)=>(el.id===action.payload)?{...el,isCompleted:!el.isCompleted } : el)}
         case "EDIT_ITEM" :
             return {item : state.item.map((el,index)=>(el.id===action.payload)?{...el,isEditable:!el.isEditable } : el)}    
         case "SAVE_ITEM" :
             return {item : state.item.map((el,index)=>(el.id===action.payload.id)?{...el,text:action.payload.text,isEditable:!el.isEditable } : el)}    
         default :
         return state     
     }
 }