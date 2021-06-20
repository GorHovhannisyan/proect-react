import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
      profilePage:{
         posts: [
    {id: 1, message: "Hi, How are yow?", likesCount: "12"},
    {id: 2, message: "It's my first post", likesCount: "11"},
    {id: 3, message: "Blabla", likesCount: "13"},
    {id: 4, message: "Dada", likesCount: "15"}
  ],
  newPostText:"hi"
      },
      
      dialogsPage: {
          messages: [
   {id: 1, message: "Hi"},
   {id: 2, message: "How is you it-kamasutra?"},
   {id: 3, message: "Yo"},
   {id: 4, message: "Yo"},
   {id: 5, message: "Yo"}
  ],
  newMessageBody:"",

         dialogs: [
    {id: 1, name: "Dimich"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name:"Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
  ]
      }, 

      sidebar: {}
     
  },
  getState() {
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("State changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
    
  } 
}
  
  export default store;
  window.store = store;
  // store - OOP

