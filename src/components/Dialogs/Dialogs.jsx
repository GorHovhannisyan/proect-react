import React from "react";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs =(props) =>{
  
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map( (m) => <Message  message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody;

  
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

    return  (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
         {dialogsElements} 
      </div>
      <div className={s.messages}>
        <div>  {messagesElements}</div>         
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
    )  
}


export default Dialogs;