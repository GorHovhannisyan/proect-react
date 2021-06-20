import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import  {maxLengthCreator, required}  from  "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormControls";


const MyPosts = React.memo(props => {

      console.log("RENDER YO")
      let postsElements = [...props.posts].reverse().map((p) => <Post message={p.message} likesCount={p.likesCount} />)
    
      let newPostElement = React.createRef();

      let onAddPost =(values) => {
         props.addPost(values.newPostText);
      }
   
   return (
      <div className={s.postsBlok} >
         <h3>My post</h3>
        { <AddNewPostFormRedux onSubmit={onAddPost} /> }
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
   
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
         <Field component={Textarea} name="newPostText" placeholder="Post message" 
            validate={[ required, maxLength10 ]} />
         </div>
         <div>
            <button >Add Post</button>  
         </div>
    </form>
   )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;