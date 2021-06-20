import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


/* const MyPostsContainer =(props) =>{
  return (
    <StoreContext.Consumer> 
      {(store) => {
        let state = store.getState();
        let addPost =() => {
        store.dispatch(addPostActionCreator());
        }
        let onPostChange = (text) => {
        // let action ={type: "APDATE-NEW-POST-TEXT", newText: text};
        let action =updeteNewPostTextActionCreator(text);
        store.dispatch(action);
        }
  return <MyPosts addPost={addPost}
            updateNewPostText={onPostChange} 
            posts={state.profilePage.posts} 
            newPostText={state.profilePage.newPostText}/>
        }
      }
    </StoreContext.Consumer>
  )
}  */

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;