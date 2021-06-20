import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormControls";


const maxLength50 = maxLengthCreator(50);

const AddMessageform = (props) => {
    return(
       <form onSubmit={props.handleSubmit}> 
          <div>
            <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
              validate={[ required, maxLength50 ]} />
          </div>
          <div>
            <button >Send</button>  
          </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageform"})(AddMessageform);