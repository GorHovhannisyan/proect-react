import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

/* const DialogsContainer =() =>{
  return (
    <StoreContext.Consumer>
    {(store) => {
      let state = store.getState().dialogsPage;
      let onSendMessageClick =() => {
      store.dispatch(sendMessageCreator());
      }  
      let onNewMassageChange = (body) => {
      store.dispatch(updeteNewMessageBodyCreator(body));
      }
  return <Dialogs sendMessage={onSendMessageClick}
            updeteNewMessageBody={onNewMassageChange}
            dialogsPage={state} />
            }
      }
      </StoreContext.Consumer> 
   )
} */

let mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
      sendMessage: (newMessageBody) => {
        dispatch(sendMessageCreator(newMessageBody));
      }
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);